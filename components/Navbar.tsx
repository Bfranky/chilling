"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/dining", label: "Dining & Bar" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold text-[#C9A84C]">Chilling Zone</span>
          <span className="text-xs tracking-[0.3em] text-[#FAF3E0]/60 uppercase">Hotel & Bar</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === l.href
                  ? "text-[#C9A84C]"
                  : "text-[#FAF3E0]/70 hover:text-[#C9A84C]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-[#C9A84C] text-[#1A1A1A] hover:bg-[#E2C16B] transition-all duration-200 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#FAF3E0] p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1A1A1A]/98 backdrop-blur-lg px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium py-2 border-b border-[#C9A84C]/10 transition-colors ${
                pathname === l.href ? "text-[#C9A84C]" : "text-[#FAF3E0]/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
