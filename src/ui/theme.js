import { css } from "styled-components";

const lightTheme = css`
  --bg: #fff;
  --linear-bg: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))
    rgb(255, 255, 255);
  --table-bg: #fff;
  --font: #000;
`;
const darkTheme = css`
  --bg: rgb(37, 37, 37);
  --linear-bg: linear-gradient(to right, rgb(66, 66, 66), rgb(66, 66, 66))
    rgb(54, 54, 54);
  --table-bg: rgb(54, 54, 54);
  --font: #fff;
`;

export { lightTheme, darkTheme };
