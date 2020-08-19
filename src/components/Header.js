import React, { Component } from "react";

class Header extends Component {
  // function expression, if you're going to pass it to a prop, you'll need to pass it as myFunc={this.add}
  add(a, b) {
    return a + b;
  }
  render() {
    const list = this.props.myObj;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{list.a}</div>
        <div>{list.b}</div>

        {/* <div>{JSON.stringify(this.props.myObj)}</div> */}
      </div>
    );
  }
}

export default Header;
