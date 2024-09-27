import { useState } from 'react';
import placeholder from '@/assets/placeholder1.png';

export default function ProductPage({ selectedGewurzType }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [popoverVisible, setPopoverVisible] = useState(null); // For controlling popover

  const products = [
    { name: 'Rinderbrust', image: placeholder.src, GewurzType: 'Rind', description: 'Leckere Rinderbrust, perfekt gewürzt und zubereitet.' },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedGewurzType === 'Alle') {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedGewurzType) {
      return product.GewurzType === selectedGewurzType && product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const togglePopover = (index) => {
    setPopoverVisible(popoverVisible === index ? null : index); // Toggle popover for specific product
  };

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
              <button className="more-info" onClick={() => togglePopover(index)}>
                Mehr erfahren
              </button>
              {popoverVisible === index && (
                <div className="popover">
                  <p>{product.description}</p>
                  <button onClick={() => togglePopover(index)}>Schließen</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
