import React, { Component } from 'react';

//! Class example without using useRef

class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container">
        Class Timer: {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>Clear</button>
      </div>
    );
  }
}

export default ClassTimer;
