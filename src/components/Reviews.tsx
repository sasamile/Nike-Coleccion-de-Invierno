import { reviews } from '../constants'
import ReviewCard from './reusables/ReviewCard'

function Reviews() {
  return (
    <section className="max-container padding-x overflow-hidden my-10">
      <h2 className="font-palanquin text-center text-4xl font-bold">
        ¿Qué Dicen Nuestros <span className="text-sky-700">Clientes</span>?
      </h2>
      <p className="m-auto font-montserrat text-slate-gray text-lg mt-4 text-center max-w-lg">
        Escuche historias reales de nuestros clientes satisfechos sobre sus
        excepcionales experiencias con nosotros.
      </p>

      <div className="flex-1 flex justify-evenly items-center max-lg:flex-col gap-14 mt-20">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgUrl={review.imgURL}
            feedback={review.feedback}
            customerName={review.customerName}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  )
}

export default Reviews
