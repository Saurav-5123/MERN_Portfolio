const Navbar = () => (
  <nav className="fixed w-full bg-gray-950 text-gray-200 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <span className="text-xl font-bold">Saurav</span>
      <div className="space-x-6">
        {["home", "about", "work", "projects", "certifications", "contact"].map(section => (
          <a
            key={section}
            href={`#${section}`}
            className="hover:text-blue-400 transition"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
