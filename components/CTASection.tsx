import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 px-6 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A84C]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#C9A84C]/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[#5C1A1A]/20" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-4">Lagos Awaits</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAF3E0] mb-4">
          Ready to <span className="italic text-[#C9A84C]">Check In?</span>
        </h2>
        <p className="text-[#FAF3E0]/60 mb-10 leading-relaxed">
          Call us now or send a message. We&apos;re open 24 hours and always ready to welcome you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+2348023140611"
            className="px-8 py-4 rounded-full bg-[#C9A84C] text-[#1A1A1A] font-semibold text-sm tracking-wide hover:bg-[#E2C16B] transition-all shadow-[0_0_30px_rgba(201,168,76,0.35)]"
          >
            📞 Call 0802 314 0611
          </a>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border border-[#FAF3E0]/20 text-[#FAF3E0] font-medium text-sm tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
