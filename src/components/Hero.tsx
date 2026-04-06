const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEWUq6eGW974jM3NICzjooTDQvlznme5vtX0XjyBa6HbJ62Cf7w3HSj7gguGMiggMol5jpuxhu6SjbqDtHkyP5dMSImyUEwqcULPjyiCI7OB3VPpdyJwz8XJ-GHrdNxHstMwQAJYWhuqcCs34n5LtDtTGg1MnamDbxow8dJhfdUNdBlkpUqkanZKiYTs1zLAw6-8BInMMeSWcELZmtaUSf9Kt8mQ6jzC-0WoXei_zRdjEz-nYh2e9aNSVJg8NtPwd4Lo2jDdbw5zYO";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 px-8 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          className="w-full h-full object-cover"
          alt="Close-up of industrial workshop workbench with specialized tools, metal shavings, and blueprint sketches in soft atmospheric lighting"
          src={HERO_IMAGE}
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary mb-4 block">
            Precision in craft
          </span>
          <h1 className="font-headline text-[12vw] md:text-[10rem] font-black leading-[0.8] tracking-tighter mb-8 text-primary">
            DMD<span className="text-secondary-container">.</span>
          </h1>
          <p className="font-headline text-2xl md:text-4xl font-light tracking-tight max-w-xl text-on-surface-variant">
            Custom solutions. Built to fit your needs.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6 pb-4">
          <p className="font-label text-xs uppercase tracking-widest text-outline text-left md:text-right max-w-[240px]">
            Every millimetre is intentional. Every joint is visible yet
            seamless.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-secondary-container text-on-secondary-container px-8 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-on-primary transition-all duration-300 group"
          >
            Start Project
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
