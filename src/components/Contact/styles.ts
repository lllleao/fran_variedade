import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'

export const ContactContainer = styled.section`
    padding: 6rem 0;
    text-align: center;

    h5 {
        font-size: 2rem;
    }

    p {
        font-size: 1.5rem;
    }
`
export const ButtonZap = styled(ButtonContainer)`
    background-color: green;
    font-size: 1.5rem;

    &:hover {
        background-color: #2bb02b;
    }
`
export const SocialLinks = styled.ul`
    margin: 0 auto;

    a {
        text-decoration: none;

        & .icon .fa-brands {
            color: #eee;
        }

        &:nth-child(1) .icon {
            background-color: #da1a44;
        }

        &:nth-child(2) .icon {
            background-color: #333;
        }

        &:nth-child(3) .icon {
            background-color: #198cce;
        }
    }
`
