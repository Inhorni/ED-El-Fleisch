import React from 'react';

const Kontakt = () => {
  return (
    <div className="relative  text-white py-20 px-8 mt-[8rem]">
      {/* Main Container */}
      <div className="container mx-auto space-y-16">

        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h2 className="text-4xl font-extrabold mb-4">Get in Touch with Us</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            We are here to assist you. Reach out to us through any of the following ways, and we will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 animate-slide-in-left">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
            <p className="text-base">1 (232) 252 55 22</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
            <p className="text-base">75 Street Sample, WI 63025</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
            <a href="mailto:template@sample.com" className="text-base text-blue-400 hover:underline">template@sample.com</a>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg animate-fade-in-up">
        
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Ed-el+fleisch&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            className="w-full h-96 rounded-xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>

        {/* Footer Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Kontakt;
