import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50)
    })
  }, [])

  const links = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#work', label: 'Work' },
    { to: '#certifications', label: 'Certifications' },
    { to: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full z-30 transition-colors ${scrolled ? 'bg-sectionDark' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-white">Saurav</div>
        <div className="space-x-8">
          {links.map(l => (
            <a
              key={l.to}
              href={l.to}
              className="text-white hover:text-accent transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
