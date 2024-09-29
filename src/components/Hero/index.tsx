import { HeroContainer } from './styles'
import cardeneta from '../../assets/cardeneta.jpeg'
import mug from '../../assets/mug-hero.jpeg'
import mugAlmof from '../../assets/mug-almof.jpeg'
import { useEffect, useState } from 'react'
const Hero = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
    }, [])
    return (
        <HeroContainer id="home">
            <div className="container">
                <h1 className={active ? 'active' : ''}>
                    <img alt="Fran Variedades" srcSet={mug} />
                    <img alt="Fran Variedades" srcSet={cardeneta} />
                    <img alt="Fran Variedades" srcSet={mugAlmof} />
                </h1>
                <h2>
                    Celebre cada ocasião com presentes que falam ao coração!
                </h2>
                <a href="#mugs">
                    <i className="fa-solid fa-chevron-down" />
                </a>
            </div>
        </HeroContainer>
    )
}

export default Hero
