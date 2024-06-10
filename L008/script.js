import React from "react";
import ReactDOM from "react-dom/client";

// REACT ELEMENT --
const header1 = <h1 key="titleText1">Hello World!</h1>;

// REACT COMPONENT --
const Header2 = () => {
  return <h2 key="titleText2">Hello World!</h2>;
};

const container = (
  <div>
    {header1}
    <Header2 />
    {Header2()}
  </div>
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(container);
