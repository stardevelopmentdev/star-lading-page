import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faCode,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

// Um sub-componente para destacar os pontos fortes
const ValuePillar = ({ icon, title, children }) => (
  <div className="text-left">
    <div className="flex items-center gap-4 mb-3">
      <div className="flex-shrink-0 w-12 h-12 bg-star-pink-light text-star-pink rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <h3 className="text-xl font-bold text-star-gray-dark">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

export default function About() {
  return (
    <section id="sobre" className=" py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna de Texto (Esquerda) */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-star-gray-dark mb-6">
              Lançamos sua <span className="text-star-pink">Ideia</span> para o
              Universo Digital
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Somos a <span className="font-semibold">Star</span>, uma agência
              de desenvolvimento focada em criar soluções digitais modernas,
              funcionais e de alto desempenho.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nosso objetivo é transformar conceitos em produtos digitais que
              proporcionem experiências únicas e resultados concretos, sempre
              com atenção aos detalhes e simplicidade no design.
            </p>
            <a
              href="#projetos"
              className="text-star-pink font-semibold border-2 border-star-pink px-8 py-3 rounded-full hover:bg-star-pink hover:text-white transition duration-300"
            >
              Conheça Nossos Projetos
            </a>
          </div>

          {/* Coluna Visual (Direita) */}
          <div className="flex flex-col gap-8">
            <ValuePillar icon={faPalette} title="Design Inovador">
              Criamos interfaces intuitivas e atraentes que encantam os usuários
              e fortalecem sua marca.
            </ValuePillar>
            <ValuePillar icon={faCode} title="Código de Performance">
              Desenvolvemos com tecnologia de ponta para garantir sites rápidos,
              seguros e escaláveis.
            </ValuePillar>
            <ValuePillar icon={faHandshake} title="Parceria e Foco no Cliente">
              Trabalhamos ao seu lado em cada etapa para garantir que o produto
              final exceda suas expectativas.
            </ValuePillar>
          </div>
        </div>
      </div>
    </section>
  );
}
