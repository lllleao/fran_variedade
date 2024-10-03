import { useState } from 'react'
import { Arrow, MenuItems, NavBar } from './styles'

const MenuBarMob = () => {
    const [menuMobIsActive, setMenuMobIsActive] = useState(false)

    const handleMenuMob = () => {
        setMenuMobIsActive(!menuMobIsActive)
    }
    return (
        <>
            <Arrow>
                <div
                    className={`arrow ${menuMobIsActive ? 'arrow-is--active' : ''}`}
                    onClick={handleMenuMob}
                >
                    <span className="arrow-item arrow-one" />
                    <span className="arrow-item arrow-two" />
                    <span className="arrow-item arrow-three" />
                </div>
            </Arrow>
            <NavBar $menuMobIsActive={menuMobIsActive}>
                <nav className="nav-bar-mob">
                    <MenuItems>
                        <li className="nav-bar-mob-item">
                            <a className="nav-bar-mob-item-link" href="#">
                                Início
                            </a>
                        </li>
                        <li className="nav-bar-mob-item">
                            <a className="nav-bar-mob-item-link" href="#">
                                Personalizáveis
                            </a>
                        </li>
                        <li className="nav-bar-mob-item">
                            <a className="nav-bar-mob-item-link" href="#">
                                Acessórios
                            </a>
                        </li>
                        <li className="nav-bar-mob-item">
                            <a className="nav-bar-mob-item-link" href="#">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                        </li>
                    </MenuItems>
                </nav>
            </NavBar>
        </>
    )
}

export default MenuBarMob
