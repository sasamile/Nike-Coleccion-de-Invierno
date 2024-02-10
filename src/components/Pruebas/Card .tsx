

interface CardProps{
    urlImg:string
    HeroImge:string
    setHeroImge:(value:string)=>void
}

function Card ({urlImg,HeroImge,setHeroImge}:CardProps) {
    function handleclick(){
        setHeroImge(urlImg)
    }
  return (
    <button onClick={handleclick} className={`${HeroImge==urlImg && "border-2 border-sky-600"}`}>





        <img src={urlImg} alt="" />
    </button>
  )
}

export default Card 