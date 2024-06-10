import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { key: "titleText1" },
  "Hello World!"
);
const heading2 = React.createElement(
  "h2",
  { key: "titleText2" },
  "Hello World!"
);

const container = React.createElement("div", {}, [heading1, heading2]);
console.log(container);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(container);
