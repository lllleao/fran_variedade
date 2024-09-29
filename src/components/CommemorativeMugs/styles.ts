import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'

export const CommemorativeContainer = styled.div`
    margin-top: 2rem;
    h4 {
        font-weight: normal;
        font-size: 1.3rem;
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
