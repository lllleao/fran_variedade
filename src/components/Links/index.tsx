import { LinksContainer } from './styles'

const Links = () => {
    return (
        <LinksContainer>
            <li className="social-links__item">
                <a
                    href="instagram.com/franvariedades2016/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-links__item__link"
                >
                    <div className="icon-container">
                        <i className="icon fa-brands fa-instagram" />
                    </div>
                    <span className="icon-text">Instagram</span>
                </a>
            </li>
            <li className="social-links__item">
                <a
                    href="https://w.app/Fldmveis"
                    target="_blank"
                    rel="noreferrer"
                    className="social-links__item__link"
                >
                    <div className="icon-container">
                        <i className="icon fa-brands fa-whatsapp" />
                    </div>
                    <span className="icon-text">What&apos;s App</span>
                </a>
            </li>
        </LinksContainer>
    )
}

export default Links
