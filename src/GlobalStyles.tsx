import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: black;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;
