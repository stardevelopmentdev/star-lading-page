import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileScreen,
  faLaptopCode,
  faLightbulb,
  faSitemap,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 h-full">
    <div className="w-16 h-16 bg-star-pink-light rounded-full flex items-center justify-center mb-6">
      <FontAwesomeIcon icon={icon} className="text-star-pink text-2xl" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const Services = () => {
   const servicesData = [
     {
       icon: faLaptopCode,

       title: "Desenvolvimento de Sites",

       description:
         "Criação de páginas e sites profissionais, responsivos e rápidos, feitos sob medida para destacar sua empresa.",
     },

     {
       icon: faMobileScreen,

       title: "Aplicativos Mobile",

       description:
         "Aplicativos para Android e iOS, modernos, intuitivos e integrados aos processos da sua empresa.",
     },

     {
       icon: faCode,

       title: "Softwares Personalizados",

       description:
         "Pequenos sistemas e ferramentas exclusivas para otimizar e inovar os processos do seu negócio.",
     },

     {
       icon: faSitemap,

       title: "Integração de Sistemas",

       description:
         "Conectamos diferentes plataformas para que seus dados e processos funcionem de forma unificada.",
     },

     {
       icon: faLightbulb,

       title: "Soluções Inovadoras",

       description:
         "Transformamos suas ideias em produtos digitais que impulsionam resultados e melhoram a experiência do cliente.",
     },

     {
       icon: faHeadset,

       title: "Suporte & Manutenção",

       description:
         "Acompanhamento técnico e melhorias contínuas para manter seu sistema ou site sempre atualizado.",
     },
   ];

  return (
    <section id="servicos" className="py-20 bg-star-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Oferecemos soluções completas para sua presença digital, desde o
            design até a implementação e manutenção.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
            >
              {service.description}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
