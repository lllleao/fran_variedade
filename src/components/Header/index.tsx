import { HeaderContainer, NavBar } from './styles'

const Header = () => {
    return (
        <HeaderContainer>
            <div className="container">
                <NavBar>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#mugs">Canecas</a>
                        </li>
                        <li>
                            <a href="">Personalizavés</a>
                        </li>
                        <li>
                            <a href="">Acessórios</a>
                        </li>
                        <li>
                            <a href="">Carrinho</a>
                        </li>
                    </ul>
                </NavBar>
            </div>
        </HeaderContainer>
    )
}
export default Header
