// Usualmente el modulo principal inicializa un render inicial del contenedor
// principal de React.

import React from 'react';
import { render } from 'react-dom';
import App from 'client/containers/App';

// Se instancia al contenedor principal.
const app = <App />;

// Se selecciona el elemento raíz al cual montar el contenedor.
const root = document.querySelector('#app');

// Se renderiza.
render(app, root);
