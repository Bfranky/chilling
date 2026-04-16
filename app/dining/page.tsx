import { Car, UtensilsCrossed } from "lucide-react";

const foodMenu = [
  { name: "Jollof Rice & Chicken", price: "₦3,500", desc: "Rich, smoky party-style jollof with grilled chicken." },
  { name: "Fried Rice & Beef", price: "₦3,500", desc: "Seasoned fried rice with tender, well-spiced beef." },
  { name: "Pepper Soup (Goat Meat)", price: "₦2,500", desc: "Traditional Lagos pepper soup with goat meat — hot and spicy." },
  { name: "Pounded Yam & Egusi", price: "₦4,000", desc: "Smooth pounded yam served with rich Egusi soup and assorted meats." },
  { name: "Suya Platter", price: "₦2,000", desc: "Spiced beef suya skewers with onions, tomatoes & yaji." },
  { name: "Grilled Fish", price: "₦5,500", desc: "Whole grilled tilapia with pepper sauce and plantain." },
  { name: "Club Sandwich", price: "₦1,800", desc: "Triple-layered chicken club sandwich with fries." },
  { name: "Pasta Alfredo", price: "₦2,800", desc: "Creamy white sauce pasta with grilled chicken strips." },
];

const drinksMenu = [
  { name: "Heineken Bottle", price: "₦800" },
  { name: "Star Lager Beer", price: "₦700" },
  { name: "Guinness Stout", price: "₦900" },
  { name: "Chapman", price: "₦1,200", desc: "Classic Nigerian Chapman cocktail." },
  { name: "Malta Guinness", price: "₦600" },
  { name: "Soft Drinks (Can)", price: "₦400" },
  { name: "Bottled Water", price: "₦200" },
  { name: "Fresh Fruit Juice", price: "₦1,500" },
  { name: "Vodka & Mixer", price: "₦2,500" },
  { name: "Cognac (Hennessy)", price: "₦5,000" },
  { name: "Red Wine (House)", price: "₦8,000", desc: "Per bottle." },
  { name: "Whiskey & Coke", price: "₦2,000" },
];

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-24">
      {/* Hero */}
      <div className="relative py-24 px-6 text-center overflow-hidden bg-[#1A1A1A] border-b border-[#C9A84C]/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80')` }}
        />
        <p className="relative text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-3">Our Kitchen & Bar</p>
        <h1 className="relative font-display text-5xl md:text-6xl font-bold text-[#FAF3E0] mb-4">
          Dining & <span className="italic text-[#C9A84C]">Bar</span>
        </h1>
        <p className="relative text-[#FAF3E0]/60 max-w-xl mx-auto text-base mb-8">
          Premium Nigerian cuisine and a full bar, served 24 hours. Dine in the restaurant or pull through our drive-through.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm">
            <UtensilsCrossed size={15} /> Dine-In
          </span>
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm">
            <Car size={15} /> Drive-Through
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Food */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <UtensilsCrossed size={20} className="text-[#C9A84C]" />
            <h2 className="font-display text-3xl font-bold text-[#FAF3E0]">Food Menu</h2>
          </div>
          <div className="space-y-4">
            {foodMenu.map((item, i) => (
              <div key={i} className="flex justify-between items-start p-5 rounded-xl bg-[#1A1A1A] border border-[#C9A84C]/8 hover:border-[#C9A84C]/25 transition-colors">
                <div>
                  <h3 className="font-medium text-[#FAF3E0] mb-1">{item.name}</h3>
                  {item.desc && <p className="text-xs text-[#FAF3E0]/45">{item.desc}</p>}
                </div>
                <span className="text-[#C9A84C] font-semibold text-sm ml-4 shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Drinks */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#C9A84C] text-xl">🍹</span>
            <h2 className="font-display text-3xl font-bold text-[#FAF3E0]">Bar Menu</h2>
          </div>
          <div className="space-y-3">
            {drinksMenu.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-[#1A1A1A] border border-[#C9A84C]/8 hover:border-[#C9A84C]/25 transition-colors">
                <div>
                  <h3 className="font-medium text-[#FAF3E0] text-sm">{item.name}</h3>
                  {item.desc && <p className="text-xs text-[#FAF3E0]/40">{item.desc}</p>}
                </div>
                <span className="text-[#C9A84C] font-semibold text-sm ml-4 shrink-0">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#5C1A1A]/20 border border-[#C9A84C]/20">
            <p className="text-xs text-[#C9A84C] uppercase tracking-widest mb-2">⚡ Open 24/7</p>
            <p className="text-sm text-[#FAF3E0]/70 leading-relaxed">
              Our kitchen and bar never close. Whether it&apos;s a late-night craving or an early morning meal, we&apos;ve got you covered — any hour of the day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
