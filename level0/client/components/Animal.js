// Esto es un componente de React que guarda un estado. Para este caso se crea
// el componente extendiendo de la clas Component de React.

import React, { Component, PropTypes } from 'react';

class Animal extends Component {

  constructor () {

    super(...arguments);

    // Se inicializa el estado interno del componente. En este caso se tiene un
    // contador del número de likes del animal que representa el componente y tiene
    // un valor inicial de 0.
    this.state = {
      likes: 0
    };

    // Se hace un binding de los métodos del componente para facilitar su
    // utilización.
    this.handleLike = this.handleLike.bind(this);
  }

  // El método render() es requerido y debe retornar un elemento de React
  // (que puede contener más elementos).
  render () {

    // Se consiguen todos los datos necesarios para renderizar el componente,
    // tanto del estado del componente como de las propiedades que se le fueron
    // proveidas.
    const { likes } = this.state;
    const { className, children, photo, type } = this.props;

    return (
      <div className={`animal ${className}`}>
        {/* Los comentarios dentro de JSX se escriben así. */}
        <img src={photo} />
        <div>{children}</div>
        <div><small>{type}</small></div>
        <div><small>
          <a href='#' onClick={this.handleLike}>Me gusta</a>
          {' '}
          <i>A {likes} personas les gusta el animal</i></small>
        </div>
      </div>
    );
  }

  // Se pueden utilizar métodos de esta manera para controlar eventos dentro del
  // componente y realizar actualizaciones al estado del mismo. Cada vez que se
  // detecte un cambio en el estado, se renderizará de nuevo.
  handleLike (event) {

    // Para prevenir comportamientos por defecto, se utiliza el preventDefault().
    // No es necesario returnar false.
    event.preventDefault();

    // Con setState() se le envía un objeto para merger con el estado actual del
    // componente.
    this.setState({
      likes: this.state.likes + 1
    });
  }
}

// Al componente se le pueden definir reglas para validar las propiedades que
// recibe. Por ejemplo, si son de un tipo de dato, forma, si tiene opciones o
// si son requeridas, por ejemplo.
Animal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  photo: PropTypes.string,
  type: PropTypes.string
};

// Se le puede definir valores por defecto a las propiedades recibidas en caso
// de no recibir.
Animal.defaultProps = {
  className: ''
};

export default Animal;
