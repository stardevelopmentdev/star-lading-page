const StarLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-star-pink">
    <path
      fill="currentColor"
      d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z"
    ></path>
  </svg>
);

const Hero = () => (
  <section
    id="inicio"
    className="pt-32  relative overflow-hidden"
  >
    <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Lançamos Sua Ideia para o{" "}
          <span className="text-star-pink">Universo Digital</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
          Desenvolvemos sites profissionais que elevam sua marca e convertem
          visitantes em clientes leais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#orcamento"
            className="bg-star-pink hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-semibold transition duration-300 text-center cursor-pointer"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#projetos"
            className="border border-star-pink text-star-pink hover:bg-star-pink hover:text-white px-8 py-3 rounded-full font-semibold transition duration-300 text-center cursor-pointer"
          >
            Ver Projetos
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
          <StarLogo />
          <div className="absolute inset-0 bg-star-pink opacity-20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-star-pink-light rounded-full opacity-30 blur-3xl"></div>
    <div className="absolute top-32 -left-16 w-48 h-48 bg-star-pink-light rounded-full opacity-20 blur-3xl"></div>
  </section>
);
export default Hero;
