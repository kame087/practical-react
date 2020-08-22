import React from "react";
import GlobalStyle from "./globalStyles";

import "./App.css";

// import Header from "./components/Header";
import Body from "./components/Body";
// import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";

function App() {
  // passing ES6 style functions as props (you don't need "this" keyword, but in regular function expressions you do)
  const add = (a, b) => a + b;
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
      <Body
        family={["Kevin", "Sophia", "Sage", "Judah"]}
        myFunc={add}
        nums={[10, 12]}
        lambdaFunc={(a, b) => a + b}
      />
      {/* <Counter initialCount={33} /> */}
      <ImageSlider />
    </div>
  );
}

export default App;
