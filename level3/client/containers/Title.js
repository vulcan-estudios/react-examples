import React, { Component } from 'react';
import { connect } from 'react-redux';

class TitleContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    return (
      <header className='header'>
        <div className='row column'>
          <h1>Premios Oscar</h1>
        </div>
      </header>
    );
  }
}

export default connect()(TitleContainer);
