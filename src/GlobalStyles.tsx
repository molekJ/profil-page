import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

    --white: #ffffff;
    --black: #000000;
    --lightgrey: #efefef;
    --grey: #f9f9f9;
    --grey2: #dbdbdb;
    --darkgrey: #878787;
    --darkgrey2: #787878;
    --darkgrey3: #212121;
    --orange: #ff801a;
    --lightorange: #ffc79a;
    --lightgreen: #adbb0c;
    --blue: #95d0eb;
    --darkblue: #3766c2;
    --dark: #2e2e36;
    --aqua: #01BC9A;
    --red: #D93025;
    --green: #188038;
}

body {
    min-width: 100px;
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    letter-spacing: 2px;
    font-weight: 300;
 
    overflow-x: scroll;
    background: var(--dark);
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

`;
