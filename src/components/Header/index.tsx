import { useState } from 'react'
import { HeaderContainer, MugsDrop, NavBar } from './styles'

const Header = () => {
    const [isActive, setIsActive] = useState({
        home: true,
        mugs: false,
        custom: false,
        accessories: false
    })

    const handleActive = (element: string) => {
        if (element === 'home') {
            setIsActive({
                home: true,
                mugs: false,
                custom: false,
                accessories: false
            })
        } else if (element === 'mugs') {
            setIsActive({
                home: false,
                mugs: true,
                custom: false,
                accessories: false
            })
        } else if (element === 'custom') {
            setIsActive({
                home: false,
                mugs: false,
                custom: true,
                accessories: false
            })
        } else {
            setIsActive({
                home: false,
                mugs: false,
                custom: false,
                accessories: true
            })
        }
    }
    return (
        <HeaderContainer>
            <div className="container">
                <NavBar>
                    <ul>
                        <li>
                            <a
                                onClick={() => handleActive('home')}
                                className={`${isActive.home ? 'is-active' : ''} item-nav`}
                                href="#home"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <MugsDrop
                                href="#mugs"
                                onClick={() => handleActive('mugs')}
                                className={`${isActive.mugs ? 'is-active' : ''} item-nav`}
                            >
                                Canecas
                                <i className="fa-solid fa-chevron-down"></i>
                                <nav>
                                    <ul className="mug-drop">
                                        <li>
                                            <a href="#">Dia dos professores</a>
                                        </li>
                                        <li>
                                            <a href="#">Dia dos professores</a>
                                        </li>
                                        <li>
                                            <a href="#">Dia dos professores</a>
                                        </li>
                                    </ul>
                                </nav>
                            </MugsDrop>
                        </li>
                        <li>
                            <a
                                href="#custom"
                                onClick={() => handleActive('custom')}
                                className={`${isActive.custom ? 'is-active' : ''} item-nav`}
                            >
                                Personalizavés
                            </a>
                        </li>
                        <li>
                            <a
                                href="#accessories"
                                onClick={() => handleActive('accessories')}
                                className={`${isActive.accessories ? 'is-active' : ''} item-nav`}
                            >
                                Acessórios
                            </a>
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
