import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Exo 2';
        color: #fff;
    }

    .container {
        max-width: 1024px; //1344px
        width: 90%;
        margin: 0 auto;
    }

    html {
        scroll-behavior: smooth;
    }

    @keyframes arrowUpDown {
        from {
            transform: translateY(0);
        } to {
            transform: translateY(50px);
        }
    }
`

export default GlobalStyle
