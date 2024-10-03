import { ButtonZap, ContactContainer, SocialLinks } from './styles'

const Contact = () => {
    return (
        <ContactContainer>
            <h5>Não encontrou o que estava procurando?</h5>
            <p>
                Nos envie a foto que você gostaria de personalizar seu presente!
            </p>
            <ButtonZap>CHAMA NO WPP</ButtonZap>
            <SocialLinks>
                <a
                    href="http://instagram.com/lucas.lllll"
                    target="_blank"
                    rel="noreferrer"
                >
                    <li className="tell__social-links__link">
                        <div className="icon">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <span className="icon-text">Instagram</span>
                    </li>
                </a>
                <a
                    href="https://github.com/lllleao"
                    target="_blank"
                    rel="noreferrer"
                >
                    <li className="tell__social-links__link">
                        <div className="icon">
                            <i className="icon fa-brands fa-github"></i>
                        </div>
                        <span className="icon-text">Github</span>
                    </li>
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-le%C3%A3o-lima/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <li className="tell__social-links__link">
                        <div className="icon">
                            <i className="icon fa-brands fa-linkedin"></i>
                        </div>
                        <span className="icon-text">Linkedin</span>
                    </li>
                </a>
            </SocialLinks>
        </ContactContainer>
    )
}

export default Contact
