const certs = [
  "MERN Stack Internship - Cipher School (July 2024)",
  "Software Testing (SWAYAM)",
  "PHP Web Apps (U of Michigan)",
  "Data Structures in C++ (Udemy)",
  "Intermediate SQL (HackerRank)",
  "Python Certificate (HackerRank)",
  "Bytebash Hackathon Finalist"
];

const Certifications = () => (
  <section id="certifications" className="py-12 px-6 bg-gray-800 text-gray-100">
    <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Certifications & Achievements</h2>
    <ul className="space-y-2 max-w-3xl mx-auto list-disc pl-6 text-gray-400">
      {certs.map((c, i) => <li data-aos="fade-up" data-aos-delay={i*100} key={i}>{c}</li>)}
    </ul>
  </section>
);

export default Certifications;
