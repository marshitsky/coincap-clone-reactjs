import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";
import { darkTheme, lightTheme } from "./theme";
import { Colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    ${resetCSS};
    html[theme="dark"]{
        ${darkTheme}
    }
    html[theme="light"]{
        ${lightTheme}
    }
    #root {
        background: ${Colors.PRIMARY};
    }
`;
