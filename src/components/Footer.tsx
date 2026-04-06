const SOCIAL_LINKS = ["Instagram", "LinkedIn", "Email"] as const;

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-neutral-50 border-t border-neutral-200">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <span className="font-bold text-black text-xl tracking-widest">
            DMD
          </span>
          <p className="font-label text-[10px] tracking-widest uppercase mt-2 text-neutral-400">
            &copy; DMD All rights reserved. Precision in craft.
          </p>
        </div>
        <div className="flex gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-label text-[10px] tracking-widest uppercase text-neutral-400 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
