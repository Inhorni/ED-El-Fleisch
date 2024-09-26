"use client";
import React from "react";
import Title from "@/title/title";
import { motion } from "framer-motion";
import ganyu from "@/assets/ganya.png"

function UberUns() {
  return (
    <section className="mt-[4rem] lg:pt-[8rem] px-8 pb-16  mq-sections md:px-[18rem]">
      {/* Aligning the title with the FAQ section */}
      
      <Title title="Über uns" label="About Us" />
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

          viewport={{ once: true }}
          className="space-y-8"
        >
      <div className="mt-[5rem] flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            src={ganyu.src}
            alt="Team Image"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <p className="text-lg mb-4 text-white">
          In unserem Fleischgroßhandel dreht sich alles um hochwertige Produkte, traditionellen Handwerkskunst und vor allem dem freundlichen Umgang miteinander in
          unserem Team. 
          </p>
          <p className="text-lg mb-4 text-white">
          Die Arbeit unseres Teams, ist nicht einfach nur Arbeit, sondern viel eher eine leidenschaft und ein Hobby.
          </p>
          <p className="font-bold text-lg mb-6 text-white">
          Das solltet ihr über uns wissen:
          </p>
          <p className="text-lg mb-4 text-white">
          Dies ist ein Fleischgroßhandel und keine Metzgerei, was bedeutet dass sie bei uns keine wurst erwerben können.
          </p>
          <p className="text-lg mb-4 text-white">
          Dafür erwartet Sie aber umso besseres Fleisch und wir können individuell auf Ihre wünsche eingehen. Gerne können Sie sich auch. vor
          Ort von der Qualität unserer Produkte überzeugen
          </p>
          <p className="text-lg mb-6 text-white">
          ED-EL Fleisch- Fleisch, was in Erinnerung bleibt. wir freuen uns auf Ihren Besuch oder Bestellung?
          </p>
          <motion.button
            className="bg-orange-600 text-white py-3 px-6 rounded-md text-lg font-bold hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mehr Erfahren
          </motion.button>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

export default UberUns;
