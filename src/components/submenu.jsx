"use client";
import React from "react";
import { useState } from 'react';

const Submenu = ({ onMeatTypeChange }) => {
  return (
    <div className="shadow-lg p-4 mt-2 mx-auto max-w-sm pt-[8rem] md:ml-[8rem]">
      <ul className="flex justify-around text-orange-500 font-semibold">
      <li className="hover:text-orange-700">
          <a href="#" onClick={() => onMeatTypeChange('Alle')}>Alle</a>
        </li>
        <li className="hover:text-orange-700">
          <a href="#kalb" onClick={() => onMeatTypeChange('Kalb')}>Kalb</a>
        </li>
        <li className="hover:text-orange-700">
          <a href="#huhn" onClick={() => onMeatTypeChange('Huhn')}>Huhn</a>
        </li>
        <li className="hover:text-orange-700">
          <a href="#lamm" onClick={() => onMeatTypeChange('Lamm')}>Lamm</a>
        </li>
        <li className="hover:text-orange-700">
          <a href="#Rind" onClick={() => onMeatTypeChange('Rind')}>Rind</a>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;