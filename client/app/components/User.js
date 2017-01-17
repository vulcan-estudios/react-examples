import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function User (props) {

  const { id, photo, name, className, ...rest } = props;
  const cls = classNames('user', className);

  const photoStyle = {
    height: '60px'
  };

  return (
    <div className={cls} data-id={id} {...rest}>
      <img src={photo} style={photoStyle} />
      {name}
    </div>
  );
}

User.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  photo: PropTypes.string,
  name: PropTypes.string,
};

User.defaultProps = {
  name: 'Desconocido'
};
