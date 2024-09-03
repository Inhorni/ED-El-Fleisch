"use client";
import React from "react";
import Title from "../title/title";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
  },
  {
    question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
  },
  {
    question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
  },
  {
    question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
  },
  // Einfach weiteres object in array fügen für mehr
];

function FaqSection() {
    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleToggle = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="mt-[4rem] lg:pt-[8rem] pb-16 px-[18rem] mq-sections">
            <Title title="Oft Gefragte Fragen" label="FAQ" />
            <div className="mt-[5rem] grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="py-4 px-6 bg-2 flex flex-col gap-2 rounded-md border-2 border-colour-2 shadow-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="flex items-center flex-wrap justify-between text-gray-300 font-semibold text-lg md:text-xl cursor-pointer"
                                onClick={() => handleToggle(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span>{faq.question}</span>
                                <motion.span
                                    className="text-2xl"
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Dropdown icon platzhalter */}
                                </motion.span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    height: activeIndex === index ? "auto" : 0,
                                    opacity: activeIndex === index ? 1 : 0,
                                }}
                            >
                                {faq.answer}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default FaqSection;
