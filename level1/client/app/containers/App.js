import React, { Component } from 'react';
import data from 'client/app/data';
import ListContainer from 'client/app/containers/List';
import EditContainer from 'client/app/containers/Edit';

class AppContainer extends Component {

  constructor () {

    super(...arguments);

    this.state = {
      editingUserId: '',
      users: data.users
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEdition = this.handleEdition.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  render () {

    const { editingUserId, users } = this.state;

    if (editingUserId) {
      return (
        <EditContainer
          users={users}
          userId={editingUserId}
          handleEdit={this.handleEdit}
        />
      );
    }

    return (
      <ListContainer
        users={users}
        handleEdition={this.handleEdition}
        handleAdd={this.handleAdd}
        handleRemove={this.handleRemove}
      />
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

  handleRemove (userId) {
    const newUsers = this.state.users.filter(user => user.id !== userId);
    this.setState({
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
