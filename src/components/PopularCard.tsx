import { star } from "../assets/icons"

 interface popularProps{
    imgUrl:string
    name:string
    price:string
    description:string
 }

function PopularCard({imgUrl,name,price,description}:popularProps) {
  return (
    <div className="flex-1 rounded-xl min-w-[240px] min-h-full group shadow-md bg-hero bg-center bg-cover cursor-pointer">
    <div className="px-6 py-4">
      <div className="flex justify-center items-center">
        <img
          src={imgUrl}
          alt="Nike shoe"
          className="-rotate-[20deg] my-3 w-[500px] h-[190px] z-10 group-hover:-translate-y-3 transition-transform duration-700"
        />
      </div>
      <h3 className="font-palanquin text-2xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm font-montserrat">{description}</p>
      <div className="flex justify-start gap-2.5 mt-2">
        <img
          src={star}
          alt="Start icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="font-montserrat text-lg leading-normal text-slate-gray">
          4.5
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-montserrat text-xl font-semibold text-sky-700 leading-normal mt-2">
          {price}
        </p>
        <span className="py-1 px-2 bg-green-400 text-white text-sm font-bold rounded-sm">
          nuevo
        </span>
      </div>
    </div>
  </div>
  )
}

export default PopularCard