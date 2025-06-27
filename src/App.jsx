import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <div className="dark bg-gray-900 text-gray-100 font-sans">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Certifications />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
