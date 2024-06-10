import React from "react";
import ReactDOM from "react-dom/client";

const container = (
  <div>
    <h1 key="titleText1">Hello World!</h1>
    <h2 key="titleText2">Hello World!</h2>
  </div>
);
console.log(container);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(container);
