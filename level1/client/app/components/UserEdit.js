import React, { Component, PropTypes } from 'react';
import { Row, Column, Button } from 'react-foundation';
import classNames from 'classnames';
import uuid from 'uuid';

class UserEdit extends Component {

  constructor () {
    super(...arguments);
    this.handleChange = this.handleChange.bind(this);
  }

  render () {

    const { onChange, id, photo, name, isAdd, className, ...rest } = this.props;
    const cls = classNames('user-edit', className);
    const buttonText = isAdd ? 'Agregar' : 'Actualizar';

    return (
      <Row className={cls} data-id={id} {...rest}>
        <Column small={6} medium={5}>
          <input
            ref={r => (this.inputName = r)}
            type='text'
            placeholder='Nombre'
            defaultValue={name}
          />
        </Column>
        <Column small={6} medium={5}>
          <input
            ref={r => (this.inputPhoto = r)}
            type='text'
            placeholder='URL de fotografía'
            defaultValue={photo}
          />
        </Column>
        <Column small={12} medium={2}>
          <Button onClick={this.handleChange}>{buttonText}</Button>
        </Column>
      </Row>
    );
  }

  handleChange (event) {

    event.preventDefault();

    const name = this.inputName.value;
    const photo = this.inputPhoto.value;

    if (!name || !photo) return;

    const id = this.props.id || uuid.v4();
    const newUser = { id, name, photo };

    this.props.onChange(newUser);

    this.inputName.value = '';
    this.inputPhoto.value = '';
  }
}

UserEdit.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  photo: PropTypes.string,
  name: PropTypes.string,
  isAdd: PropTypes.bool
};

export default UserEdit;
