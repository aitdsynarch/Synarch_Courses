import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="grid grid-cols-3 gap-[3px]">
            {[0, 1, 0, 1, 1, 1, 0, 1, 0].map((cell, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-[2px] ${
                  cell ? "bg-[#F0440A]" : "bg-transparent"
                }`}
              />
            ))}
          </div>

          <span className="text-xl font-extrabold tracking-tight text-black">
            SYNARCH
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#F0440A]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#join"
          className="hidden items-center gap-2 rounded-full bg-[#F0440A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d83b08] sm:flex"
        >
          Join SYNARCH
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-black transition hover:bg-gray-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-6 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50 hover:text-[#F0440A]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#F0440A] px-5 py-3 font-semibold text-white"
            >
              Join SYNARCH
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}