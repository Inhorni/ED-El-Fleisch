"use client";
import { useState } from 'react';
import placeholder from '../assets/placeholder1.png';
export default function ProductPage({ selectedMeatType }) {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { name: 'Rinderbrust', image: placeholder.src, meatType: 'Rind' },
    { name: 'Rinderarnus', image: placeholder.src, meatType: 'Rind' },
    { name: 'Rinderpenis', image: placeholder.src, meatType: 'Rind' },
    { name: 'Zunge vom Rind', image: placeholder.src, meatType: 'Rind' },
    { name: 'Rind Tot', image: placeholder.src, meatType: 'Rind' },
    { name: 'Rind Lebend', image: placeholder.src, meatType: 'Rind' },
    { name: 'Kalbsarsch', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalbspenis', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalbshoden', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalb Ganz Lebend', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalb Ganz Tot', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalb Ganz Halbtot', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalb Ganz 1/3 Tot', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalb Ganz 1 3/4 Tot', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Kalb Ganz 1 3.5/4 Tot', image: placeholder.src, meatType: 'Kalb' },
    { name: 'Hühnerkloake', image: placeholder.src, meatType: 'Huhn' },
    { name: 'Hühnerkrallen', image: placeholder.src, meatType: 'Huhn' },
    { name: 'Hühnerschnabel', image: placeholder.src, meatType: 'Huhn' },
    { name: 'Ganzes Huhn', image: placeholder.src, meatType: 'Huhn' },
    { name: 'Ganzes Lebendes Huhn', image: placeholder.src, meatType: 'Huhn' },
    { name: 'Ganzes Lebendes Huhn gefüllt', image: placeholder.src, meatType: 'Huhn' },
    { name: 'Ganzes Huhn Gefüllt', image: placeholder.src, meatType: 'Huhn' },
    { name: 'Lammschnitzel', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammkotelett', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammschwanz', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammhirn', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammzunge', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammohren', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammpansen', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammrippen', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammfuß', image: placeholder.src, meatType: 'Lamm' },
    { name: 'Lammfell', image: placeholder.src, meatType: 'Lamm' },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedMeatType === 'Alle') {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedMeatType) {
      return product.meatType === selectedMeatType && product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="product-section">
      <div className="search-bar">
        <input
          type="text"
          id="search-input"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">🔍</button>
      </div>
      <div className="product-grid" id="product-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <a href="#" className="more-info">Mehr erfahren</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}