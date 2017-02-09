import React, { Component, PropTypes } from 'react';

class Animal extends Component {

  constructor () {

    super(...arguments);

    this.state = {
      likes: 0
    };

    this.handleLike = this.handleLike.bind(this);
  }

  render () {

    const { likes } = this.state;
    const { className, children, photo, type } = this.props;

    return (
      <div className={`animal ${className}`}>
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

  handleLike (event) {

    event.preventDefault();

    this.setState({
      likes: this.state.likes + 1
    });
  }
}

Animal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  photo: PropTypes.string,
  type: PropTypes.string
};

Animal.defaultProps = {
  className: ''
};

export default Animal;
