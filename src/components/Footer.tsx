import { useTranslation } from "react-i18next";

const WHATSAPP_URL =
  "https://wa.me/595991510703";

const LINKS = [
  { key: "instagram", href: "#" },
  { key: "linkedin", href: "#" },
  { key: "whatsapp", href: WHATSAPP_URL },
] as const;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-12 px-8 bg-neutral-50 border-t border-neutral-200">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <span className="font-bold text-black text-xl tracking-widest">
            DMD
          </span>
          <p className="font-label text-[10px] tracking-widest uppercase mt-2 text-neutral-400">
            {t("footer.copyright")}
          </p>
        </div>
        <div className="flex gap-8">
          {LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              target={key === "whatsapp" ? "_blank" : undefined}
              rel={key === "whatsapp" ? "noopener noreferrer" : undefined}
              className="font-label text-[10px] tracking-widest uppercase text-neutral-400 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
            >
              {t(`footer.${key}`)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
