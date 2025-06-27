import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 p-4 flex justify-center gap-6 font-semibold">
      <a href="#home" className="hover:text-blue-500">Home</a>
      <a href="#work" className="hover:text-blue-500">Work</a>
      <a href="#certifications" className="hover:text-blue-500">Certifications</a>
      <a href="#contact" className="hover:text-blue-500">Contact</a>
    </nav>
  );
};

export default Navbar;
