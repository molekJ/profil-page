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
    
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

`;
