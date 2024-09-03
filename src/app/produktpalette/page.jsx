"use client";
import ProductPage from "@/components/produktpallette.jsx"
import Footer from "@/components/footer.jsx"
import Navbar from "@/components/navbar.jsx"
import Submenu from "@/components/submenu.jsx"
import "./produkt.css"
import { useState } from 'react';

export default function Home() {
  const [selectedMeatType, setSelectedMeatType] = useState('');

  const handleMeatTypeChange = (meatType) => {
    setSelectedMeatType(meatType);
  };
  return (
    <div>
      <Navbar/>
      <Submenu onMeatTypeChange={handleMeatTypeChange} />
      <ProductPage selectedMeatType={selectedMeatType} />
      <Footer/>
    </div>
  );
}
