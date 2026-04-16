import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import FeaturedRooms from "@/components/FeaturedRooms";
import TestimonialStrip from "@/components/TestimonialStrip";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturedRooms />
      <TestimonialStrip />
      <CTASection />
    </>
  );
}
