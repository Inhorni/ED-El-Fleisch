"use client";
import { useState } from 'react';

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Alles');

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
    <main className="text-white min-h-screen">
      <section className="w-[90%] mx-auto text-center pt-[5rem]">

        <div className="grid grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="bg-transparent p-2 rounded-lg text-center transform transition-transform hover:translate-y-[-5px] hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full h-[80%] rounded-lg"
              />
              <div className="mt-2 flex justify-start items-center gap-4 pl-5">
                <h3 className="text-lg">{product.name}</h3>
                <a href="#" className="text-gray-400 underline text-sm">
                  Mehr erfahren
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

