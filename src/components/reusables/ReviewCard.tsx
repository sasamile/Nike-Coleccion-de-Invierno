import { star } from '../../assets/icons'

interface ReviewCardProps {
  imgUrl: string
  customerName: string
  rating: string
  feedback: string
}

function ReviewCard({
  customerName,
  feedback,
  imgUrl,
  rating,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl p-4 border">
      <img
        src={imgUrl}
        alt="Customer image"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="font-montserrat text-slate-gray text-lg mt-6 text-center max-w-sm">
        {feedback}
      </p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <img
          src={star}
          alt="Rating start"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="font-palanquin text-3xl text-center font-bold mt-4">
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard
