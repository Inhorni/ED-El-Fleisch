"use client";
import Footer from "@/components/footer.jsx"
import Navbar from "@/components/navbar.jsx"
import Impressum from "@/components/impressum/impressum.jsx"


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Impressum/>
      <Footer/>
    </div>
  );
}
