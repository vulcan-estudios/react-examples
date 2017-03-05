import React, { Component, PropTypes } from 'react';
import { Row } from 'react-foundation';
import Header from 'client/app/components/Header';
import User from 'client/app/components/User';
import UserEdit from 'client/app/components/UserEdit';

class ListContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users, handleAdd, handleEdition, handleRemove } = this.props;
    const usersElements = users.map(user => (
      <User key={user.id} {...user} onEdit={handleEdition} onRemove={handleRemove} />
    ));

    return (
      <div>
        <Header>Usuarios ({users.length})</Header>
        <Row isColumn={true}>
          {
            usersElements.length
            ? usersElements
            : <p><i>No hay usuarios.</i></p>
          }
        </Row>
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
  handleRemove: PropTypes.func.isRequired,
};

export default ListContainer;
