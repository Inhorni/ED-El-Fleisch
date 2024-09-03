import React from 'react';

const Kontakt = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kontaktiere Uns</h2>
          <p className="text-lg mb-6">
          At vero e At vero e s et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="mb-8">
            <p>
              <strong>Telefon:</strong> 1 (232) 252 55 22
            </p>
            <p>
              <strong>Adresse:</strong> 75 Street Sample, WI 63025
            </p>
            <p>
              <strong>E-Mail:</strong> <a href="mailto:template@sample.com" className="text-blue-500">template@sample.com</a>
            </p>
          </div>
        </div>

        {/* Image Section */}
{/* Google Maps Section */}
<div className="flex justify-center mb-12">
  <div className="w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
    <iframe
      src="https://www.google.com/maps/embed/v1/place?q=Ed-el+fleisch&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Location"
    ></iframe>
  </div>
</div>

      </div>
    </div>
  );
};

export default Kontakt;
