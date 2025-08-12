import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const StarLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full text-star-pink">
    <path
      fill="currentColor"
      d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z"
    ></path>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        id="header"
        className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center  pl-20 cursor-pointer">
            <div className="relative w-10 h-10">
              <StarLogo />
            </div>
            <span className="ml-2 text-2xl font-bold">Star</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-star-gray-dark hover:text-star-pink transition duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#orcamento"
              className="bg-star-pink hover:bg-opacity-90 text-white px-5 py-2 rounded-full transition duration-300 font-semibold"
            >
              Solicitar Orçamento
            </a>
          </nav>
          <button
            className="md:hidden text-star-gray-dark text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden fixed top-[76px] left-0 w-full bg-white shadow-lg z-40 flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-star-gray-dark hover:text-star-pink transition duration-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#orcamento"
            className="bg-star-pink hover:bg-opacity-90 text-white px-6 py-3 rounded-full transition duration-300 font-semibold mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </>
  );
};
export default Header;
