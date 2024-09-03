"use client"
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      className="flex min-h-screen bg-center bg-cover hero"
      style={{ backgroundImage: "url('imgs/heroinsection.png')" }}
    >
      <div className="self-center text-center text-white mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl font-extrabold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            ED-El Fleisch
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <p className="text-xl">
            Wir verwenden nur natürliche und frische Zutaten. Unser Fleisch
            wird frisch von denselbst angepflanzten Bäumen gepflückt und
            anschließend sorgfältig gewaschen, bevor es dann mit frischen
            Tieren gewürzt wird.
          </p>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <button
            type="button"
            className="bg-orange-600 text-white py-3 px-6 rounded-md text-lg font-bold hover:bg-red-700 transition"
          >
            Unser Angebot
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
