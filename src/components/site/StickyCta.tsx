import { Link } from "@tanstack/react-router";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-graphite-foreground/10 bg-graphite/95 p-3 backdrop-blur lg:hidden">
      <Link
        to="/kontakt"
        className="eyebrow block rounded-sm bg-accent px-4 py-4 text-center text-accent-foreground"
      >
        Be om kostnadsfri bedömning
      </Link>
    </div>
  );
}