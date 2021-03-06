import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    font-size: 1.1.rem;
}

html {
    @media (max-width: 1500px) {
        font-size: 90%;
    }
}

body {
    background: #1b1b1b;
    overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover {
        background-color: #23d997;
        color: white;
    }

    @media (max-width: 1500px) {
        margin-bottom: 3rem;
    }

}

h2 {
    font-weight: lighter;
    font-size: 4rem;
}

h3 {
        color: white;
}

h4 {
    font-size: 2rem;
    font-weight: bold;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

span {
    font-weight: bold;
    color: #23d997;
}

`;

export default GlobalStyle;
