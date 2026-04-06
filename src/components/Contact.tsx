import { type FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="py-32 px-8 bg-surface-container-highest" id="contact">
      <div className="max-w-4xl mx-auto bg-surface p-12 md:p-20 rounded-sm shadow-[0_40px_60px_-15px_rgba(26,28,28,0.06)]">
        <div className="mb-12">
          <h2 className="font-headline text-4xl font-black uppercase tracking-tight mb-4">
            Tell me what you need
          </h2>
          <p className="font-body text-on-surface-variant">
            Describe your project, material preferences, and timeline. I'll
            review and get back to you with a technical path forward.
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                Name
              </label>
              <input
                className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-sm p-4 font-body text-sm"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                Contact Email
              </label>
              <input
                className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-sm p-4 font-body text-sm"
                placeholder="john@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label text-[10px] uppercase tracking-widest text-outline">
              Description of Request
            </label>
            <textarea
              className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-sm p-4 font-body text-sm resize-none"
              placeholder="Briefly describe what you're looking to build..."
              rows={4}
            />
          </div>
          <button
            className="w-full bg-primary text-on-primary py-5 rounded-sm font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-colors duration-300"
            type="submit"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
