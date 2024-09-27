"use client";
import Footer from "@/components/footer.jsx"
import Navbar from "@/components/navbar.jsx"
import Gewurz from "@/components/gewurze/gewurze.jsx"
import "./produkt.css"


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Gewurz/>
      <Footer/>
    </div>
  );
}