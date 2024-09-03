import React from "react";

function Hero () {
  return (
    <div
      className="flex min-h-screen bg-center bg-cover hero"
      style={{ backgroundImage: "url('imgs/heroinsection.png')" }}
    >
      <div className="self-center text-center text-white mx-auto px-4 md:px-8 max-w-3xl">
        <div className="mb-4">
          <div>
            <h1 className="text-6xl font-extrabold animate__animated animate__fadeIn animate__slower">
              ED-El Fleisch
            </h1>
          </div>
        </div>

        <div>
          <div>
            <p className="text-xl animate__animated animate__fadeIn animate__slower">
              Wir verwenden nur natürliche und frische Zutaten. Unser Fleisch
              wird frisch von denselbst angepflanzten Bäumen gepflückt und
              anschließend sorgfältig gewaschen, bevor es dann mit frischen
              Tieren gewürzt wird.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="bg-orange-600 text-white py-3 px-6 rounded-md text-lg font-bold hover:bg-red-700 transition"
          >
            Unser Angebot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
