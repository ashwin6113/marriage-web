import BibleVersesSection from "../components/wedding/BibleVersesSection";
import CeremonySection from "../components/wedding/CeremonySection";
import CountdownSection from "../components/wedding/CountdownSection";
import CelebrateBannerSection from "../components/wedding/CelebrateBannerSection";
import FloatingPetals from "../components/wedding/FloatingPetals";
import HeroSection from "../components/wedding/HeroSection";
import Navigation from "../components/wedding/Navigation";
import WeddingFooter from "../components/wedding/WeddingFooter";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <FloatingPetals />
      <Navigation />
      <HeroSection />
      {/* <BibleVersesSection /> */}
      <CountdownSection />
      <CeremonySection />
      <CelebrateBannerSection />
      <WeddingFooter />
    </main>
  );
}
