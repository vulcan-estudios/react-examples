// Los contenedores son componentes de React que tienen acceso al estado y conocen
// la lógica de la aplicación.

// El contenedor principal es quien inicia toda la aplicación, el componente raíz.

import React, { Component } from 'react';
import database from 'client/database';
import Title from 'client/components/Title';
import Animal from 'client/components/Animal';

class AppContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    // Para crear elementos dinámicos, se itera una lista de datos y se crea cada
    // item como una instancia de un componente de React.
    const animals = database.animals.map(animal => {
      return <Animal key={animal.id} {...animal}>{animal.name}</Animal>;
    });

    return (
      <div>
        <Title>Lista de animales</Title>
        <main className='row column'>
          { animals.length ? animals : <i>No hay animales.</i> }
        </main>
      </div>
    );
  }
}

export default AppContainer;
