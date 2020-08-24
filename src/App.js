import React, { Component } from "react";
import GlobalStyle from "./globalStyles";

import "./App.css";

// import Header from "./components/Header";
import Body from "./components/Body";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";

class App extends Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    // passing ES6 style functions as props (you don't need "this" keyword, but in regular function expressions you do)
    const add = (a, b) => a + b;
    const buttonText = this.state.visible ? "Other Components" : "Image Slider";

    return (
      <div className="App">
        <GlobalStyle />
        {/* <Header
          title="Hello from App"
          myObj={{
            a: 5,
            b: 6,
          }}
        /> */}

        {this.state.visible ? (
          <ImageSlider />
        ) : (
          <div>
            <Body
              family={["Kevin", "Sophia", "Sage", "Judah"]}
              myFunc={add}
              nums={[10, 12]}
              lambdaFunc={(a, b) => a + b}
            />
            <Counter initialCount={33} />
          </div>
        )}
        <button onClick={this.toggle}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
