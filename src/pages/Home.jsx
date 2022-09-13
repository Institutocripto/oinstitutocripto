import { HeroSection } from "../components/HeroSection";
import { InfiniteScroll } from "../components/InfiniteScroll";
import { AboutSection } from "../components/AboutSection";
import { ContentSection } from "../components/ContentSection";
import { CTASection } from "../components/CTASection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";
import { SummarySection } from "../components/SummarySection";

export function Home() {
  return (
    <>
      <HeroSection />
      <InfiniteScroll />
      <main style={{ marginBottom: 120 }}>
        <SummarySection />
        <AboutSection />
        <CTASection />
        <ContentSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
