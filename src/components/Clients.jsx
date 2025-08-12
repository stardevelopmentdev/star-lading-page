import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faAmazon,
  faSlack,
  faSpotify,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";

const ClientLogo = ({ icon }) => (
  <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300">
    <FontAwesomeIcon icon={icon} className="text-3xl text-gray-500" />
  </div>
);

const Clients = () => {
  const logos = [faGoogle, faAmazon, faSlack, faSpotify, faShopify];
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-gray-500 font-semibold mb-8 tracking-wider">
          EMPRESAS QUE CONFIAM EM NOSSO TRABALHO
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <ClientLogo key={index} icon={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Clients;
