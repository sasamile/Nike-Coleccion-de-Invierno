interface ShoeCardProps {
  imgUrl: string
  setHeroImage: (imgUrl: string) => void
  heroImage: string
}

function ShoeCard({ imgUrl, setHeroImage, heroImage }: ShoeCardProps) {
  const handleClick = () => {
    setHeroImage(imgUrl)
  }
  return (
    <button
      onClick={handleClick}
      className={`border-2 rounded-xl max-sm:flex-1 ${
        heroImage === imgUrl ? 'border-sky-700' : 'border-transparent'
      }`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl}
          alt="Shoe icon"
          width={127}
          height={103}
          className="pointer-events-none object-contain"
        />
      </div>
    </button>
  )
}

export default ShoeCard
