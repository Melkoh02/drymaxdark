import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = ["about", "services", "process", "contact"] as const;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const activeSection = useActiveSection();
  const currentLang = i18n.language;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(currentLang === "es" ? "en" : "es");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-4 sm:px-8 py-4 sm:py-6">
      <div className="flex justify-between items-center max-w-full mx-auto">
        <div className="text-2xl font-black tracking-[0.1em] text-black">
          DMD
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`font-headline tracking-[0.05em] uppercase text-sm font-bold transition-colors duration-300 ${
                activeSection === item
                  ? "text-black"
                  : "text-neutral-400 hover:text-black"
              }`}
            >
              {t(`nav.${item}`)}
              {activeSection === item && (
                <span className="block h-[2px] bg-secondary-container mt-1" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleLang}
            className="font-label text-[10px] uppercase tracking-widest text-outline hover:text-primary transition-colors duration-200"
          >
            {currentLang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-block bg-primary text-on-primary px-6 py-2 text-sm font-headline tracking-[0.05em] uppercase font-bold rounded-sm scale-95 hover:scale-100 transition-transform duration-200"
          >
            {t("nav.cta")}
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-black transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-black transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-black transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4 border-t border-outline-variant pt-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`font-headline tracking-[0.05em] uppercase text-sm font-bold transition-colors duration-300 ${
                activeSection === item
                  ? "text-black"
                  : "text-neutral-400"
              }`}
            >
              {t(`nav.${item}`)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="sm:hidden bg-primary text-on-primary px-6 py-3 text-sm font-headline tracking-[0.05em] uppercase font-bold rounded-sm text-center"
          >
            {t("nav.cta")}
          </a>
        </div>
      )}
    </nav>
  );
}
