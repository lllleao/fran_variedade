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
            cursor: pointer;
            padding: 0.5rem 1rem;
            text-shadow: 3px 3px 5px #000;

            &:nth-child(1) {
                border-bottom: 2px solid #ffadad;
            }

            a {
                text-decoration: none;
            }
        }
    }
`
