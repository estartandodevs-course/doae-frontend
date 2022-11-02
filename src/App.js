import routes from './routes/index';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

// ========================================================================
// * É através do ThemeProvider que todo e qualquer componente / template terá acesso à folha de estilização definida pelo designer
// * O GlobalStyles é um componente que renderiza as fontes e outras configurações globais
// * O RouterProvider é o responsável por renderizar as rotas e redirecionar o usuário para a página correta

// * Caso queira inserir mais algum Provider, será nessa página que você o fará
// ========================================================================

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
