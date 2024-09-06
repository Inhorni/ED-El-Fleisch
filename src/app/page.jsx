import Hero from "@/components/landing/hero.jsx"
import Service from "@/components/landing/service.jsx"
import Kontakt from "@/components/landing/contact.jsx"
import FaqSection from "@/components/landing/faq.jsx"
import Team from "@/components/landing/team.jsx"
import UberUns from "@/components/landing/aboutus.jsx";
import Footer from "@/components/footer.jsx"
import Navbar from "@/components/navbar.jsx"
import Product from "@/components/landing/products.jsx"
import Provider from "@/components/landing/providers.jsx"

export default function Home() {
  return (
    <div>
        <Navbar/>
         <Hero/>
         <Product/>
         <Service/>
         <UberUns/>
         <Team/>
         <Provider/>
         <FaqSection/>
         <Kontakt/>
         <Footer/>
    </div>


  );
}
