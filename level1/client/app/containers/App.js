import React, { Component } from 'react';
import database from 'client/app/database';
import ListContainer from 'client/app/containers/List';
import EditContainer from 'client/app/containers/Edit';

class AppContainer extends Component {

  constructor () {

    super(...arguments);

    this.state = {
      editingUserId: '',
      users: database.users
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEdition = this.handleEdition.bind(this);
  }

  render () {

    const { editingUserId, users } = this.state;

    return (
      <main>
        {
          editingUserId ?
          <EditContainer
            users={users}
            userId={editingUserId}
            handleEdit={this.handleEdit}
          /> :
          <ListContainer
            users={users}
            handleEdition={this.handleEdition}
            handleAdd={this.handleAdd}
          />
        }
      </main>
    );
  }

  handleAdd (newUser) {

    const newUsers = [ ...this.state.users, newUser ];

    this.setState({
      users: newUsers
    });
  }

  handleEdit (updatedUser) {

    const newUsers = this.state.users.map(user => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });

    this.setState({
      editingUserId: '',
      users: newUsers
    });
  }

  handleEdition (userId) {
    this.setState({
      editingUserId: userId
    });
  }
}

export default AppContainer;
