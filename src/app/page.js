import Image from "next/image";
import Hero from "./components/hero.jsx"
import Service from "./components/service.jsx"
import Kontakt from "./components/contact.jsx"
import FaqSection from "./components/faq.jsx"

export default function Home() {
  return (
    <div>
         <Hero/>
         <Service/>
         <FaqSection/>
         <Kontakt/>
    </div>


  );
}
