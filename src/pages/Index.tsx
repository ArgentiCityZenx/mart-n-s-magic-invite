import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import RSVPForm from "@/components/RSVPForm";
import Closing from "@/components/Closing";
import MusicToggle from "@/components/MusicToggle";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <Hero />
    <Countdown />
    <Location />
    <RSVPForm />
    <Closing />
    <Footer />
    <MusicToggle />
  </main>
);

export default Index;
