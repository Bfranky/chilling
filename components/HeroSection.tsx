"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')`,
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#5C1A1A]/40 to-[#1A1A1A]/90" />
      <div className="absolute inset-0 bg-[#1A1A1A]/30" />

      {/* Decorative gold lines */}
      <div className="absolute top-1/4 left-0 w-px h-40 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className={`text-xs tracking-[0.5em] uppercase text-[#C9A84C] mb-6 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          ✦ Open 24 Hours · Lagos, Nigeria ✦
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
          <span className="block text-[#FAF3E0]">Your Lagos</span>
          <span className="block italic" style={{
            background: "linear-gradient(135deg, #C9A84C, #E2C16B, #C9A84C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Chilling Zone</span>
        </h1>

        <p className={`text-lg md:text-xl text-[#FAF3E0]/70 max-w-xl mx-auto mb-10 font-light leading-relaxed transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Spacious rooms, great food, a full bar, and warm Lagos hospitality — every hour of every day.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link
            href="/rooms"
            className="px-8 py-4 rounded-full bg-[#C9A84C] text-[#1A1A1A] font-semibold text-sm tracking-wide hover:bg-[#E2C16B] transition-all duration-200 shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            Book a Room
          </Link>
          <Link
            href="/dining"
            className="px-8 py-4 rounded-full border border-[#FAF3E0]/30 text-[#FAF3E0] font-medium text-sm tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
          >
            View Menu & Bar
          </Link>
        </div>

        {/* Rating badge */}
        <div className={`mt-14 flex items-center justify-center gap-2 transition-all duration-700 delay-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((s) => (
              <span key={s} className="text-[#C9A84C] text-sm">★</span>
            ))}
            <span className="text-[#C9A84C]/40 text-sm">★</span>
          </div>
          <span className="text-[#FAF3E0]/50 text-xs">3.6 · Google Reviews</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A84C]/50 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
