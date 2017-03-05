import React, { Component } from 'react';
import { connect } from 'react-redux';

class WinnersContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    return (
      <div className='row column'>
        <p>
          El premio Óscar —también llamado «premio de la Academia» o en inglés,
          Academy Award— es un premio anual concedido por la Academia de las Artes
          y las Ciencias Cinematográficas (en inglés: AMPAS; Academy of Motion
          Picture Arts and Sciences)1 en reconocimiento a la excelencia de los
          profesionales en la industria cinematográfica, incluyendo directores,
          actores y escritores, y es ampliamente considerado el máximo honor
          en el cine.
        </p>
      </div>
    );
  }
}

export default connect()(WinnersContainer);
