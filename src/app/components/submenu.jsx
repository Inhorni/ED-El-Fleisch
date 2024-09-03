import React from "react";

const Submenu = () => {
  return (
    <div className="shadow-lg p-4 mt-2 mx-auto max-w-sm">
      <ul className="flex justify-around text-orange-500 font-semibold">
        <li className="hover:text-orange-700">
          <a href="#kalb">Kalb</a>
        </li>
        <li className="hover:text-orange-700">
          <a href="#huhn">Huhn</a>
        </li>
        <li className="hover:text-orange-700">
          <a href="#lamm">Lamm</a>
        </li>
        <li className="hover:text-orange-700">
          <a href="#delfin">Delfin</a>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
