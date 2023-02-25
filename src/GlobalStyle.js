import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        /* outline: 1px solid red; */
    }
    body{
        height: 100vh;
        overflow: hidden;
        /* background-color: red; */
        /* background-color: #000;
        color: white; */
    }
`;

export default GlobalStyle;
