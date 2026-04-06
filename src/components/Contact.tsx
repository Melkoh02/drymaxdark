import { type FormEvent } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-32 px-8 bg-surface-container-highest"
      id="contact"
    >
      <div className="max-w-4xl mx-auto bg-surface p-12 md:p-20 rounded-sm shadow-[0_40px_60px_-15px_rgba(26,28,28,0.06)]">
        <div className="mb-12">
          <h2 className="font-headline text-4xl font-black uppercase tracking-tight mb-4">
            {t("contact.heading")}
          </h2>
          <p className="font-body text-on-surface-variant">
            {t("contact.description")}
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                {t("contact.nameLabel")}
              </label>
              <input
                className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-sm p-4 font-body text-sm"
                placeholder={t("contact.namePlaceholder")}
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                {t("contact.emailLabel")}
              </label>
              <input
                className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-sm p-4 font-body text-sm"
                placeholder={t("contact.emailPlaceholder")}
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label text-[10px] uppercase tracking-widest text-outline">
              {t("contact.descriptionLabel")}
            </label>
            <textarea
              className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-sm p-4 font-body text-sm resize-none"
              placeholder={t("contact.descriptionPlaceholder")}
              rows={4}
            />
          </div>
          <button
            className="w-full bg-primary text-on-primary py-5 rounded-sm font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-colors duration-300"
            type="submit"
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
