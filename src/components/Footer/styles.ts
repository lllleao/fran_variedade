import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #d4695a;
    .footer {
        padding: 2rem 0 0.5rem;
        &__list {
            &__item {
                width: 200px;
                /* margin-bottom: 1rem; */
                padding: 0.5rem;
                cursor: pointer;
                a {
                    display: inline-block;
                    width: 100%;
                    text-decoration: none;
                }

                &:hover {
                    background-color: #a8364b;
                }
            }
        }

        &__copy {
            text-align: center;
        }
    }
`
