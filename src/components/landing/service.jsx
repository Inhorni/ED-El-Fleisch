"use client"
import React from "react";
import kundenwunsch from "@/assets/download.png"
import quality from "@/assets/quality.png"
import shipping from "@/assets/lieferung.png"
import Title from "@/title/title";
import { motion } from "framer-motion";

const services = [
  {
    icon: <img src={shipping.src} alt="Kundenwunsch" />, // Example icon, you can use an actual icon component if needed
    title: "Auslieferung an denn Kunden",
    bulletPoints: [""],
  },
  {
    icon: <img src={quality.src} alt="Kundenwunsch" />,
    title: "Top Produkt Qualität",
    bulletPoints: [""],
  },
  {
    icon: <img src={kundenwunsch.src} alt="Kundenwunsch" />,
    title: "Individuelle Anpassbar",
    bulletPoints: [""],
  },
  // Add more services as needed
];

function Service() {
  return (
    <section className="mt-[4rem] lg:pt-[8rem] px-4 pb-16 mq-sections md:px-[18rem]">
      <Title title="Unsere Leistungen" label="Leistungen" />
      <div className="flex flex-wrap mt-[5rem] flex-col gap-8 items-center w-full justify-between md:flex-row">
        {services.map((service, index) => {
          return (
            <motion.div
              key={index}
              className="relative p-10 flex flex-col text-white md:w-1/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "200px", }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="bg-2 self-start w-[6rem] h-[5rem] flex justify-center items-center rounded-xl  shadow-sm">
                <span className="text-5xl text-gray-300">{service.icon}</span>
              </div>
              <div>
                <h3 className="py-5 font-semibold text-2xl">{service.title}</h3>
                <ul className="pt-6 flex flex-col gap-2">
                  {service.bulletPoints.map((point, bulletIndex) => {
                    return (
                      <li key={bulletIndex} className="flex items-center gap-5 text-gray-300">
                        {/* Add an icon or any other styling for bullet points if needed */}
                        <span>{point}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
