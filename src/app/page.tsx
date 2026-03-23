import CeremonySection from "../components/wedding/CeremonySection";
import CountdownSection from "../components/wedding/CountdownSection";
import CoupleSection from "../components/wedding/CoupleSection";
import FloatingPetals from "../components/wedding/FloatingPetals";
import HeroSection from "../components/wedding/HeroSection";
import Navigation from "../components/wedding/Navigation";
import PhotoGallery from "../components/wedding/PhotoGallery";
import RSVPSection from "../components/wedding/RSVPSection";
import StoryTimeline from "../components/wedding/StoryTimeline";
import WeddingFooter from "../components/wedding/WeddingFooter";


export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <FloatingPetals />
      <Navigation />
      <HeroSection />
      <CoupleSection />
      <StoryTimeline />
      <PhotoGallery />
      <CountdownSection />
      <CeremonySection />
      <WeddingFooter />
    </main>
  );
}
