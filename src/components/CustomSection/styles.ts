import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'

export const CustomSectionContainer = styled.section`
    padding-top: 8rem;
    h3 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: normal;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }

    .mugs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }
    & > ${ButtonContainer} {
        margin-left: 2rem;
    }
`
