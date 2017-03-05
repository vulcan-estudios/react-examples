import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MenuContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    return (
      <nav className='nav'>
        <div className='row column'>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/winners'>Ganadores del Oscar</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect()(MenuContainer);
