export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 py-6 max-w-full mx-auto">
      <div className="text-2xl font-black tracking-[0.1em] text-black">
        DMD
      </div>
      <div className="hidden md:flex gap-10 items-center">
        {["About", "Services", "Process", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-headline tracking-[0.05em] uppercase text-sm font-bold text-neutral-500 hover:text-black transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="bg-primary text-on-primary px-6 py-2 text-sm font-headline tracking-[0.05em] uppercase font-bold rounded-sm scale-95 hover:scale-100 transition-transform duration-200"
      >
        Request a Project
      </a>
    </nav>
  );
}
