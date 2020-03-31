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

## Attribution
React Quickly, Azat Madan, August 2017 - ISBN 9781617293344