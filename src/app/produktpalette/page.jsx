import ProductPage from "@/components/produktpallette.jsx"
import Footer from "@/components/footer.jsx"
import Navbar from "@/components/navbar.jsx"
import Submenu from "@/components/submenu.jsx"
import "./produkt.css"

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Submenu/>
        <ProductPage/>
        <Footer/>
    </div>


  );
}
