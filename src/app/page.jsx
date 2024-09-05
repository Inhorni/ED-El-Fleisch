import Hero from "../components/hero.jsx"
import Service from "../components/service.jsx"
import Kontakt from "../components/contact.jsx"
import FaqSection from "../components/faq.jsx"
import Team from "../components/team.jsx"
import UberUns from "../components/uberuns.jsx";
import Footer from "../components/footer.jsx"
import Navbar from "../components/navbar.jsx"
import Product from "@/components/produkte.jsx"

export default function Home() {
  return (
    <div>
        <Navbar/>
         <Hero/>
         <Product/>
         <Service/>
         <UberUns/>
         <Team/>
         <FaqSection/>
         <Kontakt/>
         <Footer/>
    </div>


  );
}
