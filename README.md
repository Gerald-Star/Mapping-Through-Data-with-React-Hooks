# What Does React.CreateElement Does


React.createElement is a core function in React that is responsible for creating and returning a React element, which is an object describing what should be rendered to the DOM. This is how React translates the JSX syntax (or the manual API in non-JSX environments) into a tree of elements.

## Breakdown of React.createElement:

React.createElement(
  type, 
  [props], 
  [...children]
);



- type:

This is the type of the element you want to create. It can be a:
String (e.g., 'div', 'span') for HTML tags, indicating you're creating a DOM element.
Function or Class (e.g., MyComponent) for React components, which may either be function components or class components.

- props:

An object containing the element's attributes or properties, such as className, style, id, and event handlers like onClick.
These props can also include things like ref or key.
This argument is optional, and if no props are needed, null or undefined can be passed.

- children:

Any children of the element, which can be React elements, strings (text nodes), numbers, or other types.
You can pass multiple children as additional arguments after the props argument, or as an array.

Example Usage:
With JSX:

const element = <h1 className="greeting">Hello, world!</h1>;


Without JSX (equivalent code using React.createElement):

js
Copy code
const element = React.createElement(
  'h1', 
  { className: 'greeting' }, 
  'Hello, world!'
);
In this example:

'h1' is the type of the element (a DOM tag).
{ className: 'greeting' } is the props object (it sets the className attribute).
'Hello, world!' is the child, which will appear inside the h1 tag.
Output:
The call to React.createElement produces an object like this:

js
Copy code
{
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  },
  key: null,
  ref: null
}
Why use React.createElement?
JSX is just syntactic sugar for React.createElement calls. When JSX is used, it's compiled down to React.createElement behind the scenes.
It's necessary to use React.createElement if you're working without JSX, like in environments where JSX isn't supported.
In summary, React.createElement creates the virtual DOM representation of UI components or HTML elements, which React uses to build and update the actual DOM.



## How to install Prettier on your React Dependency

To install prettier - npm install --save-dev prettier  or (-D prettier) which is global.


## INSTALLING REACT PACKAGES

Prettier

Eslint npm -D 

vite - npm -D vite

dev - vite to start the dev server - 
build - vite build  > npm run dev
preview - vite preview


## Dynamic Rendering

Render function needs to be fast and stateless
You use state to make the render function dynamic

// to make this dynamic we need to use hooks - useState
// useState is a hook that allows us to use state in a functional component
// set onChange to update the state on the input field


### React Router

- install React Router DOM
npm i react-router-dom@6.4.1
