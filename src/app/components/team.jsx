"use client";
import React from "react";
import Title from "../title/title";
import { motion } from "framer-motion";

function CareerSection() {
  return (
    <section className="mt-[4rem] lg:pt-[8rem] px-8 pb-16 md:px-[18rem] mq-sections">
      {/* Aligning the title with the FAQ section */}
      <Title title="Lorem ipsum dolor " label="Team" />
      
      <div className="mt-[5rem] flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <p className="text-lg mb-4 text-gray-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          </p>
          <p className="text-lg mb-4 text-gray-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          </p>
          <p className="font-bold text-lg mb-6 text-gray-300">
            Dann freuen wir uns auf dich!
          </p>
          <p className="text-lg mb-4 text-gray-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          </p>
          <p className="text-lg mb-4 text-gray-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          </p>
          <p className="text-lg mb-6 text-gray-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          </p>
          <motion.button
            className="bg-orange-600 text-white py-3 px-6 rounded-md text-lg font-bold hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jetzt Bewerben
          </motion.button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            src="/path-to-your-image.png"
            alt="Team Image"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

export default CareerSection;