import { FooterContainer } from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container footer">
                <ul className="footer__list">
                    <li className="footer__list__item">
                        <a href="#">Início</a>
                    </li>
                    <li className="footer__list__item">
                        <a href="#">Personalizáveis</a>
                    </li>
                    <li className="footer__list__item">
                        <a href="#">Acessório</a>
                    </li>
                    <li className="footer__list__item">
                        <a href="#">
                            {' '}
                            <i className="fa-solid fa-cart-shopping" />
                        </a>
                    </li>
                </ul>
                <p className="footer__copy">
                    2024 - &copy; Fran Variedades - Todos os direitos reservados
                </p>
            </div>
        </FooterContainer>
    )
}

export default Footer
