import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.75_0.16_65/0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Werkhuizen Beckers
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Vakmanschap in{" "}
          <span className="bg-gradient-to-r from-primary to-[oklch(0.82_0.14_80)] bg-clip-text text-transparent">
            staal, RVS en aluminium
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Al meer dan 30 jaar uw specialist voor herstellingen, constructiewerk en maatwerk in metaal.
          Kwaliteit, betrouwbaarheid en persoonlijke service.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2 text-base">
            <a href="#contact">
              Neem contact op <ArrowRight size={18} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <a href="#projecten">Bekijk projecten</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
