import { products } from "../constants"
import PopularCard from "./PopularCard"

function PopularSneakers() {
  return (
    <section id="products" className="max-container mt-20">
    <div className="padding-x">
      <h2 className="text-[48px] font-bold font-palanquin">
        Sneakers <span className="text-sky-700">Populares</span>
      </h2>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 lg:max-w-lg">
        Experimenta la calidad y el estilo de primera categoría con nuestras
        codiciadas selecciones. Descubre un mundo de confort, diseño y valor.
      </p>

      <div className="overflow-hidden grid place-items-center lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-y-10 sm:gap-x-14 gap-10 mt-16">
       
      {products.map((product) => (
            <PopularCard key={product.name} {...product} />
          ))}
      </div>
    </div>
  </section>
  )
}

export default PopularSneakers