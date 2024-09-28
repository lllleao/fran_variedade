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
    &:hover .front {
        opacity: 0;
    }
    &:hover .back {
        opacity: 1;
    }

    .front,
    .back {
        transition: opacity 0.5s ease;
    }
    .front {
        opacity: 1;
    }

    .back {
        top: 1rem;
        left: 0;
        position: absolute;
        opacity: 0;
    }
    img {
        width: 100%;
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

        span {
            /* font-size: 1rem; */
        }
    }

    .desc {
        text-align: center;
        letter-spacing: 2px;
    }
`
