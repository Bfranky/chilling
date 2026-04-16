import Link from "next/link";

const rooms = [
  {
    name: "Standard Room",
    price: "₦15,000",
    desc: "Cozy and well-appointed with a comfortable queen bed, en-suite bathroom, and all essentials.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    tag: "Great Value",
  },
  {
    name: "Deluxe Room",
    price: "₦25,000",
    desc: "Elevated comfort with a king-size bed, premium amenities, and a serene ambiance.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    tag: "Most Popular",
  },
  {
    name: "Executive Suite",
    price: "₦45,000",
    desc: "Spacious luxury suite with a living area, king bed, and premium bath experience.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    tag: "Premium",
  },
];

export default function FeaturedRooms() {
  return (
    <section className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-3">Accommodations</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAF3E0]">
              Our <span className="italic text-[#C9A84C]">Rooms</span>
            </h2>
          </div>
          <Link href="/rooms" className="text-sm text-[#C9A84C] border-b border-[#C9A84C]/40 pb-0.5 hover:border-[#C9A84C] transition-colors">
            View All Rooms →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-[#C9A84C] text-[#1A1A1A] font-semibold">
                  {room.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-semibold text-[#FAF3E0]">{room.name}</h3>
                  <span className="text-[#C9A84C] font-semibold text-sm">{room.price}<span className="text-[#FAF3E0]/40 font-normal">/night</span></span>
                </div>
                <p className="text-sm text-[#FAF3E0]/55 leading-relaxed mb-5">{room.desc}</p>
                <Link href="/contact" className="w-full block text-center py-2.5 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C] hover:text-[#1A1A1A] transition-all duration-200">
                  Book This Room
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
