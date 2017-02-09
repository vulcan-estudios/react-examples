import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function User (props) {

  const { onEdit, id, photo, name, className, ...rest } = props;
  const cls = classNames('user', className);

  const photoStyle = {
    height: '60px'
  };

  const edit = (event) => {
    event.preventDefault();
    if (onEdit) onEdit(id);
  };

  return (
    <div className={cls} data-id={id} {...rest}>
      <img src={photo} style={photoStyle} />
      {name} <small><i><a href='#' onClick={edit}>Editar</a></i></small>
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
  onEdit: PropTypes.func
};

User.defaultProps = {
  name: 'Desconocido'
};
