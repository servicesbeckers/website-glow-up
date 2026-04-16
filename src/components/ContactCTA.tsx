import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Een project bespreken?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Stuur ons een foto, schets of plan door en ontvang snel een gerichte
          reactie.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link to="/contact">
              Offerte aanvragen
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="mailto:info@werkhuizenbeckers.be">
              <Mail size={16} />
              info@werkhuizenbeckers.be
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="tel:+32476063285">
              <Phone size={16} />
              +32 476 06 32 85
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
