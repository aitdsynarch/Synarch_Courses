import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
];





function PixelMark() {
  const pixels = [
    [0, 0, "orange"],
    [1, 0, "orange"],
    [2, 0, "orange"],
    [0, 1, "orange"],
    [2, 1, "orange"],
    [0, 2, "orange"],
    [1, 2, "orange"],
    [2, 2, "dark"],
  ];

  return (
    <span
      className="relative block h-[32px] w-[32px] shrink-0"
      aria-hidden="true"
    >
      {pixels.map(([x, y, color], index) => (
        <span
          key={index}
          className={`absolute ${
            color === "dark"
              ? "h-[11px] w-[11px] bg-[#303030]"
              : "h-[8px] w-[8px] bg-[#F0440A]"
          }`}
          style={{
            left: `${x * 10}px`,
            top: `${y * 10}px`,
          }}
        />
      ))}
    </span>
  );
}











export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      id="top"
      className="relative z-50  text-[#191919]"
    >
      <nav
  aria-label="Main navigation"
  className="w-full px-5 sm:px-10 lg:px-16"
>
        <div className="flex min-h-[76px] items-center justify-between gap-5 sm:min-h-[88px]">

          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="SYNARCH home"
            className="group flex shrink-0 items-center gap-3"
          >
            <PixelMark />

            <span className="text-[25px] font-black leading-none tracking-[-0.075em] sm:text-[29px]">
              SYNARCH<span className="text-[#F0440A]">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-3 text-[13px] font-medium text-black/60 transition-colors duration-200 hover:text-[#191919]"
              >
                {link.label}

                <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-[#F0440A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          
<div className="hidden items-center gap-5 lg:flex">
  <Link
    to="/"
    className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/50 transition-colors hover:text-[#F0440A]"
  >
    Explore
  </Link>

  <Link
    to="/join"
    className="group inline-flex items-center gap-4 bg-[#191919] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#F0440A]"
  >
    Join SYNARCH

    <span className="text-base transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      ↗
    </span>
  </Link>
</div>


          {/* Tablet CTA */}
          <a
            href="#join"
            className="ml-auto hidden items-center gap-3 border border-black/20 px-4 py-3 text-[11px] font-bold uppercase tracking-wider transition-colors hover:border-[#F0440A] hover:bg-[#F0440A] hover:text-white sm:inline-flex lg:hidden"
          >
            Join <span className="text-[#F0440A]">↗</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] border border-black/15 transition-colors hover:border-[#F0440A] lg:hidden"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 4, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              className="block h-[2px] bg-[#191919]"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -4, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              className="block h-[2px] bg-[#191919]"
            />
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-black/10 pb-6 pt-3">
                <div className="mb-2 flex items-center justify-between py-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                    Navigation
                  </span>

                  <span className="text-[10px] font-mono text-black/30">
                    MENU / 04
                  </span>
                </div>

                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-black/10 py-4 transition-colors hover:text-[#F0440A]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-black/30">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-medium">
                        {link.label}
                      </span>
                    </span>

                    <span className="text-base text-black/30 transition-all group-hover:translate-x-1 group-hover:text-[#F0440A]">
                      ↗
                    </span>
                  </motion.a>
                ))}

               <Link
  to="/join"
  onClick={closeMenu}
  className="mt-5 flex w-full items-center justify-between bg-[#F0440A] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#191919]"
>
  Join the community
  <span className="text-lg">↗</span>
</Link>

                <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-black/35">
                  Think · Learn · Build · Connect
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom accent */}
      <div className="h-px bg-black/10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
         className="h-full w-full origin-left bg-[#F0440A]/70"
        />
      </div>
    </header>
  );
}