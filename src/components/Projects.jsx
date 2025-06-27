const projectList = [
  { title: "Notes App", desc: "iOS Swift app with reminders & iCloud sync", link: "https://github.com/Saurav-5123/Notes-app" },
  { title: "MY Rights", desc: "Legal consulting web platform using MERN", link: "https://github.com/Saurav-5123/My-Rights", live: "https://myrights.netlify.app" },
  { title: "Portfolio", desc: "This React portfolio site", link: "https://github.com/Saurav-5123/Portfolio" },
  { title: "News Update", desc: "Real-time news platform with MongoDB", link: "https://github.com/Saurav-5123/News-Hunger" },
];

const Projects = () => (
  <section id="projects" className="py-12 px-6 bg-gray-900 text-gray-100">
    <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
      {projectList.map((p, idx) => (
        <div data-aos="fade-up" data-aos-delay={idx*200} key={idx} className="bg-gray-800 p-6 rounded-md hover:bg-gray-700 transition">
          <h4 className="font-semibold text-lg">{p.title}</h4>
          <p className="text-gray-400 mt-2">{p.desc}</p>
          <div className="mt-4 space-x-4">
            <a href={p.link} target="_blank" className="text-blue-400 underline">GitHub</a>
            {p.live && <a href={p.live} target="_blank" className="text-blue-400 underline">Live</a>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
