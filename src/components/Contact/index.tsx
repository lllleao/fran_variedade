import Links from '../Links'
import { ContactContainer } from './styles'

const Contact = () => {
    return (
        <ContactContainer>
            <h5>Não encontrou o que estava procurando?</h5>
            <p className="call-contact">
                Venha para nossas redes e nos envie a foto que você gostaria de
                personalizar seu presente!
            </p>
            <Links />
        </ContactContainer>
    )
}

export default Contact
