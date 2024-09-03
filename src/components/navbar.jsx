import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 relative">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Left side menu */}
        <ul className="flex space-x-8 text-white">
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
          <div className="rounded-full border border-white p-2">
            <img
              src="https://example.com/logo.png" // Replace with your logo
              alt="Logo"
              className="h-8 w-8"
            />
          </div>
        </div>

        {/* Right side menu */}
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-orange-500">
            <a href="#ueber-uns">Über uns</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
