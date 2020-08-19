import React, { Component } from "react";

class Counter extends Component {
  /**
  Please note: If you're only using the constructor to only initialize the state,
  just do this:
  
   state = {
     count: 0
   }
   */

  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialCount,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
