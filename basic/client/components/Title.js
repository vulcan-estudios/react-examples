import React, { PropTypes } from 'react';

function Title (props = {}) {

  const { className, children } = props;

  return (
    <header className={className}>
      <h1>{children}</h1>
    </header>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default Title;
