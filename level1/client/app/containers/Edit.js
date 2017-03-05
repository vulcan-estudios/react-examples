import React, { Component, PropTypes } from 'react';
import { Row } from 'react-foundation';
import Header from 'client/app/components/Header';
import UserEdit from 'client/app/components/UserEdit';

class ListContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users, userId, handleEdit } = this.props;
    const user = users.find(usr => usr.id === userId);

    return (
      <div>
        <Header>Edición</Header>
        <Row isColumn={true}>
          <UserEdit
            {...user}
            onChange={handleEdit}
          />
        </Row>
      </div>
    );
  }
}

ListContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  userId: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default ListContainer;
