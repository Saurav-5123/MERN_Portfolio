import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-primary bg-opacity-90 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">Saurav</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:text-accent">Home</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#work" className="hover:text-accent">Work</a>
          <a href="#certifications" className="hover:text-accent">Certifications</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
