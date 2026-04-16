"use client";
import { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkIn: "", checkOut: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-24">
      {/* Header */}
      <div className="py-20 px-6 bg-[#1A1A1A] border-b border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-3">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#FAF3E0] mb-4">
            Contact & <span className="italic text-[#C9A84C]">Reservations</span>
          </h1>
          <p className="text-[#FAF3E0]/55 text-base max-w-xl">
            Ready to book or have a question? Reach out — we&apos;re here around the clock.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-[#1A1A1A] border border-[#C9A84C]/10 p-7 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#FAF3E0]/40 mb-1.5">Address</p>
                <p className="text-sm text-[#FAF3E0]/75 leading-relaxed">
                  1 Prince Okojie Street, off Temple Road,<br />
                  Olaniyi St, Ifako-Ijaiye,<br />
                  Lagos 100001, Nigeria
                </p>
              </div>
            </div>
            <div className="h-px bg-[#C9A84C]/8" />
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#FAF3E0]/40 mb-1.5">Phone</p>
                <a href="tel:+2348023140611" className="text-sm text-[#FAF3E0]/75 hover:text-[#C9A84C] transition-colors font-medium">
                  0802 314 0611
                </a>
              </div>
            </div>
            <div className="h-px bg-[#C9A84C]/8" />
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#FAF3E0]/40 mb-1.5">Hours</p>
                <p className="text-sm text-[#FAF3E0]/75">Open 24 Hours</p>
                <p className="text-xs text-[#C9A84C]/70 mt-0.5">7 days a week · No closing time</p>
              </div>
            </div>
          </div>

          {/* Quick call CTA */}
          <a
            href="tel:+2348023140611"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#5C1A1A]/30 border border-[#C9A84C]/20 text-[#C9A84C] font-semibold hover:bg-[#5C1A1A]/50 transition-all text-sm"
          >
            <Phone size={16} /> Tap to Call Now
          </a>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[#C9A84C]/10 h-52">
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
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#FAF3E0]/10 text-[#FAF3E0]/50 text-xs hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all"
          >
            <MapPin size={13} /> Open in Google Maps
          </a>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl bg-[#1A1A1A] border border-[#C9A84C]/15 px-8">
              <CheckCircle size={56} className="text-[#C9A84C] mb-6" strokeWidth={1.5} />
              <h2 className="font-display text-3xl font-bold text-[#FAF3E0] mb-3">Message Received!</h2>
              <p className="text-[#FAF3E0]/55 text-sm leading-relaxed max-w-sm mb-8">
                Thank you, {form.name}. We&apos;ve received your message and will get back to you shortly. You can also call us directly at any time.
              </p>
              <a
                href="tel:+2348023140611"
                className="px-8 py-3 rounded-full bg-[#C9A84C] text-[#1A1A1A] font-semibold text-sm hover:bg-[#E2C16B] transition-all"
              >
                📞 Call 0802 314 0611
              </a>
            </div>
          ) : (
            <div className="rounded-2xl bg-[#1A1A1A] border border-[#C9A84C]/10 p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold text-[#FAF3E0] mb-2">Send a Message</h2>
              <p className="text-sm text-[#FAF3E0]/45 mb-8">Fill in the form below and we&apos;ll respond as soon as possible.</p>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#0F0F0F] border border-[#C9A84C]/15 rounded-xl px-4 py-3 text-sm text-[#FAF3E0] placeholder-[#FAF3E0]/25 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-2">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#0F0F0F] border border-[#C9A84C]/15 rounded-xl px-4 py-3 text-sm text-[#FAF3E0] placeholder-[#FAF3E0]/25 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-2">Phone Number *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="08012345678"
                    className="w-full bg-[#0F0F0F] border border-[#C9A84C]/15 rounded-xl px-4 py-3 text-sm text-[#FAF3E0] placeholder-[#FAF3E0]/25 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-2">Check-In Date</label>
                    <input
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      type="date"
                      className="w-full bg-[#0F0F0F] border border-[#C9A84C]/15 rounded-xl px-4 py-3 text-sm text-[#FAF3E0]/70 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-2">Check-Out Date</label>
                    <input
                      name="checkOut"
                      value={form.checkOut}
                      onChange={handleChange}
                      type="date"
                      className="w-full bg-[#0F0F0F] border border-[#C9A84C]/15 rounded-xl px-4 py-3 text-sm text-[#FAF3E0]/70 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FAF3E0]/40 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your reservation request, special requirements, or any questions..."
                    className="w-full bg-[#0F0F0F] border border-[#C9A84C]/15 rounded-xl px-4 py-3 text-sm text-[#FAF3E0] placeholder-[#FAF3E0]/25 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.phone}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#C9A84C] text-[#1A1A1A] font-semibold text-sm hover:bg-[#E2C16B] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(201,168,76,0.25)]"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#FAF3E0]/30">
                  For instant booking, call <a href="tel:+2348023140611" className="text-[#C9A84C] hover:underline">0802 314 0611</a> directly.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
