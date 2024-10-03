import { useRef, useState } from 'react'
import { MenuBarContainer, MugsDrop, NavBar } from './styles'

type MenuDropProps = {
    isOpen: boolean
    menuHeight?: number
}

const MenuBar = () => {
    const menuDropRef = useRef<HTMLUListElement>(null)
    const [isActive, setIsActive] = useState({
        home: true,
        mugs: false,
        custom: false,
        accessories: false
    })
    const [menuIsOpen, setMenuIsOpen] = useState<MenuDropProps>({
        isOpen: false,
        menuHeight: 0
    })

    const getHeighMenu = () => {
        if (menuDropRef.current) {
            return menuDropRef.current.scrollHeight
        }
    }

    const handleActive = (element: string) => {
        if (element === 'home') {
            setIsActive({
                home: true,
                mugs: false,
                custom: false,
                accessories: false
            })
            setMenuIsOpen({
                isOpen: false,
                menuHeight: 0
            })
        } else if (element === 'custom') {
            setIsActive({
                home: false,
                mugs: true,
                custom: false,
                accessories: false
            })
            setMenuIsOpen({
                isOpen: !menuIsOpen.isOpen,
                menuHeight: getHeighMenu()
            })
            console.log('ooiioio')
        } else if (element === 'acess') {
            setIsActive({
                home: false,
                mugs: false,
                custom: true,
                accessories: false
            })
            setMenuIsOpen({
                isOpen: false,
                menuHeight: 0
            })
        } else {
            setIsActive({
                home: false,
                mugs: false,
                custom: false,
                accessories: true
            })
            setMenuIsOpen({
                isOpen: false,
                menuHeight: 0
            })
        }
    }
    return (
        <MenuBarContainer>
            <div className="container">
                <NavBar>
                    <ul>
                        <li className="item-nav">
                            <a
                                onClick={() => handleActive('home')}
                                className={`${isActive.home ? 'is-active' : ''} item-nav-link`}
                                href="#home"
                            >
                                Início
                            </a>
                        </li>
                        <li className="item-nav">
                            <MugsDrop
                                onClick={() => handleActive('custom')}
                                className={`${isActive.mugs ? 'is-active' : ''} item-nav-link`}
                                $newHeight={menuIsOpen.menuHeight}
                            >
                                Personalizáveis
                                <i className="fa-solid fa-chevron-down"></i>
                                <nav className="nav-menu-drop">
                                    <ul
                                        className={`nav-menu-drop-list ${menuIsOpen.isOpen ? 'nav-menu-drop-list--is-open' : ''}`}
                                        ref={menuDropRef}
                                    >
                                        <li>
                                            <a href="#mugs">Canecas</a>
                                        </li>
                                        <li>
                                            <a href="#cushion">Almofadas</a>
                                        </li>
                                        <li>
                                            <a href="#">Camisas</a>
                                        </li>
                                    </ul>
                                </nav>
                            </MugsDrop>
                        </li>
                        <li className="item-nav">
                            <a
                                href="#custom"
                                onClick={() => handleActive('acess')}
                                className={`${isActive.custom ? 'is-active' : ''} item-nav-link`}
                            >
                                Acessórios
                            </a>
                        </li>
                        <li className="item-nav">
                            <a href="#">
                                <i className="fa-solid fa-cart-shopping" />
                            </a>
                        </li>
                    </ul>
                </NavBar>
            </div>
        </MenuBarContainer>
    )
}

export default MenuBar
