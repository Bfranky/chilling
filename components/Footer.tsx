import Link from "next/link";
import { MapPin, Phone, Clock, Share2, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold text-[#C9A84C] mb-2">Chilling Zone</h3>
          <p className="text-xs tracking-[0.3em] text-[#FAF3E0]/40 uppercase mb-4">Hotel & Bar</p>
          <p className="text-sm text-[#FAF3E0]/60 leading-relaxed">
            Lagos&apos; premier 24-hour hospitality destination. Where every hour is the right hour.
          </p>
          <div className="flex gap-4 mt-6">
            {[Share2, Globe, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]/60 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#C9A84C]/80 mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { href: "/rooms", label: "Rooms & Suites" },
              { href: "/dining", label: "Dining & Bar" },
              { href: "/about", label: "About Us" },
              { href: "/reviews", label: "Guest Reviews" },
              { href: "/contact", label: "Contact & Directions" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-[#FAF3E0]/60 hover:text-[#C9A84C] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#C9A84C]/80 mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-[#FAF3E0]/60">
              <MapPin size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
              <span>1 Prince Okojie Street, off Temple Road, Olaniyi St, Ifako-Ijaiye, Lagos</span>
            </li>
            <li className="flex gap-3 text-sm text-[#FAF3E0]/60">
              <Phone size={16} className="text-[#C9A84C] shrink-0" />
              <a href="tel:+2348023140611" className="hover:text-[#C9A84C] transition-colors">0802 314 0611</a>
            </li>
            <li className="flex gap-3 text-sm text-[#FAF3E0]/60">
              <Clock size={16} className="text-[#C9A84C] shrink-0" />
              <span>Open 24 Hours, 7 Days a Week</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#C9A84C]/10 px-6 py-6 text-center text-xs text-[#FAF3E0]/30">
        © {new Date().getFullYear()} Chilling Zone Hotel & Bar. All rights reserved. · Ifako-Ijaiye, Lagos, Nigeria
      </div>
    </footer>
  );
}
