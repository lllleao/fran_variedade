import styled from 'styled-components'

type Props = {
    $zoom: boolean
}

export const OverlayContainer = styled.div<Props>`
    display: ${({ $zoom }) => ($zoom ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 5;

    div {
        max-width: 600px;

        .header-overlay {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            h4 {
                margin: 0;
            }

            i {
                cursor: pointer;
                padding: 8px;
            }
        }
        img {
            width: 100%;
            border: 2px solid #fff;
            border-radius: 0.5rem;
        }
    }
`
