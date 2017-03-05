import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function User (props) {

  const { onEdit, onRemove, id, photo, name, className, ...rest } = props;
  const cls = classNames('user', className);

  const edit = (event) => {
    event.preventDefault();
    if (onEdit) onEdit(id);
  };

  const remove = (event) => {
    event.preventDefault();
    if (onRemove) onRemove(id);
  };

  return (
    <div className={cls} data-id={id} {...rest}>
      <img src={photo} />
      <p>
        {name}
        <br />
        <small>
          <i>
            <a href='#' onClick={edit}>Editar</a>
            {' - '}
            <a href='#' onClick={remove}>Remover</a>
          </i>
        </small>
      </p>
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
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
};

User.defaultProps = {
  name: 'Desconocido'
};
