import React, { Component } from 'react';
import $ from 'jquery';
import AnimeCreate from 'client/components/AnimeCreate';
import Anime from 'client/components/Anime';

class AppContainer extends Component {

  constructor () {

    super(...arguments);

    this.state = {
      animes: []
    };

    this.handleCreate = this.handleCreate.bind(this);
  }

  // Este evento de ciclo de componente es llamado cuando éste se crea.
  // No se vuelve a llamar cuando se actualiza.
  componentDidMount () {
    this.sync();
  }

  render () {

    const { animes } = this.state;
    const animesElements = animes.map(anime => (
      <Anime key={anime.id} {...anime} />
    ));

    return (
      <main className='main'>
        <header className='row column'>
          <h1>Lista de animes</h1>
        </header>
        <AnimeCreate onCreate={this.handleCreate} />
        <main className='row column'>
          { animesElements.length ? animesElements : <i>No hay animes.</i> }
        </main>
      </main>
    );
  }

  handleCreate (newItem) {
    $.post('/api/animes', newItem).then(anime => {
      const newAnimes = [ ...this.state.animes, anime ];
      this.setState({
        animes: newAnimes
      });
    });
  }

  sync () {
    $.get('/api/animes').then(animes => {
      this.setState({ animes });
    });
  }
}

export default AppContainer;
