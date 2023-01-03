import React, { Component } from 'react';

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  // update title on mount
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  // update title on each re-render
  componentDidUpdate(prevProps, prevState) {
    // Only update title if `count` updates, not for the text input's update
    if (prevState.count !== this.state.count) {
      console.log('componentDidUpdate: Updating document title');
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}
