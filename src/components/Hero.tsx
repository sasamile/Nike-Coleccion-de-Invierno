import { useState } from "react";
import { BigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import Botton from "./reusables/Botton";
import { FaArrowRight } from "react-icons/fa6";
import ShoeCard from "./reusables/ShoeCard";
function Hero() {
  const [heroImage, setHeroImage] = useState(BigShoe1);

  return (
    <section className="flex justify-center max-xl:flex-col min-h-screen max-container">
      <div className="relative flex justify-center items-start flex-col xl:w-2/5 padding-x pt-28">
        <p className="text-lg font-montserrat text-sky-700">
          Colección de Verano
        </p>
        <h1 className="mt-2 text-[96px] font-palanquin max-sm:text-[70px] font-bold z-10 xl:whitespace-nowrap">
          <span className="relative">La Nueva Llegada</span>
          <br />
          Zapatillas <span className="text-sky-700 relative">Nike</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-xl:w-3/4 max-md:w-full">
          Descubre las últimas novedades de Nike, comodidad de calidad e
          innovación para tu vida activa.
        </p>

        <Botton text="Ver Colección" icon={FaArrowRight} />

        <div className="relative flex justify-start items-start flex-wrap w-full mt-20 mb-10 sm:gap-16 gap-10">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-10 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center sm:rounded-bl-[10rem]">
        <img
          src={heroImage}
          alt="Shoe"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="absolute -bottom-[5%] flex sm:gap-6 gap-2 max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgUrl={shoe.bigShoe}
                setHeroImage={(img) => setHeroImage(img)}
                heroImage={heroImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
