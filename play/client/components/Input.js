import React, { Component } from 'react';

class Input extends Component {

  constructor () {
    super(...arguments);
    this.handleEnter = this.handleEnter.bind(this);
    this.create = this.create.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  render () {
    return (
      <div>
        <input
          ref={el => (this.input = el)}
          onKeyPress={this.handleEnter}
          placeholder='Enter para crear todo...'
        />
        <button onClick={this.handleButton}>Crear</button>
      </div>
    );
  }

  handleEnter (event) {
    if (event.which === 13) {
      this.create();
    }
  }

  handleButton () {
    this.create();
  }

  create () {

    const { onCreate } = this.props;
    const value = this.input.value;

    if (value && onCreate) {
      onCreate(value);
    }

    this.input.value = '';
  }

}

export default Input;
