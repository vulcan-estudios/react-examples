import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

function mapStateToProps (state) {
  return {
    movies: state.movies
  };
}

class ListContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    const { movies } = this.props;

    const listElements = movies.map(item => {
      return (
        <li key={item.id}>
          <b><Link to={`/item/${item.id}`}>{item.name}</Link></b>
          <small>{item.description}</small>
        </li>
      );
    });

    return (
      <div className='row column'>
        <ul className='movies'>{listElements}</ul>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(ListContainer));
