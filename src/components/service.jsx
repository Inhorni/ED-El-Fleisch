"use client"
import React from "react";
import Title from "../title/title";
import { motion } from "framer-motion";

const services = [
  {
    icon: "", // Example icon, you can use an actual icon component if needed
    title: "Card One",
    bulletPoints: ["High-quality service", "Professional team", "Affordable pricing"],
  },
  {
    icon: "",
    title: "Card Two",
    bulletPoints: ["Fast delivery", "Reliable support", "Customer satisfaction"],
  },
  {
    icon: "",
    title: "Card Three",
    bulletPoints: ["Expert technicians", "Comprehensive service", "Guaranteed results"],
  },
  {
    icon: "",
    title: "Card Four",
    bulletPoints: ["Expert technicians", "Comprehensive service", "Guaranteed results"],
  },
  // Add more services as needed
];

function Service() {
  return (
    <section className="mt-[4rem] lg:pt-[8rem] px-4 pb-16 mq-sections md:px-[18rem]">
      <Title title="Lorem ipsum dolor sit amet" label="Unser Service" />
      <div className="flex flex-wrap mt-[5rem] flex-col gap-8 items-center w-full justify-between md:flex-row">
        {services.map((service, index) => {
          return (
            <motion.div
              key={index}
              className="relative p-10 flex flex-col text-white border border-colour-1 rounded-xl md:w-1/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "100px", }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="bg-2 self-start w-[5rem] h-[5rem] flex justify-center items-center rounded-xl border-2 border-colour-2 shadow-sm">
                <span className="text-5xl text-gray-300">{service.icon}</span>
              </div>
              <div>
                <h3 className="py-6 font-semibold text-2xl">{service.title}</h3>
                <ul className="pt-6 flex flex-col gap-3">
                  {service.bulletPoints.map((point, bulletIndex) => {
                    return (
                      <li key={bulletIndex} className="flex items-center gap-3 text-gray-300">
                        {/* Add an icon or any other styling for bullet points if needed */}
                        <span>{point}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <span
                className="absolute top-0 left-0 bg-2 text-3xl font-semibold p-2 rounded-tr-[30px] rounded-bl-[30px] 
                    translate-x-[-50%] translate-y-[-50%]"
              >
                {index + 1}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
