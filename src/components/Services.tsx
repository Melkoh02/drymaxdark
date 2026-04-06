import { useTranslation } from "react-i18next";

const SERVICE_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgdCaGf43qVdOEs4KppzirZJb1C9sV9qWayAwc3nKZqyWm4huTALRg9Eo5WPRyVTIW1soJchzp7O9RyBryaBMvuPii-wQuaoH2-oCpSj5thdy-jMT7Wx11k7kRUfX6YGlhU7GGzV4vgIrxW1CDgCAjCsMdpJJVpS4r80ca8F0oDzYRWMqlUVvfhxvN8hO8aOzLskWpw0DATp7rsjJ_6MAYK4HLjSn1UfAMoAZfQxAMaYmWRyrs8Svj4s8LtvzstulncMQWEhQJjYd6",
    alt: "Minimalist wooden coffee table with intricate joinery detail",
    bgClass: "bg-surface-container",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2tT02sFn_85UjzH5vQ8PyanYBPe0bX3KID_a1yJtxPLZbFY0mb3mikbr6Y6xPkIV9MZvQ7xlfbE-mV-dn2Nm-et1oUrQwb-OJj45FHvz2JxPrr_xfyAL-OxUMUMLHI2fD6BVYTCO4mu0yAE3M_cT59KFUKu5zs5s46-vKFYpRQE0f_tGJmkmjzUSrWzBsrmbXRf875IXYhrZTBaAbcb9AjT15opjl9xg6rSGRdic01WZJhuD95J9g2986yqM5-L2IwsQXp4h7gtrD",
    alt: "Welder working on a steel frame, blue sparks flying",
    bgClass: "bg-surface-container-high",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxUvHx0nezx95uBZA2QtJ7hXZF3zCJEhKebxWderJCXBAXdrWswcIA0xcl44RXWpKJQoBjY8nKwfpFUSE4hEzD-6J9Vq_pk8V8SMe500FINgEZiolrCHRseNxJITOdFiJv4mZkMZ-t24A5zGbB0GeyVc_uHZ_JmIfQ2elbn2Yvy4M6qxsqBdALJQAiQUOw11A-lcVxOuehjard0aDt2xXkxNmyciyBTXCpLHB_-z6eRGHIvcNcC_yG4FKeMaCTlyklc2KzCXl_GbBu",
    alt: "Stack of high-quality blank cotton t-shirts in neutral tones",
    bgClass: "bg-surface-container",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_bU3AWwgLhjZ9M9X2OEaIp_J9mb_cHKyd7cmOwEsNskId-tGzCX_mX26sdWJuCNdWlOAxnZKh0PaUwv7p0krmZtoQZMdjJm_ndjOlavrC4EXVn8qaNvqSaNgjnZqJzTUs3YK_optUsmzx9AorHrmS8O97cpWG_srpOPTaLTT7V-vJdms-DX5QpGIHUE8NCz2ZSqdIG2Qtm_L2A57VamqicOL2eNmXD23CBiJC2vyFyoXyQ6T1nsnYnK359GTv5MJlSl3V6SzfXfQh",
    alt: "Professional music studio setup with analog synthesizers",
    bgClass: "bg-surface-container-high",
  },
];

const NUMBERS = ["01", "02", "03", "04"];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-32 px-8 bg-surface"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex justify-between items-end">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.4em] text-outline mb-2 block">
              {t("services.label")}
            </span>
            <h2 className="font-headline text-6xl font-black uppercase">
              {t("services.heading")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICE_IMAGES.map((service, i) => (
            <div
              key={i}
              className={`group ${service.bgClass} p-8 h-[400px] flex flex-col justify-between rounded-sm border border-transparent hover:border-outline-variant transition-all duration-300`}
            >
              <div>
                <span className="font-label text-3xl font-light text-secondary-fixed-dim">
                  {NUMBERS[i]}
                </span>
                <h4 className="font-headline text-2xl font-bold mt-4 uppercase tracking-tighter">
                  {t(`services.items.${i}.title`)}
                </h4>
              </div>
              <div>
                <p className="font-body text-sm text-on-surface-variant mb-6">
                  {t(`services.items.${i}.description`)}
                </p>
                <div className="w-full aspect-video bg-surface-container-highest overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    alt={service.alt}
                    src={service.src}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
