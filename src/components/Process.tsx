const steps = [
  {
    number: "01",
    title: "Bespreking",
    description: "We bespreken uw wensen en nemen de situatie ter plaatse op.",
  },
  {
    number: "02",
    title: "Offerte",
    description: "U ontvangt een duidelijke offerte zonder verborgen kosten.",
  },
  {
    number: "03",
    title: "Uitvoering",
    description: "Ons team gaat vakkundig aan de slag met kwaliteitsmaterialen.",
  },
  {
    number: "04",
    title: "Oplevering",
    description: "Controle, oplevering en tevredenheidsgarantie.",
  },
];

export function Process() {
  return (
    <section id="werkwijze" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Onze werkwijze
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Van idee tot realisatie
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-12 left-[12%] right-[12%] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-2 border-primary bg-background text-xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
