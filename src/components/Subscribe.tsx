import Botton from "./reusables/Botton";

function Subscribe() {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 max-container padding overflow-hidden">
      <h3 className="text-4xl max-lg:text-center leading-[68px] lg:max-w-md font-palanquin font-bold">
        <span className="text-sky-700">Suscríbete</span> y Recibe las Ultimas
        Actualizaciones
      </h3>

      <div className="lg:max-w-[27%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Botton text="Registrate"  classN="pl-12 pr-6 "/>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
