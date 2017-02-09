import React, { Component } from 'react';
import database from 'client/database';
import Title from 'client/components/Title';
import Animal from 'client/components/Animal';

class AppContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const animals = database.animals.map(animal => {
      return <Animal key={animal.id} {...animal}>{animal.name}</Animal>;
    });

    return (
      <main className='main'>
        <Title>Lista de animales</Title>
        { animals.length ? animals : <i>No hay animales.</i> }
      </main>
    );
  }
}

export default AppContainer;
