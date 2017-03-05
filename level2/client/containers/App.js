import React, { Component } from 'react';
import Count from '../components/Count';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { add, subtract } from '../actions-creators';

function mapStateToProps (state) {
  return {
    value: state.value
  };
}

function mapDispatchToProps (dispatch) {
  return {
    handleAdd: (toAdd) => dispatch(add(toAdd)),
    handleSubtract: (toSubtract) => dispatch(subtract(toSubtract)),
  };
}

class App extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    const { value, handleAdd, handleSubtract } = this.props;
    return (
      <div>
        <header className='header'>
          <div className='row column'>
            <h1>Counter</h1>
          </div>
        </header>
        <main className='row column'>
          <Count onCount={handleAdd} toCount={10} />
          <Counter value={value} />
          <Count onCount={handleSubtract} toCount={5} />
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
