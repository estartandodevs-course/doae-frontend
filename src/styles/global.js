import { createGlobalStyle, css } from 'styled-components';

// ================================================================
// * Estilização global que será aplicada em todas as páginas
// * Cuidado ao alterar, pois pode afetar o funcionamento de outras páginas
// ================================================================
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html,
    body {
      scroll-behavior: smooth;
      font-family: ${theme?.font?.family};
      height: 100vh;
      font-size: 62.5%;
      color: ${theme?.colors?.text};
      background-color: #f5f5f5;
    }
  `}
`;

export default GlobalStyles;
