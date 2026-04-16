import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">W</span>
              <span className="text-foreground">B</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Werkhuizen Beckers — Vakwerk in staal, RVS en aluminium.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Navigatie</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/projecten" className="transition-colors hover:text-primary">Projecten</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@werkhuizenbeckers.be" className="transition-colors hover:text-primary">
                  info@werkhuizenbeckers.be
                </a>
              </li>
              <li>
                <a href="tel:+32476063285" className="transition-colors hover:text-primary">
                  +32 476 06 32 85
                </a>
              </li>
              <li>Gingelom, Limburg, België</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Werkhuizen Beckers. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
