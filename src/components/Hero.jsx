import deskImg from '../assets/image.png';

const Hero = () => (
  <section id="home" className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${deskImg})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
      <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold">Hi, I’m Saurav</h1>
      <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-300 mt-4">Frontend Web Developer | MERN Stack Enthusiast</p>
      <a
        data-aos="fade-up"
        data-aos-delay="400"
        href="https://drive.google.com/file/d/1SwThD123Ob9qGMaAxKZnQsFkjrQOhf-a/view?usp=drive_link"
        target="_blank"
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
      >
        Download CV
      </a>
    </div>
  </section>
);

export default Hero;
