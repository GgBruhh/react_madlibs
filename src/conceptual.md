### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- React is a JavaScript framwork, and you would use it to make one page applications

- What is Babel?
  Babel allows you to use the latest JavaScript syntax and it makes it readable to all the browsers.

- What is JSX?
  JSX allows you to cross JS and HTML syntax to render things

- How is a Component created in React?
  A component is created from constructing the component, typically in its own file. then you export it into the App file and call it there. This is made possible through JSX and using HTML element  and rendering it through the Component

- What are some difference between state and props?
  state is used to manage data within a component while props is used to pass from parent to child

- What does "downward data flow" refer to in React?
  data can only flow from parent to child

- What is a controlled component?
  a Component that is controlled by their parent Component

- What is an uncontrolled component?
  a Component that is independent

- What is the purpose of the `key` prop when rendering a list of components?
  the `key` prop is used to help identify a specific element to make it easier to select or manipulate 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  a `key` prop should be something that is unique and not easily repeated

- Describe useEffect.  What use cases is it used for in React components?
  useEffect is something that will run as soon as certain critera is met.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  useRef is a property that allows you to reference an element rather than calling upon the DOM and cluttering your codebase

- When would you use a ref? When wouldn't you use one?
  When you need to store a value that does not trigger a re-render

- What is a custom hook in React? When would you want to write one?
  a custom hook is to help create more reusable code and declutter the codebase.
