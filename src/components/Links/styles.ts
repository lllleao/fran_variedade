import styled from 'styled-components'

export const LinksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

    .social-links__item {
        &__link {
            text-decoration: none;
            display: inline-block;
            width: 60px;
            height: 60px;
            background-color: #eee;
            border-radius: 50px;
            overflow: hidden;
            transition: width 0.3s;

            .icon-container {
                display: inline-block;
                width: 60px;
                height: 60px;
                border-radius: 50px;
                text-align: center;
                font-size: 25px;
                line-height: 60px;
                transition: background-color 0.3s;

                .icon {
                    color: #000;
                    transition: color 0.3s;
                    width: 60px;
                    height: 60px;
                    border-radius: 50px;
                    border: 1px solid #fff;
                    line-height: 60px;
                }
            }

            .icon-text {
                color: #000;
                margin-bottom: 2rem;
                font-size: 1.3rem;
                margin-left: 0.7rem;
            }
        }

        &:nth-child(1):hover {
            .social-links__item__link {
                width: 200px;
            }
            .icon-container {
                background-color: #da1a44;
                .icon {
                    color: #fff;
                }
            }
        }

        &:nth-child(2):hover {
            .social-links__item__link {
                width: 200px;
            }
            .icon-container {
                background-color: green;
                .icon {
                    color: #fff;
                }
            }
        }

        @media (max-width: 425px) {
            &__link {
                width: 200px;
            }

            &:nth-child(1) {
                .icon-container {
                    background-color: #da1a44;
                    .icon {
                        color: #fff;
                    }
                }
            }

            &:nth-child(2) {
                .icon-container {
                    background-color: green;
                    .icon {
                        color: #fff;
                    }
                }
            }
        }
    }
`
