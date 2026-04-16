import { Wrench, LayoutGrid, Sparkles, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Herstellingen",
    description:
      "Wij herstellen alle soorten metalen constructies, machines en onderdelen. Snel, vakkundig en betaalbaar.",
    image: "https://werkhuizenbeckers.be/images/herstelling1.jpg",
  },
  {
    icon: LayoutGrid,
    title: "Staalconstructies",
    description:
      "Van draagstructuren tot trappen, balustrades en bordessen — wij realiseren staalconstructies op maat voor elke toepassing.",
    image: "https://werkhuizenbeckers.be/images/balustrade1.jpg",
  },
  {
    icon: Sparkles,
    title: "RVS werken",
    description:
      "Inox/RVS werken voor keukens, industrie en architectuur. Duurzaam, hygiënisch en stijlvol afgewerkt.",
    image: "https://werkhuizenbeckers.be/images/rvs1.jpg",
  },
  {
    icon: Wind,
    title: "Aluminium",
    description:
      "Lichtgewicht en corrosiebestendig — aluminium constructies en onderdelen voor diverse toepassingen.",
    image: "https://werkhuizenbeckers.be/images/alu1.jpg",
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Onze diensten
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Metaalbewerking op maat in Limburg
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Met jarenlange ervaring leveren wij kwaliteitswerk in staal, RVS en aluminium —
            van herstellingen tot complete metaalconstructies.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0.75_0.16_65/0.1)]"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="size-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/70" />
              </div>

              <CardContent className="relative flex flex-col items-start gap-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
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
