import React from "react";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  // passing ES6 style functions as props (you don't need "this" keyword, but in regular function expressions you do)
  const add = (a, b) => a + b;
  return (
    <div className="App">
      <Header
        title="Hello from App"
        myObj={{
          a: 5,
          b: 6,
        }}
      />
      <Body
        family={["Kevin", "Sophia", "Sage", "Judah"]}
        myFunc={add}
        nums={[10, 12]}
        lambdaFunc={(a, b) => a + b}
      />
    </div>
  );
}

export default App;
