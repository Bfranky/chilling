import { BedDouble, UtensilsCrossed, Wine, Car, Clock, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: BedDouble, title: "Spacious Rooms", desc: "Comfortable beds and generous room space for a restful stay." },
  { icon: UtensilsCrossed, title: "Great Food", desc: "Enjoy premium meals in our full-service restaurant — dine-in or drive-through." },
  { icon: Wine, title: "Full Bar", desc: "A curated selection of drinks served all night in our lively bar." },
  { icon: Car, title: "Drive-Through", desc: "Grab food and drinks without leaving your car — convenience at its finest." },
  { icon: Clock, title: "Open 24 Hours", desc: "We never close. Whether it's 2am or 2pm, Chilling Zone is ready." },
  { icon: ShieldCheck, title: "Prime Location", desc: "Located on Prince Okojie Street, Ifako-Ijaiye — easy to find, hard to leave." },
];

export default function HighlightsSection() {
  return (
    <section className="py-24 px-6 bg-[#1A1A1A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-3">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAF3E0]">
            Everything You <span className="italic text-[#C9A84C]">Need</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-[#C9A84C]/10 bg-[#FAF3E0]/[0.02] hover:bg-[#5C1A1A]/20 hover:border-[#C9A84C]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-all">
                <item.icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#FAF3E0] mb-2">{item.title}</h3>
              <p className="text-sm text-[#FAF3E0]/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
