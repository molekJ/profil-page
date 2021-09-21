import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

    --lightgrey: #efefef;
    --grey: #f9f9f9;
    --grey2: #dbdbdb;
    --darkgrey: #878787;
    --darkgrey2: #787878;
    --orange: #ff801a;
    --lightorange: #ffc79a;
    --lightgreen: #adbb0c;
    --blue: #95d0eb
    
}

body {
    min-width: 100px;
    font-family: 'Rubik', sans-serif;
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

`;
