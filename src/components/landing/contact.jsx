'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Title from "@/title/title";

const Kontakt = () => {
  return (
    <div className="relative text-white py-20 px-8 mt-[8rem] overflow-hidden mb-[8rem] md:px-[18rem]">
      {/* Main Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Title title="Kontaktieren sie uns" label="Contact" />
          <p className="text-lg opacity-70 max-w-md">
            We are ready to assist you. Find us through any of the methods below.
          </p>

          <div className="space-y-6 mt-80">
            <div>
              <h3 className="text-xl font-semibold mb-1">Call Us</h3>
              <p className="text-lg opacity-80">1 (232) 252 55 22</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
              <p className="text-lg opacity-80">75 Street Sample, WI 63025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email Us</h3>
              <a
                href="mailto:template@sample.com"
                className="text-lg text-blue-400 hover:underline opacity-80"
              >
                template@sample.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg shadow-lg h-96"
        >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Ed-el+fleisch&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Kontakt;
