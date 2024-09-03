import Hero from "./components/hero.jsx"
import Service from "./components/service.jsx"
import Kontakt from "./components/contact.jsx"
import FaqSection from "./components/faq.jsx"
import Team from "./components/team.jsx"
import UberUns from "./components/uberuns.jsx";

export default function Home() {
  return (
    <div>
         <Hero/>
         <Service/>
         <UberUns/>
         <Team/>
         <FaqSection/>
         <Kontakt/>
    </div>


  );
}
