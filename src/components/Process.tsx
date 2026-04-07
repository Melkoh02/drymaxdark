import { useTranslation } from "react-i18next";

const STEP_STYLES = [
  { bgClass: "bg-primary", textClass: "text-on-primary" },
  { bgClass: "bg-secondary-container", textClass: "text-on-secondary-container" },
  { bgClass: "bg-primary", textClass: "text-on-primary" },
  { bgClass: "bg-secondary-container", textClass: "text-on-secondary-container" },
];

const NUMBERS = ["01", "02", "03", "04"];

export default function Process() {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-surface-container-lowest"
      id="process"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <span className="font-label text-xs uppercase tracking-[0.5em] text-outline mb-4 block">
            {t("process.label")}
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black uppercase">
            {t("process.heading")}
          </h2>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-outline-variant z-0" />
          {STEP_STYLES.map((style, i) => (
            <div
              key={i}
              className="relative z-10 flex-1 flex flex-col items-center text-center px-4"
            >
              <div
                className={`w-12 h-12 ${style.bgClass} ${style.textClass} flex items-center justify-center font-label font-bold mb-6 sm:mb-8 rounded-sm`}
              >
                {NUMBERS[i]}
              </div>
              <h5 className="font-headline font-extrabold uppercase tracking-widest text-sm mb-3 sm:mb-4">
                {t(`process.steps.${i}.title`)}
              </h5>
              <p className="font-body text-xs text-on-surface-variant max-w-[200px]">
                {t(`process.steps.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
