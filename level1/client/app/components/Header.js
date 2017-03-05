import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import classNames from 'classnames';

export default function Header (props) {

  const { className, children, ...rest } = props;
  const cls = classNames('header', className);

  return (
    <header className={cls} {...rest}>
      <Row isColumn={true}>
        <h1>{children}</h1>
      </Row>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.any
};
