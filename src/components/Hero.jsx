import React from 'react';

const Hero = () => (
  <section
    id="home"
    className="h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url('/image.png')` }} // ✅ Corrected path
  >
    <div
      className="bg-black bg-opacity-50 p-6 rounded-md text-center"
      data-aos="fade-down"
    >
      <h1 className="text-5xl font-bold text-white">
        Hey, I’m Saurav
      </h1>
      <p className="mt-4 text-xl text-gray-300">
        Frontend Web Developer
      </p>
    </div>
  </section>
);

export default Hero;
