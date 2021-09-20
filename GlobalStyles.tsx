import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primart: yellow;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;
