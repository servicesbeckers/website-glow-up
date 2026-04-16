import { Shield, Clock, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Vakmanschap",
    description:
      "Jarenlange ervaring in staal-, inox- en aluminiumbewerking zorgt voor een betrouwbaar resultaat.",
  },
  {
    icon: Clock,
    title: "Korte doorlooptijd",
    description:
      "Dankzij een efficiënte werkwijze en directe communicatie beperken we stilstand tot een minimum.",
  },
  {
    icon: ThumbsUp,
    title: "Persoonlijke aanpak",
    description:
      "Elk project krijgt individuele aandacht. We denken mee en adviseren over de beste oplossing.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Waarom wij
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Waarom kiezen voor Werkhuizen Beckers?
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                <r.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
