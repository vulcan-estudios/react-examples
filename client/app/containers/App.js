import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-foundation';
import { Link } from 'react-router';
import ListContainer from './List';
import User from 'client/app/components/User';

const mapStateToProps = function (state) {
  return {
    app: state.app,
    users: state.users,
  };
};

class AppContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { app, users, params } = this.props;
    const { loaded } = app;
    const { userId } = params;
    const length = users.length;

    // Datos iniciales no han sido cargados
    if (!loaded) {
      return (
        <Row isColumn={true} className='text-center'>
          <h3>Cargando...</h3>
        </Row>
      );
    }

    // Ver detalles de sólo un usuario
    if (userId) {
      const user = users.find(usr => usr.id === userId);
      return (
        <main>
          <Row isColumn={true}>
            <h1>Detalles de usuario</h1>
          </Row>
          <Row isColumn={true}>
            <User {...user} />
          </Row>
          <Row isColumn={true}>
            <Link to='/'>Volver</Link>
          </Row>
        </main>
      );
    }

    // Ver todos los usuarios
    return (
      <main>
        <Row isColumn={true}>
          <h1>Usuarios ({length})</h1>
        </Row>
        <ListContainer />
      </main>
    );
  }
}

export default connect(mapStateToProps)(AppContainer);
