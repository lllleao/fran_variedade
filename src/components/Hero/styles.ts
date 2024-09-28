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
            width: 300px;
            /* margin-bottom: 3rem; */
            margin-right: 2rem;
        }

        h2 {
            width: 50%;
            text-align: center;
            font-weight: normal;
            text-shadow: 3px 3px 5px #000;
            font-size: 2rem;
            letter-spacing: 3px;
            line-height: 3rem;
        }

        i {
            font-size: 2rem;
            cursor: pointer;
            animation: arrowUpDown 0.5s ease-in infinite alternate;
        }
    }
`
