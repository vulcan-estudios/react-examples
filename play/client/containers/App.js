import React, { Component } from 'react';
import uuid from 'uuid';
import Title from 'client/components/Title';
import Input from 'client/components/Input';
import TodoItem from 'client/components/TodoItem';

class App extends Component {

  constructor () {
    super(...arguments);

    this.state = {
      list: [
        {
          id: uuid.v4(),
          name: 'Aprender ES2015',
          checked: true
        },
        {
          id: uuid.v4(),
          name: 'Aprender React',
          checked: false
        },
        {
          id: uuid.v4(),
          name: 'Aprender Redux',
          checked: false
        }
      ]
    };

    this.onCreate = this.onCreate.bind(this);
    this.onTIChange = this.onTIChange.bind(this);
  }

  render () {

    const listElements = this.state.list.map(item => {
      return (
        <TodoItem
          key={item.id}
          id={item.id}
          checked={item.checked}
          onChange={this.onTIChange}
        >
          {item.name}
        </TodoItem>
      );
    });

    let qty = 0;
    this.state.list.forEach(item => {
      qty += item.checked ? 1 : 0;
    });

    return (
      <div>
        <Title>Todo App</Title>
        <Input onCreate={this.onCreate} />
        <div>
          {listElements}
        </div>
        <div>
          Tenemos <b>{qty}</b> items completados!
        </div>
      </div>
    );
  }

  onCreate (text) {

    const newItem = {
      id: uuid.v4(),
      name: text,
      checked: false
    };

    const newList = [ ...this.state.list, newItem ];

    this.setState({
      list: newList
    });
  }

  onTIChange (id, checked) {

    const newList = this.state.list.map(item => {
      if (item.id === id) {
        return { ...item, checked };
      }
      return item;
    });

    this.setState({
      list: newList
    });

  }
}

export default App;
