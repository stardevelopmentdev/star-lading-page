import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenRuler,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const ProcessStep = ({
  icon,
  title,
  description,
  align = "right",
  isLast = false,
}) => {
  const isRightAligned = align === "right";

  const TextBlock = () => (
    <div
      className={`text-center ${
        isRightAligned ? "md:text-left" : "md:text-right"
      }`}
    >
      <h3 className="text-xl font-bold mb-2 text-star-gray-dark">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const IconBlock = () => (
    <div className="relative flex justify-center">
      <div className="w-16 h-16 bg-star-pink rounded-full flex items-center justify-center text-white z-10 shrink-0 shadow-lg">
        <FontAwesomeIcon icon={icon} className="text-2xl" />
      </div>
      {!isLast && (
        <div className="absolute top-16 left-1/2 h-full w-0.5 bg-star-pink-light md:hidden"></div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12">
      {!isRightAligned ? <TextBlock /> : <div></div>}
      <IconBlock />
      {isRightAligned ? <TextBlock /> : <div></div>}
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      icon: faLightbulb,
      title: "1. Briefing e Descoberta",
      description:
        "Entendemos profundamente o seu negócio, objetivos e público-alvo para criar uma solução personalizada.",
      align: "right",
    },
    {
      icon: faPenRuler,
      title: "2. Design e UI/UX",
      description:
        "Criamos wireframes e designs que combinam estética com funcionalidade para uma experiência excepcional.",
      align: "left",
    },
    {
      icon: faCode,
      title: "3. Desenvolvimento",
      description:
        "Transformamos o design em código, aplicando as melhores práticas de desenvolvimento e otimização.",
      align: "right",
    },
    {
      icon: faRocket,
      title: "4. Lançamento",
      description:
        "Publicamos seu site com testes completos e oferecemos suporte contínuo após o lançamento.",
      align: "left",
    },
  ];

  return (
    <section id="processo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso Processo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com uma metodologia clara e eficiente para garantir
            resultados excepcionais.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-star-pink-light transform -translate-x-1/2"></div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                {...step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
