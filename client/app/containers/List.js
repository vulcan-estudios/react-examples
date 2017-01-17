import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-foundation';
import { Link } from 'react-router';
import User from 'client/app/components/User';

const mapStateToProps = function (state) {
  return {
    users: state.users
  };
};

class ListContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users } = this.props;

    const list = users.map(user => {
      return (
        <Row key={user.id} isColumn={true}>
          <Link to={`/${user.id}`}>
            <User {...user} />
          </Link>
        </Row>
      );
    });

    return (
      <Row isColumn={true}>
        {list}
      </Row>
    );
  }
}

export default connect(mapStateToProps)(ListContainer);
