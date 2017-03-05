import React, { Component, PropTypes } from 'react';
import { Row, Column, Button } from 'react-foundation';
import classNames from 'classnames';
import uuid from 'uuid';

class UserEdit extends Component {

  constructor () {
    super(...arguments);

    this.state = {
      name: this.props.name,
      photo: this.props.photo,
    };

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render () {

    const { onChange, id, photo, name, isAdd, className, ...rest } = this.props;
    const cls = classNames('user-edit', className);
    const buttonText = isAdd ? 'Agregar' : 'Actualizar';

    return (
      <div className={cls} data-id={id} {...rest}>
        <Row>
          <Column small={6} medium={5}>
            <input
              ref={r => (this.inputName = r)}
              type='text'
              placeholder='Nombre'
              value={this.state.name}
              onChange={this.onChange}
            />
          </Column>
          <Column small={6} medium={5}>
            <input
              ref={r => (this.inputPhoto = r)}
              type='text'
              placeholder='URL de fotografía'
              value={this.state.photo}
              onChange={this.onChange}
            />
          </Column>
          <Column small={12} medium={2}>
            <Button onClick={this.handleChange}>{buttonText}</Button>
          </Column>
        </Row>
        <Row isColumn={true}>
          { this.state.photo && <img src={this.state.photo} alt={this.state.name} /> }
        </Row>
      </div>
    );
  }

  onChange () {
    const name = this.inputName.value;
    const photo = this.inputPhoto.value;
    this.setState({ name, photo });
  }

  handleChange (event) {

    event.preventDefault();

    const { name, photo } = this.state;

    if (!name || !photo) return;

    const id = this.props.id || uuid.v4();
    const newUser = { id, name, photo };

    this.props.onChange(newUser);

    this.setState({
      name: '',
      photo: '',
    });
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

UserEdit.defaultProps = {
  name: '',
  photo: ''
};

export default UserEdit;
