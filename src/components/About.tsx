import { useTranslation } from "react-i18next";

const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDMyoWWSJUsB7gQNdtm5h_tszeJk7EDfX2RGdt8hdO9q8D1kYpNvGd6w_H4c390KVajZ6PL9iFUNiSQyUX17pppzsi0Rt372gn2gdfXLWhcrFEq7pbTvNsGffv1rfBAZERg6bmNEAuOZAW6QDQSpur4UedsPh9UpAUjbMTxATCZaslwD1YZsUgzlp2l0E9vsb7fJe0BeW-5bLVbwzuwh3j46c72tere5UFy-dkswJ5a7cTJOviSPlbp6SR_X-mc912Oq2W6Tv_DuI-7";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative aspect-square bg-surface-container-highest overflow-hidden rounded-sm">
          <img
            className="w-full h-full object-cover grayscale contrast-125"
            alt="Professional craftsman focusing on a detail of a wooden joint"
            src={ABOUT_IMAGE}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <h2 className="font-label text-sm uppercase tracking-[0.4em] font-bold">
              {t("about.label")}
            </h2>
          </div>
          <h3 className="font-headline text-5xl font-extrabold tracking-tight leading-tight">
            {t("about.heading")}
          </h3>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            {t("about.description")}
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-1">
                {t("about.materialsLabel")}
              </span>
              <p className="font-headline font-bold text-sm">
                {t("about.materialsValue")}
              </p>
            </div>
            <div>
              <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-1">
                {t("about.disciplineLabel")}
              </span>
              <p className="font-headline font-bold text-sm">
                {t("about.disciplineValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
