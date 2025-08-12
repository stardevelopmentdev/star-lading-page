import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} />);
    } else {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />
      );
    }
  }
  return <div className="text-yellow-400 mb-4 flex gap-1 text-lg">{stars}</div>;
};

const TestimonialCard = ({ img, name, role, text, rating }) => (
  <div className="bg-star-gray-light p-8 rounded-xl h-full flex flex-col">
    <div className="flex items-center mb-6">
      <img
        src={img}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
    <Rating value={rating} />
    <p className="text-gray-600 leading-relaxed">"{text}"</p>
  </div>
);

const Testimonials = () => {
  const testimonialsData = [
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      name: "Carlos Mendes",
      role: "CEO, TechSolutions",
      text: "A equipe da Star superou todas as nossas expectativas. Nosso site não só ficou visualmente incrível, como também melhorou significativamente nossas conversões. Recomendo sem hesitar!",
      rating: 5,
    },
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      name: "Ana Oliveira",
      role: "Diretora de Marketing, FashionStore",
      text: "Desde que lançamos nossa loja virtual desenvolvida pela Star, nossas vendas online aumentaram em 200%. O processo foi fluido e o suporte continua sendo excepcional.",
      rating: 5,
    },
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      name: "Ricardo Alves",
      role: "Fundador, GreenFood",
      text: "Profissionalismo e criatividade definem a Star. Nosso aplicativo de delivery não só é bonito, mas também extremamente funcional. Os usuários adoram a experiência!",
      rating: 4.5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A satisfação de nossos clientes é nossa maior conquista.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
