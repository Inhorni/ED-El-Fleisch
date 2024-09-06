"use client";
import React from 'react';
import Title from "@/title/title";
import { motion } from "framer-motion";


const AnimalSelection = () => {
  return (
    <section className="mt-[4rem] lg:pt-[8rem] px-8 pb-16 md:px-[18rem] mq-sections">
        <Title title="Unser Sortiment " label="Sinnersmeat" />
        <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "200px", }}
              transition={{ duration: 1, ease: "easeOut" }}
        >
           <div className="bg-black text-white p-8">
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Rind (MUUUUUUUUh) Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image Container */}
          <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-full md:w-72 h-72 bg-transparent flex items-center justify-center rounded-md overflow-hidden">
              <img src="path_to_cow_image.png" alt="Rind" className="object-cover w-full h-full" />
            </div>
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="bg-transparent text-4xl font-bold">🐄</span> {/* Replace 🐄 with your actual logo */}
            </div>
          </div>
          {/* Text Below Image */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold">RIND</h3>
          </div>
        </div>

        {/* Schwein (OINK OINK) Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image Container */}
          <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-full md:w-72 h-72 bg-transparent flex items-center justify-center rounded-md overflow-hidden">
              <img src="path_to_pig_image.png" alt="Schwein" className="object-cover w-full h-full" />
            </div>
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="bg-transparent text-4xl font-bold">🐖</span> {/* Replace 🐖 with your actual logo */}
            </div>
          </div>
          {/* Text Below Image */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold">SCHWEIN</h3>
          </div>
        </div>

        {/* Kalb(MÄÄÄÄÄH) Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image Container */}
          <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-full md:w-72 h-72 bg-transparent flex items-center justify-center rounded-md overflow-hidden">
              <img src="path_to_pig_image.png" alt="Kalb.png" className="object-cover w-full h-full" />
            </div>
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="bg-transparent text-4xl font-bold">🐐</span> {/* Replace 🐐 with your actual logo */}
            </div>
          </div>
          {/* Text Below Image */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Kalb</h3>
            <p>Nach Absprache</p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </section>
  );
};

export default AnimalSelection;
