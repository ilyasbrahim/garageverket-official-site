# Publicera på Simply.com

## Bygg webbplatsen

Kör följande lokalt med Node.js 22 eller senare:

```bash
npm install
npm run build
```

Ladda upp **innehållet** i `dist/client/` till `public_html/` på Simply.com. Ladda inte upp själva `dist`- eller `client`-mappen.

Filen `.htaccess` följer med i bygget och gör att startsidan och alla sidlänkar, till exempel `/kontakt`, fungerar även vid omladdning.

## Konfigurera kontaktformuläret med Resend

1. Skapa eller logga in på ett konto hos [Resend](https://resend.com).
2. Gå till **Domains**, välj **Add Domain** och skriv `garageverket.se`.
3. Kopiera Resends DNS-poster (SPF och DKIM) till DNS-inställningarna för domänen. Vänta tills domänen är **Verified** i Resend.
4. Gå till **API Keys** och välj **Create API Key**. Välj bara behörigheten **Sending access**, döp den till exempelvis `Simply.com kontaktformulär` och kopiera nyckeln som börjar med `re_`.
5. I Simply File Manager eller via SFTP: kopiera `simply/api/config.example.php` till `public_html/api/config.php`.
6. Redigera `public_html/api/config.php` och ersätt `re_replace_with_your_resend_api_key` med nyckeln från steg 4. Låt `from_email` vara `Garageverket <info@garageverket.se>`.
7. Sätt filrättigheten för `public_html/api/config.php` till `600` eller lägsta tillgängliga behörighet.
8. Besök `/kontakt`, skicka en testförfrågan och bekräfta att den kommer till `info@garageverket.se`.

`config.php` ska bara finnas på Simply.com. Den ligger inte i Git och får aldrig laddas upp till GitHub.

## Krav i Simply.com

- PHP 8.1 eller senare
- PHP-tillägget cURL aktiverat (normalt aktivt hos Simply.com)
- Apache `mod_rewrite` aktiverat (normalt aktivt; används av `.htaccess`)
