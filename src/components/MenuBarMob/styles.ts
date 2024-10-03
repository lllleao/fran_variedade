import styled from 'styled-components'

export const NavBar = styled.header<{ $menuMobIsActive: boolean }>`
    background-color: #a9374c;
    position: fixed;
    inset: 0;
    z-index: 3;
    height: 100vh;
    width: ${({ $menuMobIsActive }) => ($menuMobIsActive ? '50vw' : '0')};
    overflow: hidden;
    transition: width 0.3s;
`

export const MenuItems = styled.ul`
    .nav-bar-mob-item {
        width: 100%;
        margin-bottom: 0.5rem;
        .nav-bar-mob-item-link {
            display: block;
            padding: 1rem;
            text-decoration: none;
        }
        &:nth-child(1) {
            margin-top: 4.5rem;
            background-color: #f58171;
            text-shadow: 3px 3px 5px #000;
        }
    }
`
export const Arrow = styled.div`
    cursor: pointer;
    position: fixed;
    left: 0.5rem;
    top: 0.5rem;
    z-index: 5;
    .arrow {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f58171;
        width: 50px;
        height: 50px;
        border-radius: 12%;
        padding-top: 10px;

        .arrow-item {
            display: block;
            background-color: #fff;
            width: 28px;
            height: 5px;
            border-radius: 8px;
            transition:
                transform 0.3s,
                opacity 0.3s;

            &:nth-child(2) {
                margin: 7px 0;
            }
        }

        &-is--active {
            .arrow-item {
                &:nth-child(1) {
                    transform: translate(0px, 13px) rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    transform: translate(-1px, -11px) rotate(-47deg);
                }
            }
        }
    }
    @media (min-width: 483px) {
        display: none;
    }
`
