import React, { Component } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";

import "./App.css";

// import Header from "./components/Header";
import Body from "./components/Body";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";

import Button from "./elements/Button";

const theme = {
  primary: "red",
  secondary: "gold",
};

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
        <ThemeProvider theme={theme}>
          {/* <Header
          title="Hello from App"
          myObj={{
            a: 5,
            b: 6,
          }}
        /> */}
          {/* Conditionally rendering components this way will affect the component lifecycle, these components are mounting and unmounting, which resets the state  */}
          {/* This method below by using css, will maintain the state and not call the componentDidMount/componenetUnmount methods*/}
          <div style={!this.state.visible ? { display: "none" } : {}}>
            <ImageSlider />
          </div>

          <div style={this.state.visible ? { display: "none" } : {}}>
            <Body
              family={["Kevin", "Sophia", "Sage", "Judah"]}
              myFunc={add}
              nums={[10, 12]}
              lambdaFunc={(a, b) => a + b}
            />
            <Counter initialCount={33} />
          </div>
          <Button color="primary" onClick={this.toggle}>
            {buttonText}
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
