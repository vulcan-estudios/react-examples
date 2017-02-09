import React from 'react';
import { render } from 'react-dom';
import App from 'client/containers/App';

const app = <App />;
const root = document.querySelector('#app');

render(app, root);
