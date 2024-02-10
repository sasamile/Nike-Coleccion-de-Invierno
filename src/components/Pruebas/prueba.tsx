import { useState } from "react"
import {BigShoe1}from "../../assets/images"
import { shoes } from "../../constants"
import Card from "./Card "

function Prueba() {
    const [HeroImge, setHeroImge] = useState(BigShoe1)
  return (
    <div>
        <img src={HeroImge} alt="" />

        <div>
            {shoes.map((shoe)=>(
                <Card 
                urlImg={shoe.bigShoe}
                HeroImge={HeroImge}
                setHeroImge={setHeroImge}
                
                />
            ))}
        </div>


    </div>
  )
}

export default Prueba


