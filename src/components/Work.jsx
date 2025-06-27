const Work = () => (
  <section id="work" className="py-12 px-6 bg-gray-800 text-gray-100">
    <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">Work Experience & Volunteering</h2>
    <div className="space-y-8 max-w-4xl mx-auto">
      <div data-aos="fade-up" className="border-l-4 border-blue-600 pl-4">
        <h3 className="text-xl font-semibold">NSE Education Internship</h3>
        <p>Built quiz apps for Classes 6–8 using React and MongoDB.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className="border-l-4 border-emerald-600 pl-4">
        <h3 className="text-xl font-semibold">HelpAge NGO Volunteer</h3>
        <p>Taught digital literacy to elders and optimized app pagination.</p>
      </div>
    </div>
  </section>
);

export default Work;
