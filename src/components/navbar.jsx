"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import placeholder from '../assets/monkeoogoog.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent p-4 absolute w-full items-center">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Left side menu for desktop */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li className="hover:text-orange-500">
            <a href="/">Start</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="/produktpalette">Angebot</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#zutaten">Zutaten</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#standort">Standort</a>
          </li>
        </ul>

        {/* Centered logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="p-2 pt-[100px]">
            <img
              src={placeholder.src} // Replace with your logo
              alt="Logo"
              className="h-18 w-[120px]"
            />
          </div>
        </div>

        {/* Right side menu for desktop */}
        <ul className="hidden md:flex space-x-8 text-white ml-auto">
          <li className="hover:text-orange-500">
            <a href="#ueber-uns">Über uns</a>
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Menu for mobile */}
      <motion.div
        className={`absolute top-16 left-0 w-full bg-transparent z-10 ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col space-y-4 text-white p-4 bg-black">
          <li className="hover:text-orange-500">
            <a href="/">Start</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="/produktpalette">Angebot</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#zutaten">Zutaten</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#standort">Standort</a>
          </li>
          <li className="hover:text-orange-500">
            <a href="#ueber-uns">Über uns</a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
