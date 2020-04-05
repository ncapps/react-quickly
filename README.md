# React Quickly by Azat Mardan

## Chapter 1. Meeting React
  - React allows you to create reusable UI components in JavaScript
  - React's simplicity is achieved with:
    - Declarative over imperative style
    - Component-based architecture using pure JavaScript
    - Powerful abstractions
  - *Declarative* style means developers write how it should be, not wht to do, step-by-step (imperative)
  - React uses a *virtual DOM"* to find differences between what's already in the browser and the new view. Only when the library knows there has been a chnage in the rendering will it update the actual DOM
  - An added benefit of the virtual DOM is that you can do unit testing
  - JSX is a template language that lets developers write React UIs more eloquently. JSX is transpiled to regular JavaScript using Babel
  - *React Core* is a library for building and sharing composable UI components using JavaScript or JSX in an isomorphic/universal manner
  - *ReactDOM* is a library that includes methods for DOM and server-side rendering

## Chapter 2. Baby steps with React
- *Properties* are a cornerstone of the declarative style that React uses. Think of properties as unchangeaable values within an element.
- Properties are immutaable within their components. The child element cannot modify its properties
- Properties closely resemble HTML attributes
- You can use the same component - but provided with different properties, the elements rendered by the component can be different
- It's important to know how React works in regular JavaScript events before using JSX
- You can nest React elements using arguments in `createElement()`
- Create elements from custom component classes
- Modify elements using properties
- Pass properties to child element(s)

## Chapter 3. Introduction to JSX
- JSX is a JavaScript extension that provides syntactic sugar for function calls and object construction
- Today, we build highly interactive UIs and JS and HTML are tightly coupled to implement various pieces of functionality
- JSX is compiled by various *transformers* into standard ECMASCript
- Don't pass properties individually when your intention is to pass all of them,. Use the spread operator.
- The spread operator's syntax is similar to the rest parameter's but rest is used in a function definition/declaration, and spread is used in calls and literals
- Use `className` and `htmlFor` instead of the standard HTML `class` aand `for` attributes
- The `style` attribute takes a JavaScript object, not a string
- Use Ternary operators aand IIFE to implement `if`/`else` statements

## Chapter 4. Making React interactive with states
- Properties are immutable in a component, properties only change when the component is re-created by passing new values from a parent component
- *States* allow you to update views in response to events without re-rendering a component
- When state changes, only the corresponding parts of views change. This is possible due to the virtual DOM.
- New values for properties and states can change the UI. New property values come from a parent, new state values come from the component
- Using stateless components with a handful of stateful components allows for more flexible and simpler designs
- States are mutable; properties are immutable
- `{}` is a way to render variables and execute JavaScript in JSX code
- Function componetns are the preferred way of working with React

## Chapter 5. React component lifecycle events
- *Mounting events* - Happen when a React element is attached to a DOM node
- *Updating events* - Happen when a React element is updated as a result of new values of its properties or state
- *Unmounting events* - Happen when a React element is detached from the DOM
- A *pure* function is a function that:
  - Given the same input, will *always* return the same output
  - Has no side effects (doesn't alter external states)
  - Doesn't rely on any external state
- Setting your initial values will help you avoid repetitive checks or bugs later in your code
- `componentWillMount()` is invoked on both the server and the client, whereas `componentDidMount()` is invoked only on the client
- Mounting events are used to integrate React with other libraries and to get data from stores or servers
- Use `shouldComponentUpdate()` to optimize rendering
- Use `componentWillReceiveProps` to perform a state change with new properties
- Unmounting events are used for cleanup

## Chapter 6. Handling events in React
- For attributes that are events names, you use standard W3C DOM event names in camelCase (e.g., `onClick`)
- The `event` object is an enhance version of a native DOM event object
- `bind()` is needed so that in the event-handler function, a reference to the instance context is accessible. You don't need to bind the context when using fat arrows (`()=>{}`)
- React is declarative, you declare an event in the JSX as an attribute (e.g., `onClick={handleSave}`)
- In React, events are captures at the root (Document)
- React uses its own special class for *synthetic events*
- The `target` property of the event object has the DOM node of the object on which the event happened. 
- You can get the text of an input field from `event.target.value`
- *Dumb* and *smart* components are *presentational* and *container* respectively
- You can create custom event listeners using lifecycle events
- *Orphaned* event handlers are handlers that don't have DOM nodes that created them - this can cause memory leaks
- `onClick` is for capturing mouse and trackpad clicks
- The JSX syntax for event listeners is `<a onNAME={FUNCTION} />`
- Bind event handlers with `bind()` in `constructor()` or in JSX if you want to use `this` in the event handler as the value of the component class instance
- `componentDidMount()` is triggered only on the browser
- `componentWillMount()` is triggered only both the browser and the server
- React supports most the standard HTML DOM events by providing and using synthetic event objects
- `componentDidMount()` and `componentWillUnmount()` can be used to integrate React with other frameworks and events not supported by React

## Attribution
React Quickly, Azat Madan, August 2017 - ISBN 9781617293344