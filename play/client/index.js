import React from 'react';
import { render } from 'react-dom';

function App () {
  return (
    <main>
      <h1>React Play</h1>
      <p>Playground para aprender <b>React</b>.</p>
    </main>
  );
}

render(<App />, document.querySelector('#app'));
