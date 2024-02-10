import { FaArrowRight } from "react-icons/fa6";

import { offer } from "../assets/images";
import Botton from "./reusables/Botton";

function SpecialOffer() {
  return (
    <section className="flex justify-between items-center max-lg:flex-col-reverse gap-10 max-container padding my-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-4xl font-palanquin font-bold">
          Oferta <span className="text-sky-700">Especial</span>
        </h3>
        <p className="font-montserrat text-slate-gray text-lg mt-4 lg:max-w-lg">
          Embárcate en un viaje de compras que redefine tu experiencia con
          ofertas inmejorables. Desde selecciones de primera hasta ahorros
          increíbles, ofrecemos un valor inigualable que nos diferencia.
        </p>
        <p className="font-montserrat text-slate-gray text-lg mt-6 lg:max-w-lg">
          Navegue por un reino de posibilidades diseñado para satisfacer sus
          deseos únicos, superando las expectativas más elevadas. Su viaje con
          nosotros es excepcional.
        </p>

        <div className="flex flex-wrap gap-4 mt-11">
          <Botton text="Compra ahora" icon={FaArrowRight}/>
          <Botton text="Conoce mas"  />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
