import { HeroContainer } from './styles'
import logo from '../../assets/logo.png'
const Hero = () => {
    return (
        <HeroContainer id="home">
            <div className="container">
                <h1>
                    <img alt="Fran Variedades" srcSet={logo} />
                </h1>
                <h2>
                    Celebre cada ocasião com presentes que falam ao coração!
                </h2>
                <a href="#mugs">
                    <i className="fa-solid fa-chevron-down"></i>
                </a>
            </div>
        </HeroContainer>
    )
}

export default Hero
