import Hero from "./components/hero";
import CreonPass from "./components/creon-pass";
import Profiting from "./components/profiting";
import OurMission from "./components/our-mission";
import ComingSoon from "./components/coming-soon";
import Perks from "./components/perks";




export default function Home() {

  return (
    <main className="min-w-full flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden">
      <Hero />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
      <Perks />
    </main >
  );
}
