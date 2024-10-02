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
        align-items: center;

        .item-nav {
            margin-right: 1rem;

            .item-nav-link {
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
export const MugsDrop = styled.div<{ $newHeight: number | undefined }>`
    /* display: inline-block; */
    /* height: min-content; */

    i {
        margin-left: 0.5rem;
        font-size: 1rem;
    }

    .nav-menu-drop {
        .nav-menu-drop-list {
            overflow: hidden;
            text-align: center;
            position: absolute;
            top: 3rem;
            left: 0;
            right: 0;
            background-color: #f04a6a;
            display: flex;
            flex-direction: column;
            height: 0;
            transition:
                height 0.3s,
                overflow 0.3s;
            li {
                width: 100%;
                a {
                    display: block;
                    width: 100%;
                    text-decoration: none;
                    padding: 0.5rem;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: #c51d3e;
                    }
                }
            }
            &--is-open {
                height: ${({ $newHeight }) => $newHeight}px;
                transition:
                    height 0.3s,
                    overflow 0.3s;
            }
        }
    }
`
