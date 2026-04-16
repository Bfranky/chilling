import Link from "next/link";
import { ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Martins Oladokun",
    handle: "Kemartin de Shrink",
    badge: "Local Guide",
    reviews: 15,
    photos: 14,
    rating: 3,
    ago: "2 years ago",
    text: "Hotel is nice though they have a shower that doesn't function properly... Room is spacious with a nice bed, food is also great, though it's a bit on the high side... Customer service, um, not that good but it's not as bad either... Overall nice place but there could be better options if you look well enough.",
    avatar: "M",
    color: "#7A2323",
  },
  {
    name: "Macarthy Macbeth",
    handle: null,
    badge: null,
    reviews: 6,
    photos: 4,
    rating: 1,
    ago: "7 months ago",
    text: "Poor overall.",
    avatar: "M",
    color: "#2C4A7A",
  },
  {
    name: "Tola Idowu",
    handle: null,
    badge: "Local Guide",
    reviews: 154,
    photos: 32,
    rating: 5,
    ago: "6 years ago",
    text: "Cool arena.",
    avatar: "T",
    color: "#2A6B3C",
  },
];

function Stars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`text-base ${i < rating ? "text-[#C9A84C]" : "text-[#FAF3E0]/15"}`}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const totalRating = 3.6;
  const totalReviews = 7;

  // Distribution (approximate for 3.6/7 reviews)
  const dist = [
    { stars: 5, count: 2 },
    { stars: 4, count: 1 },
    { stars: 3, count: 2 },
    { stars: 2, count: 0 },
    { stars: 1, count: 2 },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-24">
      {/* Header */}
      <div className="py-20 px-6 bg-[#1A1A1A] border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-3">What Guests Say</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#FAF3E0] mb-8">
            Guest <span className="italic text-[#C9A84C]">Reviews</span>
          </h1>

          {/* Rating overview */}
          <div className="inline-flex flex-col md:flex-row items-center gap-10 bg-[#0F0F0F] border border-[#C9A84C]/15 rounded-2xl px-10 py-8">
            {/* Big score */}
            <div className="text-center">
              <div className="font-display text-7xl font-bold text-[#C9A84C] leading-none mb-2">{totalRating}</div>
              <Stars rating={4} />
              <p className="text-xs text-[#FAF3E0]/40 mt-2">{totalReviews} Google Reviews</p>
            </div>

            <div className="w-px h-24 bg-[#C9A84C]/10 hidden md:block" />

            {/* Distribution */}
            <div className="space-y-2 w-52">
              {dist.map((d) => (
                <div key={d.stars} className="flex items-center gap-3">
                  <span className="text-xs text-[#FAF3E0]/50 w-4 text-right">{d.stars}</span>
                  <span className="text-[#C9A84C] text-xs">★</span>
                  <div className="flex-1 h-1.5 rounded-full bg-[#FAF3E0]/8 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#C9A84C]"
                      style={{ width: `${(d.count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#FAF3E0]/40 w-4">{d.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews list */}
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl bg-[#1A1A1A] border border-[#C9A84C]/10 p-8 hover:border-[#C9A84C]/25 transition-all">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-lg text-white shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-[#FAF3E0] text-sm">{r.name}</h3>
                    {r.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/20">
                        {r.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#FAF3E0]/40 mt-0.5">
                    {r.reviews} reviews · {r.photos} photos
                  </p>
                </div>
              </div>
              <span className="text-xs text-[#FAF3E0]/35 shrink-0">{r.ago}</span>
            </div>

            <div className="mb-4">
              <Stars rating={r.rating} />
            </div>

            <p className="text-sm text-[#FAF3E0]/70 leading-relaxed">{r.text}</p>
          </div>
        ))}

        {/* More reviews note */}
        <div className="rounded-2xl bg-[#5C1A1A]/10 border border-[#C9A84C]/10 p-8 text-center">
          <p className="text-sm text-[#FAF3E0]/50 mb-2">Showing 3 of {totalReviews} reviews</p>
          <p className="text-xs text-[#FAF3E0]/30 mb-6">Read all reviews directly on Google Maps</p>
          <a
            href="https://maps.google.com/?q=Chilling+Zone+Hotel+Ifako-Ijaiye+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C]/10 transition-all"
          >
            <ExternalLink size={14} /> View All on Google Maps
          </a>
        </div>

        {/* CTA to write a review */}
        <div className="rounded-2xl bg-[#1A1A1A] border border-[#C9A84C]/15 p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-[#FAF3E0] mb-2">
            Stayed with Us?
          </h3>
          <p className="text-sm text-[#FAF3E0]/55 mb-6">
            Your feedback helps us grow. Share your experience and help other guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ_chilling_zone"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#C9A84C] text-[#1A1A1A] text-sm font-semibold hover:bg-[#E2C16B] transition-all shadow-[0_0_20px_rgba(201,168,76,0.2)]"
            >
              ✍️ Write a Google Review
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-[#FAF3E0]/20 text-[#FAF3E0]/70 text-sm font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
            >
              Send Us Feedback Directly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
