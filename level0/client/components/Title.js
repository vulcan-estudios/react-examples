// Esto es un componente sin estado, o stateless component de React. Es
// recomendado que siempre se traten de crear componentes de esta manera.

// El comportamiento de estos componentes sólo debe depender de sus propiedades
// recibidas.

import React, { PropTypes } from 'react';

function Title (props = {}) {

  const { className, children } = props;

  return (
    <header className={`header ${className}`}>
      <div className='row column'>
        <h1>{children}</h1>
      </div>
    </header>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default Title;
