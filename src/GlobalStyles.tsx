import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #000000;
    --darkgrey: #878787;
    --darkblue: #3766c2;
    --red: #D93025;
    --green: #188038;
    --dark: #2e2e36;
    --grey2: #dbdbdb;
    --orange: #ff801a;
}
body {
    min-width: 100px;
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: var(--black);
    overflow-x: scroll;
    background: var(--white);
}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    } 

`;
