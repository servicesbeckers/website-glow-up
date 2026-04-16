import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.75_0.16_65/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Hammer size={14} />
            Metaalbewerking op maat
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Vakwerk in{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.82_0.14_80)] bg-clip-text text-transparent">
              staal, RVS en aluminium
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Werkhuizen Beckers realiseert duurzame en functionele oplossingen op
            maat voor particulieren en professionele toepassingen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Offerte aanvragen
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projecten">Bekijk projecten</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
