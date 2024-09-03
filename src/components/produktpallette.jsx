"use client";
import { useState } from 'react';

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { name: 'Rinderbrust', image: 'placeholder1.jpg' },
    { name: 'Rinderarnus', image: 'placeholder1.jpg' },
    { name: 'Rinderpenis', image: 'placeholder1.jpg' },
    { name: 'Zunge vom Rind', image: 'placeholder1.jpg' },
    { name: 'Kalbsarschloch', image: 'placeholder1.jpg' },
    { name: 'Kalbpenis', image: 'placeholder1.jpg' },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
