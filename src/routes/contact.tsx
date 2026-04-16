import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Camera, Ruler, FileText, Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Werkhuizen Beckers" },
      {
        name: "description",
        content:
          "Heeft u een project in gedachten? Bezorg ons uw vraag, schets, plan of foto en wij denken mee over de juiste uitvoering.",
      },
      { property: "og:title", content: "Contact — Werkhuizen Beckers" },
      {
        property: "og:description",
        content:
          "Bezorg ons uw vraag en ontvang snel een gerichte inschatting.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Offerte aanvragen
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Heeft u een project in gedachten? Bezorg ons uw vraag, schets,
              plan of foto en wij denken mee over de juiste uitvoering.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Rechtstreeks contact</h2>
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:info@werkhuizenbeckers.be"
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">E-mail</div>
                    <div className="font-medium">info@werkhuizenbeckers.be</div>
                  </div>
                </a>
                <a
                  href="tel:+32476063285"
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Telefoon</div>
                    <div className="font-medium">+32 476 06 32 85</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Regio</div>
                    <div className="font-medium">Gingelom, Limburg, België</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Wat stuurt u best mee?</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Voor een snelle en gerichte inschatting helpt het als u meteen
                wat extra informatie bezorgt:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  { icon: Camera, text: "Foto's van de huidige situatie" },
                  { icon: FileText, text: "Een schets, plan of voorbeeld" },
                  { icon: Ruler, text: "Afmetingen" },
                  { icon: Wrench, text: "Gewenst materiaal" },
                  {
                    icon: ArrowRight,
                    text: "Eventuele praktische of technische vereisten",
                  },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <item.icon size={16} className="shrink-0 text-primary" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Hoe concreter de aanvraag, hoe sneller wij u gericht kunnen
                adviseren.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-border/50 bg-card/50 p-8 sm:p-10">
            <h2 className="text-xl font-semibold">Hoe gaan we te werk?</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[
                {
                  step: "1",
                  title: "We bekijken uw aanvraag",
                  desc: "en stemmen af wat precies nodig is.",
                },
                {
                  step: "2",
                  title: "We denken technisch mee",
                  desc: "over materiaal, uitvoering en praktische haalbaarheid.",
                },
                {
                  step: "3",
                  title: "U ontvangt een duidelijke offerte",
                  desc: "op maat van uw project.",
                },
                {
                  step: "4",
                  title: "Na akkoord voeren we het werk uit",
                  desc: "met aandacht voor kwaliteit en afwerking.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {item.step}
                  </div>
                  <div>
                    <span className="font-medium">{item.title}</span>{" "}
                    <span className="text-sm text-muted-foreground">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Klaar om uw project te bespreken?
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:info@werkhuizenbeckers.be">
                  <Mail size={16} />
                  Stuur een e-mail
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="tel:+32476063285">
                  <Phone size={16} />
                  Bel ons
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
