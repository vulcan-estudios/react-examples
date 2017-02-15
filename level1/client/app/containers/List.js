import React, { Component, PropTypes } from 'react';
import { Row } from 'react-foundation';
import User from 'client/app/components/User';
import UserEdit from 'client/app/components/UserEdit';

class ListContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users, handleAdd, handleEdition } = this.props;
    const usersElements = users.map(user => (
      <User key={user.id} {...user} onEdit={handleEdition} />
    ));

    return (
      <div>
        <Row isColumn={true}>
          <h1>Usuarios <small>({users.length})</small></h1>
        </Row>
        {
          usersElements.length ?
          usersElements :
          <Row isColumn={true}>
            <p><i>No hay usuarios.</i></p>
          </Row>
        }
        <Row isColumn={true}>
          <p><b>Agregar usuario:</b></p>
        </Row>
        <Row isColumn={true}>
          <UserEdit onChange={handleAdd} isAdd={true} />
        </Row>
      </div>
    );
  }
}

ListContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleEdition: PropTypes.func.isRequired,
};

export default ListContainer;
