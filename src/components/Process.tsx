const steps = [
  {
    number: "1",
    title: "Bezorg ons een foto, schets of plan",
    description: "Deel uw idee, probleem of plan met ons via mail of telefoon.",
  },
  {
    number: "2",
    title: "Materiaal, afmetingen en toepassing",
    description:
      "Samen bekijken we welke oplossing het beste past en welke materialen nodig zijn.",
  },
  {
    number: "3",
    title: "Duidelijke offerte op maat",
    description:
      "Een heldere aanpak met transparante prijzen, afgestemd op uw project.",
  },
  {
    number: "4",
    title: "Professionele uitvoering",
    description:
      "We zorgen voor een vakkundige uitvoering met aandacht voor kwaliteit en detail.",
  },
];

export function Process() {
  return (
    <section id="werkwijze" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Werkwijze
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Van idee tot afgewerkt resultaat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Elk project begint bij uw probleemstelling, vraag, idee of plan. Van
            daaruit bekijken we samen welke oplossing het beste past.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-primary/40 to-transparent lg:block" />
              )}
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
