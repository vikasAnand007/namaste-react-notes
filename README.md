## L0001 ---------------------------------------------------
There are two ways to serve a html content to the client

 - Serving a already generated (static) content 
 - Generating the content on request and serving the generated content.

### 1. Pre-generated content
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Using react with CDN</title>
    </head>
    <body>
        <div id="root">
            <h1>Hello world!</h1>
        </div>
    </body>
    </html>

### 2. Generating content on request

this process can be of two type

 - Generating content on server and then sending the generated content on browser to render. Also known as **Server Side Rendering** (**SSR**)
 - Sending a bundle of JS code to browser, which will run over there and generate the content there itself. Also known as **Client Side Rendering** (**CSR**)

This is the example of **CSR** 

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Client side rendering with JS</title>
    </head>
    <body>
        <div id="root"></div>
    
        <script>
            const root = document.getElementById("root");
            let heading = document.createElement("h1");
            heading.innerHTML = "Hello World!"
            root.appendChild(heading)
        </script>
    </body>
    </html>
**React JS is a Javascript library** which makes it **easier and optimum** to do **development** as per the 2nd model (**Generating content on request**). It focuses primarily on CSR but there are other JS frameworks which are derived from react, and can fulfil the purpose of SSR (example next JS).

## L0002 --------------------------------------------------------
### Writing the same code with help of React JS
To bring react library in to the project. Use these two CDN in the HTML file.
```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
*Note : we can also use production specific CDN, which also provide the same code but in minified format.*

By using above two CDNs in our project we have the access to **React** and **ReactDOM** object. And we get access to properties and methods provided by them.

 - **React** library provides the legecy code, which is inportant for it's functionality
 - **ReactDOM** library provides the APIs which helps react to get along with DOM.

 Doing same thin g with help of React

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Client side rendering with React</title>
    </head>
    
    <body>
        <div id="root"></div>
    
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
        <script>
            const heading = React.createElement("h1", { id: "titleText" }, "Hello World!");
            const rootElement = document.getElementById("root")
            const root = ReactDOM.createRoot(rootElement);
            root.render(heading);
        </script>
    </body>
    
    </html>
    
    <!-- NOTE : "createElement" takes three arguments to create an element
    1. tag name
    2. an object containing attributes/props
    3. inner content -->
here,
`createElement()` creates a react element object which looks something like this.

    {
	    $$typeof: Symbol(react.element)
	    key: null
	    props: {children:  'Hello World!', id: "titleText"}
	    ref: null
	    type: "h1"
	    _owner: null
	    _store: {validated:  false}
	    _self: null
	    _source: null
	    [[Prototype]]: Object
    }
here, 
`render()` takes the react element and prints it on DOM inside the root element in a form of HTML tag.

*NOTE : render method overwrites the root element, that means anything which was present before in the root element will be replaced be the new element.*
## L0003 ---------------------------------------------------
### Rendering nestead elements
expected

    <div id="container">
        <h1 id="h1">heading 1</h1>
        <h2 id="h2">heading 2</h2>
    </div>
code

    const content = React.createElement(
        "div",
        { id: "container" },
        [
            React.createElement("h1", { id: "h1" }, "heading 1"),
            React.createElement("h2", { id: "h2" }, "heading 2")
        ]
    );
    const rootElement = document.getElementById("root")
    const root = ReactDOM.createRoot(rootElement);
    root.render(content);
## L0004 ---------------------------------------------------------
## Using react via npm

    npm i react
    npm i react-dom
This will download the react and react-dom in our project and then we do not need to use cdn links for react.
So, now the code will look like this

***.html***

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Client side rendering with React</title>
    </head>
    <body>
        <div id="root">Not rendered</div>
        <script type="module" src="script1.js"></script>
    </body>
    </html>

***.js***

    import React from "react";
    import ReactDOM from "react-dom";
    
    const heading = React.createElement("h1", { id: "titleText" }, "Hello World!");
    console.log(heading)
    const rootElement = document.getElementById("root")
    const root = ReactDOM.createRoot(rootElement);
    root.render(heading);

Since, npm is downloads the library in our local machine, to send it on browser we need a bundler which bundles the required code in a minified version and sends it to browser.

## L0005 -------------------------------------------------------
## Making the app production ready
To make the code production ready, we need to do following things

 - minify the code
 - optimise it
 - bundle it

For the above mentioned steps we can use various bundlers that can be installed from **npm** like **webpack**, **parcel**, **vite** etc.

> Most of this bundlers also supports **HMR / hot module reload** - (acts a a live server, whenever any change occur in code, the bundle is updated and changes are reflected instantly). This feature is very helpful i while development, as we do not need to manually bundle the code again and again.

We will use parcel.

    npm install parcel --save-dev

 - to create a development bundle / build --> `npx parcel <entry point
   of app>`
   
 - to create a production bundle / build --> `npx parcel build <entry point  
   of app>`

### features of parcel

 - HMR - hot module reloading
 - File watcher algorithm
 - Bundling
 - Minify
 - Cleaning code (do not remove console logs automatically, we need to configureit for that)
 - Dev and production build
 - Image optimisation
 - Caching while development
 - Inject polyfills to manage compatibility with older browsers
 - HTTPS on dev
 - Consistent hashing algorithm
 - Zero configuration
 - tree shaking (removing unwanted code)

## L006 -------------------------------------------------------
## Key Prop 
When we have multiple children (**with similar tree structure**) in a DOM tree hierarchy, Then we give a unique key to each child. This helps React to identify which child is needed to be re-rendered, Instead of re-rendering all the children. 
***Whenever the value of key is changed, component consuming that key re-renders.***

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
## L007 -----------------------------------------------------
## JSX (Javascript syntex extention)

 - It is a syntex in which we can write JavaScript and HTML like code in a combined format.
 - It helps to make development easier and increases the readability.
 - JSX is ultimately converted into `createElement(type,  props,  ...children)` with help of **babel**.
 - 

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
### Babel
Babel is a JavaScript compiler, that is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.

## L008 --------------------------------------
## React Component v/s React Element
|Component| Element |
|--|--|
| A React Component is a piece of code that has the option to maintain it's state and can take props from its parent and it returns a React element or null | A React element is simply a piece of code that get rendered in the UI |
| A Component has life cycle that can be mounting unmounting and updating | An element just mounts and unmounts |

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

