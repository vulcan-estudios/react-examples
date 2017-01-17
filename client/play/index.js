import React from 'react';
import { render } from 'react-dom';

const App = function () {
  return (
    <div>Espacio para jugar con React</div>
  );
};

const root = document.querySelector('#app');

render(<App />, root);
