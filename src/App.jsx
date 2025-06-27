import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="pt-16"><Home /></div>
      <div id="work"><Work /></div>
      <div id="certifications"><Certifications /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
