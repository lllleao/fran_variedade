import Card from '../Card'
import mugProf1 from '../../assets/mugs_prof/mugprof1.png'
import mugProf2 from '../../assets/mugs_prof/mugprof2.png'
import mugProf3 from '../../assets/mugs_prof/mugprof3.png'
import mugProf4 from '../../assets/mugs_prof/mugprof4.png'
import mugProf5 from '../../assets/mugs_prof/mugprof5.png'
import mugProf6 from '../../assets/mugs_prof/mugprof6.png'
import { CustomSectionContainer } from './styles'

type Props = {
    title: string
    idSection: string
}

const CustomSection = ({ title, idSection }: Props) => {
    return (
        <CustomSectionContainer id={idSection}>
            <h3>{title}</h3>
            <div className="mugs">
                <Card
                    img={mugProf1}
                    description="Caneca de porcelana 325ml"
                    title="Dia dos professores"
                    price="23,99"
                />
                <Card
                    img={mugProf2}
                    description="Caneca de porcelana 325ml"
                    title="Dia dos professores"
                    price="23,99"
                />
                <Card
                    img={mugProf3}
                    description="Caneca de porcelana 325ml"
                    title="Dia dos professores"
                    price="23,99"
                />
                <Card
                    img={mugProf4}
                    description="Caneca de porcelana 325ml"
                    title="Dia dos professores"
                    price="23,99"
                />
                <Card
                    img={mugProf5}
                    description="Caneca de porcelana 325ml"
                    title="Dia dos professores"
                    price="23,99"
                />
                <Card
                    img={mugProf6}
                    description="Caneca de porcelana 325ml"
                    title="Dia dos professores"
                    price="23,99"
                />
            </div>
        </CustomSectionContainer>
    )
}

export default CustomSection
