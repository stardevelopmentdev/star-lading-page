import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ img, title, category, tags, description }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
    <div className="relative overflow-hidden">
      <img
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
        src={img}
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
        <div className="p-6">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white/80 mt-1">{category}</p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-star-pink-light text-star-pink text-xs rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <a
        href="#"
        className="text-star-pink font-semibold hover:text-star-pink/80 transition duration-300 inline-flex items-center cursor-pointer"
      >
        Ver projeto{" "}
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f7a8fb206c-eed5ce5a5cf535c90c9c.png",
      title: "E-commerce Fashion",
      category: "Desenvolvimento de loja virtual completa",
      tags: ["E-commerce", "UX/UI"],
      description:
        "Loja virtual completa com foco em experiência de compra e conversão.",
    },
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1a830f0c5c-f55e822fe47ad11f0faf.png",
      title: "Finance Corp",
      category: "Site institucional para empresa financeira",
      tags: ["Institucional", "SEO"],
      description:
        "Site institucional com foco em credibilidade e conversão de leads.",
    },
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fb23344102-156e3e8303b9ab738b53.png",
      title: "Food App",
      category: "Aplicativo de delivery de comida",
      tags: ["App Mobile", "UX/UI"],
      description:
        "Aplicativo de delivery com interface intuitiva e experiência otimizada.",
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-star-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Conheça alguns dos nossos trabalhos mais recentes e de maior
            sucesso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="border border-star-pink text-star-pink hover:bg-star-pink hover:text-white px-8 py-3 rounded-full font-semibold transition duration-300 inline-block cursor-pointer"
          >
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
};
export default Projects;
