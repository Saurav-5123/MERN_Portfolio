import deskImg from '../assets/image.png';

const About = () => (
  <section id="about" className="relative h-96 my-16">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <img src={deskImg} alt="About background" className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
      <div className="max-w-3xl text-white" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Know About Me</h2>
        <p className="text-lg">
          As a passionate developer, I build clean and responsive web applications using React, Node.js, MongoDB,
          and specialize in creating seamless user experiences with professional aesthetics.
        </p>
      </div>
    </div>
  </section>
);

export default About;
