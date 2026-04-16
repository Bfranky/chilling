export default function TestimonialStrip() {
  return (
    <section className="py-20 px-6 bg-[#5C1A1A]/20 border-y border-[#C9A84C]/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-4xl text-[#C9A84C] mb-6 font-display italic">&ldquo;</div>
        <blockquote className="font-display text-2xl md:text-3xl font-light text-[#FAF3E0] leading-relaxed mb-8 italic">
          Hotel is nice... Room is spacious with a nice bed, food is also great. Overall nice place.
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-display font-bold">M</div>
          <div className="text-left">
            <p className="text-sm font-medium text-[#FAF3E0]">Martins Oladokun</p>
            <p className="text-xs text-[#FAF3E0]/40">Google Local Guide · Verified Guest</p>
          </div>
          <div className="ml-3 flex gap-0.5">
            {[1,2,3].map(s => <span key={s} className="text-[#C9A84C]">★</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
