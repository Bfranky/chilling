import { MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-24">
      {/* Hero */}
      <div className="py-20 px-6 bg-[#1A1A1A] border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-3">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#FAF3E0] mb-6">
            About <span className="italic text-[#C9A84C]">Us</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Story */}
        <div>
          <div className="relative rounded-2xl overflow-hidden h-80 mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80"
              alt="Chilling Zone Hotel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 to-transparent" />
          </div>

          <h2 className="font-display text-3xl font-semibold text-[#FAF3E0] mb-5">
            A Warm Corner of Lagos
          </h2>
          <div className="space-y-4 text-[#FAF3E0]/65 text-sm leading-relaxed">
            <p>
              Chilling Zone Hotel & Bar is a beloved hospitality destination nestled in the heart of Ifako-Ijaiye, Lagos. Since our founding, we have been committed to offering Lagosians and visitors alike a warm, comfortable, and affordable place to rest, dine, and unwind.
            </p>
            <p>
              Our hotel features spacious, well-furnished rooms with comfortable beds — designed to give every guest a proper rest after a long day in the city. Whether you&apos;re in Lagos for business or leisure, our team works to ensure your stay is as comfortable as possible.
            </p>
            <p>
              Our restaurant serves rich, flavourful Nigerian and continental dishes around the clock. The bar is stocked with a full range of beverages — from cold beers to premium spirits — making Chilling Zone the go-to spot for a night out in Ifako-Ijaiye.
            </p>
            <p>
              We are open 24 hours a day, 7 days a week, with dine-in and drive-through services available at all times. We&apos;re continually working to improve our service and welcome all feedback from our valued guests.
            </p>
          </div>
        </div>

        {/* Info & Map */}
        <div className="space-y-8">
          {/* Contact card */}
          <div className="rounded-2xl bg-[#1A1A1A] border border-[#C9A84C]/15 p-8">
            <h3 className="font-display text-xl font-semibold text-[#FAF3E0] mb-6">Find Us</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin size={18} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-1">Address</p>
                  <p className="text-sm text-[#FAF3E0]/75">
                    1 Prince Okojie Street, off Temple Road,<br />
                    Olaniyi St, Ifako-Ijaiye,<br />
                    Lagos 100001, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={18} className="text-[#C9A84C] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-1">Phone</p>
                  <a href="tel:+2348023140611" className="text-sm text-[#FAF3E0]/75 hover:text-[#C9A84C] transition-colors">
                    0802 314 0611
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={18} className="text-[#C9A84C] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-1">Hours</p>
                  <p className="text-sm text-[#FAF3E0]/75">Open 24 Hours, 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-[#C9A84C]/15 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.158!2d3.325!3d6.665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzknNTQuMCJOIDPCsDAxOSczMC4wIkU!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://maps.google.com/?q=1+Prince+Okojie+Street+Ifako-Ijaiye+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C]/10 transition-all"
          >
            <MapPin size={15} /> Get Directions on Google Maps
          </a>

          <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#C9A84C] text-[#1A1A1A] text-sm font-semibold hover:bg-[#E2C16B] transition-all">
            Make a Reservation
          </Link>
        </div>
      </div>
    </div>
  );
}
