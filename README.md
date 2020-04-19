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

## Chapter 7. Working with forms in React
- To keep internal state and the view in sync, you must:
  1. Define elements in `render()` using values from `state`
  2. Capture changes to a form element as they happen using `onChange`
  3. Update the internal state in the event handler
  4. New values are saved in `state`, and then the view is updated by a new `render()`
- *one-way binding* - the state changes views
- *Controlled components* ensure that the internal component state is always in sync with the view
- You should wrap input elements that share a common purpose in a `<form>` element
- According to the HTML5 spec, you should *not* nest forms
- React supports three events for forms:
  - `onChange` - Fires when there's a change in any of the form's inputs
  - `onInput` - Fires for each change in `<textarea>` and `<element>` values. This is *not* recommended
  - `onSubmit` - Fires when the form is submitted, usually by pressing Enter
- The most popular naming convention for event handlers is to prefix with the word `handle`
- Remember: You pass the definition of the function, not its result; and you use curly braces as values of the JSX attributes
- Special mutable properties are called *interactive properties*. Just four elements `<input>`, `<textarea>`, `<select>`, and `<option>` are special and have the interactive properties
- Interactive properties:
  - `value` - Applies to `<input>`, `<textarea>`, and `<select>`
  - `checked` - Applies to `<input>` with type="checkbox" or type="radio"
  - `selected` - Applies to `option` (used with `<select>`)
- In JavaScript, objects are passed and assigned by references. You shouldn't change state directly. To avoid potential conflicts, its better to *clone* the object using `Object.assign()` or object destructuring
- If you define the value of the attributes `value`, `checked`, or `selected` using strings, properties, or states, then it is considered *controlled*. This is a best practice when working with forms with React
- Using uncontrolled components with or without capturing changes is a hack and should be avoided
- React's `<textarea>` uses a `value` attribute, not inner content
- `this.refs.NAME` is a way to access class references

## Chapter 8. Scaling React components
- The key benefit of `defaultProps` is that if a property is missing, a default value is rendered
- `propTypes` is a convenience feature to warn you about mismatches in data types at a developmental stage
- Never rely on front-end user-input validation, because it can be easily passed. Use it only for a better UX, check everything on the server side
- The `children` property is an easy way to render all children with `{this.props.children}`
- use `React.Children.count(this.props.children)` to get an accurate count of child elements
- A higher-order component (HOC) lets you enhance a component with additional logic. HOCs let you reuse code
- The spread operator lets you pass all the attributes of an object as properties when used in the element
- Splitting your code into *presentational* and *container* components make it simpler and maintainable
- *Presentational components* typically only add structure to DOM and styling. They take properties but don't have their own states. They often use `this.props.children` when they act as wrappers to style child components
- *Container components* are often generated by HOCs to inject data sources. They have states.
- You can define a default value for any component property by setting the component's `defaultProps` attribute
- React allows you to encapsulate and reuse common properties, methods, and events among your components by creating higher-order components
- Higher-order components are defined as functions that take another component as an argument. This argument is the component inheriting from the HOC
- Any HTML or React components nested within a JSX element can be accessed through the `props.children` property of the parent component

## Chapter 9. Menu component
- Set the `key` attribute when generating lists
- Use `map()` to create a new array based on the original. It's iterator arguments are `value`, `index`, and `list`

## Chapter 11. Timer component
- Keep components simple and as close to representational as possible
- Pass functions as values of properties, not just data
- Two components can exchange data between each other via a parent

## Chapter 12. Webpack
- Webpack's core focus is optimizing the JavaScript so that it's contained in as few files as possible for a client to request
- *Code splitting* and *asset hashing* identifies blocks of code that are required only under certain circumstances. They are split out and loaded on demand as an optimization
- *Webpack* - the bundler tools
- *Loaders* - Style, CSS, HMR, and Babel/JSX preprocessors
- *webpack-dev-server* - An Express development server that lets you use HMR
- ESLint can take predefined rules and make sure your code adheres to the standards defined by the rules
- npm scripts are great for testing, building, and running the development environment
- A *hook* is a pattern in which some code is triggered when another event happens

## Chapter 13. React routing
- You can create a naive routing solution by listening to `hashchange`
- *React Router* provides the JSX syntax for defining a routing hierarchy: `<Router><Route/></Router>`
- Nested routes don't have to have nested URLs relative to their parent routes; path and nestedness are independent
- You can use hash history without tokens by setting `queryKey` to `false`
- You must include React when using JSX. JSX converts to `React.createElement()` which needs React

## Chapter 14. Working with data using Redux
- React is a view layer that's designed to work with *unidirectional data flow*
- A unidirection data pattern (a.k.a. *one-way binding*) exists when there are no mutable (or two-way) references between concerns
- *Concerns* are parts with different functionality
- Views can't modify models directly
- Unidirectional data flow ensures that for any given input into your components, you'll get the same predictable result: a `render()` expression
- *Flux* is an architecture pattern for data flow developed by Facebook to be used in React apps.
- Flux uses unidirectional data flow and aims to eliminate the complexity of MVC-like patterns. Flux is a replacement for MVC.
- Unidirectional data flow enables better testing and debugging
- *Redux* is one of the most popular implementations of the Flux architecture
- Redux is a standalone library that implements a state container
- The only way to mutate the internal state is to dispatch an action, and actions are in the store
- The way the data in the store changes is specified by *reducers* that are pure functions. `(state, action) => state` Get a new state by applying an action to the current state
- This allows for predictability and the ability to rewind actions to previous states
- Every time you call an action, every reducer is called. Reducers are responsible for changing the data in the store.
- The action code describes how an action transforms the state into the next state
- The `redux-actions` library makes reducers more functional
- The `Provider` component takes care of delivering data from the store to all the connected components, so there's no need to pass properties directly
- With `react-router`, you can declare a hierarchy of components per browser location
- You can easily combine multiple reducers with the `combineReducers()` function from `redux`
- A *reducer*, in Redux, is a function that runs *every time* any action is dispatched
- Avoid putting API calls into reducers. Reducers should be pure functions with no side effects
- An *action creator* is a function that returns an action
- A connected component can access any data from the store in its properties
- Every time part of the store is updated, all components that depend on that part receive new properties and are re-rendered
- The `dispatch()` method is a function that takes an action as an argument and sends it into the store

**Summary**
- Unidirectional data flow provides predictability and ease of maintenance for React apps
- Flux is the recommended architecture when working with React
- Redux is the most popular implementation of the Flux architecture
- Redux's `connect()` lets you access store data and dispatch actions from components
- A reducer is a file with a reducing function that uses a `switch/case` statement or `handleActions` to apply actions to a new state. The current state and actions are input, the new state is output
- Redux `combineReducers` merges multiple reducers, letting you split the code for those reducers into various modules


## Attribution
React Quickly, Azat Mardan, August 2017 - ISBN 9781617293344