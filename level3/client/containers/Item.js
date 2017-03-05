import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function mapStateToProps (state) {
  return {
    movies: state.movies
  };
}

class ItemContainer extends Component {

  constructor () {
    super(...arguments);
  }

  componentDidMount () {

    const { movies, params, router } = this.props;
    const { itemId } = params;
    const movie = movies.find(item => item.id === itemId);

    // Si la película no se encuentra con el ID proveido en la ruta,
    // devuelva al usuario al home.
    if (!movie) {
      router.push('/');
    }
  }

  render () {

    const { movies, params } = this.props;
    const { itemId } = params;

    const item = movies.find(movie => movie.id === itemId);

    // El item no fue encontrado.
    if (!item) {
      return <div></div>;
    }

    return (
      <div className='row column'>
        <h3>{item.name}</h3>
        <img src={item.photo} style={{height: '300px'}} />
        <p>{item.description}</p>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(ItemContainer));
