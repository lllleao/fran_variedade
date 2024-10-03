import Contact from '../../components/Contact'
import CustomSection from '../../components/CustomSection'
import Hero from '../../components/Hero'
import { MainContainer } from './styles'

const Main = () => {
    return (
        <MainContainer>
            <Hero />
            <div className="container">
                <CustomSection
                    idSection="mugs"
                    title="Canecas únicas para momentos especiais!"
                />
                <CustomSection
                    idSection="cushion"
                    title="Encontre seu personalizável especial"
                />
                <Contact />
            </div>
        </MainContainer>
    )
}

export default Main
