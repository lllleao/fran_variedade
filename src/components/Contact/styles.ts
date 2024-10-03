import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'

export const ContactContainer = styled.section`
    padding: 6rem 0;

    h5 {
        text-align: center;
        font-size: 2rem;
    }

    .call-contact {
        text-align: center;
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
    margin-top: 2rem;
    div {
        display: inline-block;
    }
    .link {
        text-decoration: none;

        &:hover .icon .fa-brands {
            color: #eee;
        }

        &:nth-child(1):hover .icon-text {
            color: #da1a44;
        }

        &:nth-child(2):hover .icon-text {
            color: #333;
        }

        &:nth-child(3):hover .icon-text {
            color: #198cce;
        }

        &:nth-child(1):hover .icon {
            background-color: #da1a44;
        }

        &:nth-child(2):hover .icon {
            background-color: #333;
        }

        &:nth-child(3):hover .icon {
            background-color: #198cce;
        }

        &:hover .tell__social-links__link {
            width: 200px;
        }

        .tell__social-links__link {
            display: inline-block;
            margin: 0 15px;
            width: 60px;
            height: 60px;
            background-color: #eee;
            border-radius: 50px;
            overflow: hidden;
            transition: all 0.3s ease-in-out;

            .icon {
                display: inline-block;
                width: 60px;
                height: 60px;
                border-radius: 50px;
                text-align: center;
                transition: all 0.3s ease-in-out;

                .fa-brands {
                    border: 1px solid #eee;
                    width: 60px;
                    height: 60px;
                    border-radius: 50px;
                    font-size: 25px;
                    line-height: 60px;
                    color: #000;
                    transition: all 0.3s ease-in-out;
                }
            }

            .icon-text {
                font-size: 20px;
                line-height: 60px;
                margin-left: 10px;
                font-family: sans-serif;
                transition: all 0.3s ease-in-out;
            }
        }
    }
`
