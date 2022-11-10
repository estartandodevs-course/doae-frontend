import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// ==========================================================================================================
// * Esse arquivo é o ponto de entrada da aplicação, geralmente são em poucas situações que se mexe nele
// * Caso queira inserir mais algum Provider, insira no arquivo App.jsx
// ==========================================================================================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
