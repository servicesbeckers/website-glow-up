import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-10 sm:p-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Klaar om te starten?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Neem vrijblijvend contact met ons op voor een bespreking of offerte.
            Wij helpen u graag verder.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 text-base">
              <a href="tel:+3211000000">
                <Phone size={18} /> Bel ons
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 text-base">
              <a href="mailto:info@werkhuizenbeckers.be">
                <Mail size={18} /> E-mail ons
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
