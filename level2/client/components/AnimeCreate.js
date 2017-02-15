import React, { Component, PropTypes } from 'react';
import { Row, Column, Button } from 'react-foundation';
import classnames from 'classnames';

class AnimeCreate extends Component {

  constructor () {

    super(...arguments);

    this.state = {
      name: '',
      image: '',
      url: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  render () {

    const { onCreate, className, ...rest } = this.props;
    const cls = classnames(className);

    return (
      <Row className={cls} {...rest}>
        <Column small={6} medium={3}>
          <input
            type='text'
            placeholder='Nombre'
            maxLength='255'
            value={this.state.name}
            ref={el => (this.inputName = el)}
            onChange={this.handleChange}
          />
        </Column>
        <Column small={6} medium={3}>
          <input
            type='url'
            placeholder='Imagen'
            maxLength='255'
            value={this.state.image}
            ref={el => (this.inputImage = el)}
            onChange={this.handleChange}
          />
        </Column>
        <Column small={6} medium={3}>
          <input
            type='url'
            placeholder='URL'
            maxLength='255'
            value={this.state.url}
            ref={el => (this.inputURL = el)}
            onChange={this.handleChange}
          />
        </Column>
        <Column small={6} medium={3}>
          <Button onClick={this.handleCreate}>Crear</Button>
        </Column>
      </Row>
    );
  }

  handleChange () {
    this.setState({
      name: this.inputName.value,
      image: this.inputImage.value,
      url: this.inputURL.value,
    });
  }

  handleCreate () {

    const newItem = { ...this.state };

    if (this.props.onCreate) {
      this.props.onCreate(newItem);
    }

    this.setState({
      name: '',
      image: '',
      url: '',
    });
  }
}

AnimeCreate.propTypes = {
  children: PropTypes.any,
  onCreate: PropTypes.func
};

export default AnimeCreate;
