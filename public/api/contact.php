<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): never {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['message' => 'Metoden stöds inte.']);
}

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    error_log('Garageverket contact form: missing api/config.php');
    respond(503, ['message' => 'Kontaktformuläret är inte konfigurerat ännu.']);
}

$config = require $configPath;
if (!is_array($config) || empty($config['resend_api_key']) || empty($config['from_email'])) {
    error_log('Garageverket contact form: invalid api/config.php');
    respond(503, ['message' => 'Kontaktformuläret är inte konfigurerat ännu.']);
}

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    respond(400, ['message' => 'Ogiltig förfrågan.']);
}

// Hidden honeypot: silently accept automated submissions without sending an email.
if (!empty($input['website'])) {
    respond(200, ['ok' => true]);
}

function value(array $input, string $key, int $maxLength): string {
    $value = trim((string)($input[$key] ?? ''));
    return mb_substr($value, 0, $maxLength);
}

$name = value($input, 'namn', 120);
$email = value($input, 'epost', 254);
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['message' => 'Ange namn och en giltig e-postadress.']);
}

$fields = [
    'Namn' => $name,
    'Företag/förening' => value($input, 'foretag', 160),
    'E-post' => $email,
    'Telefon' => value($input, 'telefon', 50),
    'Adress' => value($input, 'adress', 200),
    'Ort' => value($input, 'ort', 100),
    'Typ av anläggning' => value($input, 'typ', 100),
    'Ungefärlig storlek' => value($input, 'storlek', 50),
    'Antal parkeringsplatser' => value($input, 'platser', 50),
    'Önskad tidsperiod' => value($input, 'tid', 100),
    'Vilken hjälp behövs' => value($input, 'behov', 5000),
];

$lines = [];
foreach ($fields as $label => $fieldValue) {
    if ($fieldValue !== '') {
        $lines[] = $label . ":\n" . $fieldValue;
    }
}

$payload = json_encode([
    'from' => $config['from_email'],
    'to' => ['info@garageverket.se'],
    'reply_to' => $email,
    'subject' => 'Ny förfrågan från ' . $name,
    'text' => implode("\n\n", $lines),
], JSON_UNESCAPED_UNICODE);

$request = curl_init('https://api.resend.com/emails');
curl_setopt_array($request, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $config['resend_api_key'],
        'Content-Type: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);
$response = curl_exec($request);
$status = (int)curl_getinfo($request, CURLINFO_HTTP_CODE);
$curlError = curl_error($request);
curl_close($request);

if ($response === false || $status < 200 || $status >= 300) {
    error_log('Garageverket contact form: Resend delivery failed. HTTP ' . $status . ' ' . $curlError);
    respond(502, ['message' => 'Det gick inte att skicka förfrågan. Försök igen senare.']);
}

respond(200, ['ok' => true]);
