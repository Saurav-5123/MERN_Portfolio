import React from 'react'

const certs = [
  { title: 'MERN Stack', file: 'mern_stack.png' },
  { title: 'Software Testing', file: 'software_testing.png' },
  // ... add others
]

const Certifications = () => (
  <section id="certifications" className="py-16 bg-sectionDark text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <a
            key={c.file}
            href={`/certificates/${c.file}`}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-bgDark p-4 rounded-md hover:shadow-lg transition"
          >
            <img src={`/certificates/${c.file}`} alt={c.title} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-4 font-semibold">{c.title}</div>
          </a>
        ))}
      </div>
    </div>
  </section>
)
export default Certifications
