import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Stalen trap op maat",
    image: "https://werkhuizenbeckers.be/images/trap1.jpg",
    category: "Staal",
  },
  {
    title: "RVS keukeninrichting",
    image: "https://werkhuizenbeckers.be/images/rvs1.jpg",
    category: "RVS",
  },
  {
    title: "Balustrade in staal",
    image: "https://werkhuizenbeckers.be/images/balustrade1.jpg",
    category: "Staal",
  },
  {
    title: "Aluminium constructie",
    image: "https://werkhuizenbeckers.be/images/alu1.jpg",
    category: "Aluminium",
  },
  {
    title: "Herstelling machines",
    image: "https://werkhuizenbeckers.be/images/herstelling1.jpg",
    category: "Herstellingen",
  },
  {
    title: "Poorten en hekwerk",
    image: "https://werkhuizenbeckers.be/images/poort1.jpg",
    category: "Staal",
  },
];

export function Projects() {
  return (
    <section id="projecten" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Realisaties
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Onze projecten
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Een greep uit ons werk. Elk project wordt met dezelfde zorg en vakmanschap uitgevoerd.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {project.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
