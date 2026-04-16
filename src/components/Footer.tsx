export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Werkhuizen</span> Beckers
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Vakmanschap in staal, RVS en aluminium
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Industrieweg 12, 3500 Hasselt</p>
            <p>Tel: +32 11 00 00 00</p>
            <p>info@werkhuizenbeckers.be</p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Werkhuizen Beckers. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
