import Link from "next/link";
import { BedDouble, Bath, Wifi, Tv, Coffee, Wind } from "lucide-react";

const rooms = [
  {
    name: "Standard Room",
    price: "₦15,000",
    desc: "Our Standard Room offers a cozy retreat with a comfortable queen-size bed, en-suite bathroom with hot water, and all the essentials for a great night's rest.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    amenities: ["Queen Bed", "Private Bathroom", "Air Conditioning", "Cable TV", "Free Wi-Fi"],
    tag: "Great Value",
  },
  {
    name: "Deluxe Room",
    price: "₦25,000",
    desc: "The Deluxe Room steps up the luxury with a king-size bed, improved furnishings, and a serene, well-appointed atmosphere perfect for a premium stay.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80",
    amenities: ["King Bed", "Premium Bathroom", "Air Conditioning", "Smart TV", "Free Wi-Fi", "Mini Bar"],
    tag: "Most Popular",
  },
  {
    name: "Executive Suite",
    price: "₦45,000",
    desc: "Our Executive Suite is the pinnacle of comfort — a spacious living area, king bed, and a premium bathroom experience. Ideal for extended stays or special occasions.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
    amenities: ["King Bed", "Living Area", "Luxury Bathroom", "Air Conditioning", "Smart TV", "Free Wi-Fi", "Room Service"],
    tag: "Premium",
  },
  {
    name: "Family Room",
    price: "₦35,000",
    desc: "Perfect for families, featuring multiple beds, ample space, and everything you need for a comfortable group stay in Lagos.",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80",
    amenities: ["Multiple Beds", "Large Space", "Private Bathroom", "Air Conditioning", "TV", "Free Wi-Fi"],
    tag: "Family Pick",
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Queen Bed": <BedDouble size={14} />,
  "King Bed": <BedDouble size={14} />,
  "Multiple Beds": <BedDouble size={14} />,
  "Private Bathroom": <Bath size={14} />,
  "Premium Bathroom": <Bath size={14} />,
  "Luxury Bathroom": <Bath size={14} />,
  "Free Wi-Fi": <Wifi size={14} />,
  "Cable TV": <Tv size={14} />,
  "Smart TV": <Tv size={14} />,
  "TV": <Tv size={14} />,
  "Mini Bar": <Coffee size={14} />,
  "Air Conditioning": <Wind size={14} />,
};

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-24">
      {/* Header */}
      <div className="py-20 px-6 text-center bg-[#1A1A1A] border-b border-[#C9A84C]/10">
        <p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-3">Accommodations</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-[#FAF3E0] mb-4">
          Rooms & <span className="italic text-[#C9A84C]">Suites</span>
        </h1>
        <p className="text-[#FAF3E0]/60 max-w-xl mx-auto text-base">
          Each room is designed for maximum comfort. Spacious, clean, and appointed with everything you need — day or night.
        </p>
      </div>

      {/* Rooms grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={room.img} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-[#C9A84C] text-[#1A1A1A] font-semibold">{room.tag}</span>
              <span className="absolute bottom-4 right-4 text-2xl font-display font-bold text-[#C9A84C]">{room.price}<span className="text-sm text-[#FAF3E0]/50 font-normal font-sans">/night</span></span>
            </div>
            <div className="p-8">
              <h2 className="font-display text-2xl font-bold text-[#FAF3E0] mb-3">{room.name}</h2>
              <p className="text-sm text-[#FAF3E0]/60 leading-relaxed mb-6">{room.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {room.amenities.map((a, j) => (
                  <span key={j} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20">
                    {amenityIcons[a] || null}{a}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="block text-center w-full py-3 rounded-full bg-[#C9A84C] text-[#1A1A1A] font-semibold text-sm hover:bg-[#E2C16B] transition-all shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                Reserve This Room
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
