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

## Attribution
React Quickly, Azat Madan, August 2017 - ISBN 9781617293344