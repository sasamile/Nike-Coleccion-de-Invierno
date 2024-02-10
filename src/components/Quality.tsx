import { shoe8 } from "../assets/images"
import Botton from "./reusables/Botton"

 
function Quality() {
  return (
    <section className="flex justify-between items-center gap-10 max-lg:flex-col w-full max-container padding-x mt-16">
    <div className="flex-1">
      <h2 className="capitalize text-4xl lg:max-w-lg font-bold font-palanquin">
        Le ofrecemos zapatos de{' '}
        <span className="text-sky-700">máxima calidad</span>
      </h2>
      <p className="font-montserrat text-slate-gray text-lg lg:max-w-lg mt-4">
        Garantizando un confort y un estilo de primera, nuestro calzado
        meticulosamente elaborado está diseñado para elevar tu experiencia,
        proporcionándote una calidad calidad, innovación y un toque de
        elegancia.
      </p>
      <p className="mt-6 font-montserrat text-slate-gray text-lg lg:max-w-lg">
        Nuestra dedicación al detalle y la excelencia garantizan su
        satisfacción
      </p>
      <div className="mt-11">
        <Botton text="Ver Detalles" />
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <img
        src={shoe8}
        alt="Shoes"
        width={470}
        height={422}
        className="object-contain rounded-3xl"
      />
    </div>
  </section>
  )
}

export default Quality