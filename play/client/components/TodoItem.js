import React, { Component } from 'react';

class TodoItem extends Component {

  constructor () {
    super(...arguments);

    this.state = {
      isChecked: this.props.checked
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render () {

    const { id, children } = this.props;
    const { isChecked } = this.state;

    const text = isChecked ?
      <strike>{children}</strike> :
      children;

    return (
      <div>
        <label htmlFor={id}>
          <input
            id={id}
            type='checkbox'
            checked={isChecked}
            onChange={this.handleChange}
          />
          {text}
        </label>
      </div>
    );
  }

  handleChange (event) {

    const { id, onChange } = this.props;
    const checked = event.target.checked;

    this.setState({
      isChecked: checked
    });

    if (onChange) {
      onChange(id, checked);
    }
  }

}

export default TodoItem;
