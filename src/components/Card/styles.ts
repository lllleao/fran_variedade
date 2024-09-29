import styled from 'styled-components'

export const CardContainer = styled.div`
    padding: 1rem;
    max-width: 300px;
    border-radius: 1rem;
    height: max-content;
    position: relative;
    border: 2px solid #fff;
    transition: border-color 0.5s;

    &:hover {
        border-color: #fa8d00;
    }

    img {
        width: 100%;
        cursor: zoom-in;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }

    .price {
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        h5 {
            font-weight: normal;
            margin-bottom: 0.5rem;
        }
    }

    .desc {
        text-align: center;
        letter-spacing: 2px;
    }
`
