import React, { Component } from 'react';

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <h4>Class Counter: </h4>
        <button onClick={this.decrement}>-</button>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
