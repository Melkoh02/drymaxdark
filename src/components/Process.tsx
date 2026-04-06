interface Step {
  number: string;
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "You bring the idea. We define the constraints and objectives.",
    bgClass: "bg-primary",
    textClass: "text-on-primary",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I design a technical solution, ensuring structural integrity.",
    bgClass: "bg-secondary-container",
    textClass: "text-on-secondary-container",
  },
  {
    number: "03",
    title: "Fabrication",
    description: "The build phase. Precise execution across materials.",
    bgClass: "bg-primary",
    textClass: "text-on-primary",
  },
  {
    number: "04",
    title: "Fulfillment",
    description: "You receive a custom result built to last a lifetime.",
    bgClass: "bg-secondary-container",
    textClass: "text-on-secondary-container",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-label text-xs uppercase tracking-[0.5em] text-outline mb-4 block">
            The Workflow
          </span>
          <h2 className="font-headline text-6xl font-black uppercase">
            The Flow
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-outline-variant z-0" />
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex-1 flex flex-col items-center text-center px-4"
            >
              <div
                className={`w-12 h-12 ${step.bgClass} ${step.textClass} flex items-center justify-center font-label font-bold mb-8 rounded-sm`}
              >
                {step.number}
              </div>
              <h5 className="font-headline font-extrabold uppercase tracking-widest text-sm mb-4">
                {step.title}
              </h5>
              <p className="font-body text-xs text-on-surface-variant max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
