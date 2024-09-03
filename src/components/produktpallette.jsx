"use client";
import { useState } from 'react';

export default function ProductPage({ selectedMeatType }) {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { name: 'Rinderbrust', image: 'placeholder1.jpg', meatType: 'Rind' },
    { name: 'Rinderarnus', image: 'placeholder1.jpg', meatType: 'Rind'},
    { name: 'Rinderpenis', image: 'placeholder1.jpg' , meatType: 'Rind'},
    { name: 'Zunge vom Rind', image: 'placeholder1.jpg' , meatType: 'Rind'},
    { name: 'Rind Tot', image: 'placeholder1.jpg' , meatType: 'Rind'},
    { name: 'Rind Lebend', image: 'placeholder1.jpg' , meatType: 'Rind'},
    { name: 'Kalbsarsch', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalbspenis', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalbshoden', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalb Ganz Lebend', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalb Ganz Tot', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalb Ganz Halbtot', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalb Ganz 1/3 Tot', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalb Ganz 1 3/4 Tot', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Kalb Ganz 1 3.5/4 Tot', image: 'placeholder1.jpg' , meatType: 'Kalb'},
    { name: 'Hühnerkloake', image: 'placeholder1.jpg' , meatType: 'Huhn'},
    { name: 'Hühnerkrallen', image: 'placeholder1.jpg' , meatType: 'Huhn'},
    { name: 'Hühnerschnabel', image: 'placeholder1.jpg' , meatType: 'Huhn'},
    { name: 'Ganzes Huhn', image: 'placeholder1.jpg' , meatType: 'Huhn'},
    { name: 'Ganzes Lebendes Huhn', image: 'placeholder1.jpg' , meatType: 'Huhn'},
    { name: 'Ganzes Lebendes Huhn gefüllt', image: 'placeholder1.jpg' , meatType: 'Huhn'},
    { name: 'Ganzes Huhn Gefüllt', image: 'placeholder1.jpg' , meatType: 'Huhn'},
    { name: 'Lammschnitzel', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammkotelett', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammschwanz', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammhirn', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammzunge', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammohren', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammpansen', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammrippen', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammfuß', image: 'placeholder1.jpg', meatType: 'Lamm' },
    { name: 'Lammfell', image: 'placeholder1.jpg', meatType: 'Lamm' },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedMeatType) {
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