const Footer = () => (
  <footer className="bg-gray-950 text-gray-500 text-center py-6">
    <p>Connect with me:</p>
    <div className="flex justify-center gap-6 mt-2">
      <a href="https://www.linkedin.com/in/saurav5123/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
      <a href="https://github.com/Saurav-5123" target="_blank" className="hover:text-white">GitHub</a>
    </div>
    <p className="mt-4 text-sm">© {new Date().getFullYear()} Saurav. All rights reserved.</p>
  </footer>
);

export default Footer;
