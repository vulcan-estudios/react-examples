import React from 'react';

function Title (props = {}) {

  const { children } = props;

  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}

export default Title;
