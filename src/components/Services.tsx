import { services } from '../constants'
import ServiceCard from './reusables/ServiceCard'

function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 padding-x mt-16">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services
