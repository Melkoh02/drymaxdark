import { useTranslation } from "react-i18next";

const NAV_ITEMS = ["about", "services", "process", "contact"] as const;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLang = () => {
    i18n.changeLanguage(currentLang === "es" ? "en" : "es");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 py-6 max-w-full mx-auto">
      <div className="text-2xl font-black tracking-[0.1em] text-black">
        DMD
      </div>
      <div className="hidden md:flex gap-10 items-center">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="font-headline tracking-[0.05em] uppercase text-sm font-bold text-neutral-500 hover:text-black transition-colors duration-300"
          >
            {t(`nav.${item}`)}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLang}
          className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-colors duration-200"
        >
          {currentLang === "es" ? "EN" : "ES"}
        </button>
        <a
          href="#contact"
          className="bg-primary text-on-primary px-6 py-2 text-sm font-headline tracking-[0.05em] uppercase font-bold rounded-sm scale-95 hover:scale-100 transition-transform duration-200"
        >
          {t("nav.cta")}
        </a>
      </div>
    </nav>
  );
}
