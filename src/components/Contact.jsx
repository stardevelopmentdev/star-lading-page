import React, { useState } from "react";
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

// --- Sub-componentes ---

const ContactInfoItem = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="w-10 h-10 bg-star-pink-light rounded-full flex items-center justify-center mr-4 shrink-0">
      <FontAwesomeIcon icon={icon} className="text-star-pink" />
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <a href="#" className="text-gray-600 hover:text-star-pink transition">
        {children}
      </a>
    </div>
  </div>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-star-pink-light hover:bg-star-pink text-star-pink hover:text-white rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

// --- Componente Principal ---

export default function Contact() {
  // Estado para controlar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Campo de telefone adicionado
    subject: "",
    message: "",
  });

  // Estado para controlar o status do envio
  const [status, setStatus] = useState("Enviar Mensagem");

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    // IMPORTANTE: Substitua pela sua chave de acesso do Web3Forms
    const accessKey = "SUA_CHAVE_DE_ACESSO_AQUI";

    const data = {
      ...formData,
      access_key: accessKey,
      subject: `Nova Mensagem de ${formData.name}: ${formData.subject}`,
      from_name: "Star Development Site",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Mensagem Enviada com Sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }); // Limpa o formulário
        setTimeout(() => setStatus("Enviar Mensagem"), 5000); // Reseta o botão
      } else {
        console.error("Erro do Web3Forms:", result);
        setStatus("Falha no Envio. Tente Novamente.");
      }
    } catch (error) {
      console.error("Erro de Rede:", error);
      setStatus("Erro na Rede. Tente Novamente.");
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos ansiosos para conhecer seu projeto e discutir como podemos
            ajudar.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-pink focus:border-star-pink outline-none transition"
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-pink focus:border-star-pink outline-none transition"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-pink focus:border-star-pink outline-none transition"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-pink focus:border-star-pink outline-none transition"
                placeholder="Assunto da mensagem"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-star-pink focus:border-star-pink outline-none transition"
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={
                status.includes("Enviando...") || status.includes("Sucesso")
              }
              className="w-full bg-star-pink text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:bg-star-pink/90 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status}
            </button>
          </form>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <ContactInfoItem icon={faEnvelope} title="Email">
                  stardevelopment.dev@gmail.com
                </ContactInfoItem>
                <ContactInfoItem icon={faPhone} title="Telefone">
                  (31) 98216-9130
                </ContactInfoItem>
                <ContactInfoItem icon={faLocationDot} title="Endereço">
                  R. Inácio Murta 15 - MG
                </ContactInfoItem>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Siga-nos</h3>
              <div className="flex space-x-4">
                <SocialIcon
                  icon={faInstagram}
                  href="https://www.instagram.com/stardevelopment.dev"
                />
                <SocialIcon icon={faLinkedinIn} href="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
