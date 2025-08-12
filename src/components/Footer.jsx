import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StarLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-star-pink">
    <path
      fill="currentColor"
      d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z"
    ></path>
  </svg>
);

const Footer = () => {
  const quickLinks = [
    "Início",
    "Sobre Nós",
    "Serviços",
    "Projetos",
    "Blog",
    "Contato",
  ];
  const servicesLinks = [
    "Desenvolvimento Web",
    "E-commerce",
    "SEO & Marketing",
    "UI/UX Design",
    "CMS & Sistemas",
    "Suporte",
  ];
  const socialIcons = [faInstagram, faLinkedinIn];

  return (
    <footer className="bg-star-gray-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-8 h-8">
                <StarLogo />
              </div>
              <span className="ml-2 text-xl font-bold">Star</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformamos sua presença digital com soluções web inovadoras e
              de alta conversão.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-star-pink transition duration-300"
                >
                  <FontAwesomeIcon icon={icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-star-pink transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="https://www.instagram.com/stardevelopment.dev"
                    className="text-gray-400 hover:text-star-pink transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-star-pink mr-3 w-4"
                />
                <span className="text-gray-400">
                  stardevelopment.dev@gmail.com
                </span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-star-pink mr-3 w-4"
                />
                <span className="text-gray-400">(31) 98216-9130</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-star-pink mr-3 mt-1 w-4"
                />
                <span className="text-gray-400">R. Inácio Murta 15 - MG</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Star. Todos os direitos reservados.
          </p>
          <div>
            <a
              href="#"
              className="text-gray-400 hover:text-star-pink text-sm mr-6 transition duration-300"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-star-pink text-sm transition duration-300"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
