import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #b6465a;
    position: fixed;
    z-index: 4;
    padding: 1rem 0;
    width: 100%;
    .container {
        display: flex;
        justify-content: center;
    }
    img {
        width: 90px;
    }
`
export const NavBar = styled.nav`
    ul {
        display: flex;

        li {
            margin-right: 1rem;
            /* padding: 0.5rem 1rem; */

            a {
                position: relative;
                text-decoration: none;
                cursor: pointer;
                padding: 0.5rem 1rem;
                text-shadow: 3px 3px 5px #000;
                &::after {
                    transition: width 0.3s;
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 2px;
                    width: 0;
                    background-color: #ffadad;
                }

                &.is-active::after {
                    width: 100%;
                }
            }
        }
    }
`
