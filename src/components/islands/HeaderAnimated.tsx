import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderAnimatedProps {
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  base: string;
}

export default function HeaderAnimated({
  logoSrc,
  logoWidth,
  logoHeight,
  base,
}: HeaderAnimatedProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s!));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#funciones", label: "Funciones" },
    { href: "#video", label: "Experiencia" },
    { href: "#cta", label: "Empezar" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-black/80 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between md:h-20">
        <a href={base} className="shrink-0" aria-label="RockTicket — Inicio">
          <img
            src={logoSrc}
            alt="Logo RockTicket"
            width={logoWidth}
            height={logoHeight}
            className="h-10 w-auto md:h-14"
            fetchPriority="high"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`font-geist text-sm transition-colors hover:text-accent ${
                activeSection === link.href ? "text-accent" : "text-white/60"
              }`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="border-t border-surface-border bg-black/95 px-4 py-4 md:hidden"
            aria-label="Menú móvil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`block py-2 font-geist transition-colors hover:text-accent ${
                      activeSection === link.href ? "text-accent" : "text-white/80"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
