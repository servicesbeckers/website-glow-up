import { Wrench, LayoutGrid, Sparkles, Wind, Cog, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Herstellingen ter plaatse",
    description:
      "Snelle en betrouwbare herstellingen bij u ter plaatse. Elk probleem wordt efficiënt aangepakt, zodat u snel weer verder kunt. Minimale stilstand, maximale service.",
  },
  {
    icon: LayoutGrid,
    title: "Staal maatwerk",
    description:
      "Robuust en veelzijdig. Staal biedt maximale stevigheid en draagkracht, ideaal voor constructies en toepassingen waar kracht en stabiliteit essentieel zijn.",
  },
  {
    icon: Sparkles,
    title: "RVS maatwerk",
    description:
      "Duurzaam, hygiënisch en onderhoudsvriendelijk. Inox is bestand tegen roest en slijtage, perfect voor maatwerk in omgevingen waar kwaliteit, netheid en lange levensduur centraal staan.",
  },
  {
    icon: Wind,
    title: "Aluminium maatwerk",
    description:
      "Licht en toch sterk. Aluminium is corrosiebestendig en ideaal voor toepassingen waar duurzaamheid en een strakke afwerking belangrijk zijn.",
  },
  {
    icon: Cog,
    title: "Enkele stuks",
    description:
      "Of het nu om één onderdeel gaat of een prototype: wij produceren ook kleine series en enkelstuks met dezelfde precisie en afwerking.",
  },
  {
    icon: Lightbulb,
    title: "Technisch meedenken",
    description:
      "Wij denken mee over materiaal, uitvoering en haalbaarheid. Zo krijgt u niet alleen een product, maar ook een doordachte oplossing.",
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Diensten
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Maatwerk voor uiteenlopende toepassingen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Van functionele constructies tot verfijnde afwerking: wij leveren
            metaalwerk op maat met aandacht voor kwaliteit, precisie en
            duurzaamheid.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
