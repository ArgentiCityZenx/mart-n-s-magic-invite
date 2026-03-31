import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import MusicToggle from "@/components/MusicToggle";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <Hero />
    <Countdown />
    <Location />
    <Gallery />
    <RSVP />
    <Footer />
    <MusicToggle />
  </main>
);

export default Index;
