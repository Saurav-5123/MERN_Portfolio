import React from 'react'
import background from '../assets/image.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div data-aos="fade-up" className="bg-black bg-opacity-60 p-6 rounded">
        <h1 className="text-4xl font-bold">Hey, I'm Saurav</h1>
        <p className="mt-4 text-xl">Frontend Web Developer</p>
        <a
          href="https://drive.google.com/file/d/1SwThD123Ob9qGMaAxKZnQsFkjrQOhf-a/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-2 bg-accent text-white rounded"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}

export default Hero
