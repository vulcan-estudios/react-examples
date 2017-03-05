// Este contenedor acepta hijos desde el router.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from './Title';
import Menu from './Menu';

class App extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    return (
      <div>
        <Title />
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
