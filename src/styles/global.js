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
      max-width: 100%;
      scroll-behavior: smooth;
      font-family: ${theme?.font?.family};
      font-size: 62.5%;
      font-size: 1rem;
      color: ${theme?.colors?.text};
      background-color: ${theme.colors.white};
    }
  `}
`;

export default GlobalStyles;
