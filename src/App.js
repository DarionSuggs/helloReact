import React, { Component } from "react";
import { render } from "react-dom";

function Text(props) {
  return <span style={{ color: "grey" }}>{props.value}</span>;
}
const App = () => {
  return (
    <h1>
      Hello, <Text value="Darion" />
    </h1>
  );
};
export default App;
