import styled from 'styled-components'

export const HeroContainer = styled.section`
    width: 100%;
    .container {
        padding-top: 7rem;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
        h1 {
            position: relative;
            margin-right: 12rem;

            img {
                position: absolute;
                border-radius: 1rem;
                max-width: 200px;
                border: 2px solid #fff;
                transition: transform 2s 1s;
            }

            &.active {
                img {
                    &:nth-child(1) {
                        transform: rotate(-30deg) translateX(-100%);
                    }
                    &:nth-child(2) {
                        /* transform: rotate(30deg) translateX(100%); */
                        z-index: 2;
                    }
                    &:nth-child(3) {
                        transform: rotate(30deg) translateX(100%);
                        z-index: 1;
                    }
                }
            }
        }

        h2 {
            width: 50%;
            text-align: center;
            font-weight: normal;
            text-shadow: 3px 3px 5px #000;
            font-size: 2rem;
            letter-spacing: 3px;
            line-height: 3rem;
            margin-top: 20rem;
        }

        i {
            font-size: 2rem;
            cursor: pointer;
            animation: arrowUpDown 0.5s ease-in infinite alternate;
        }
    }
`
