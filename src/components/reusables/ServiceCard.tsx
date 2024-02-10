interface ServiceCardProps {
    imgUrl: string
    label: string
    subtext: string
  }
  
  function ServiceCard({ imgUrl, label, subtext }: ServiceCardProps) {
    return (
      <div className="sm:max-w-[350px] w-full rounded-[20px] shadow-xl px-10 py-12 bg-gradient-to-br from-[#f7f0ff] to-[#f3f3f3]">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-700">
          <img src={imgUrl} alt={label} width={28} height={28} className="object-contain" />
        </div>
  
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
          {label}
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
      </div>
    )
  }
  
  export default ServiceCard