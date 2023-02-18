`WIDGETS APP`
Creating distinct or separate panels with React Hooks that are integrated to form the widgets app.

`ACCORDION WIDGET`
The Accordion component receives an array of items (title and content) from the App component as props and renders the items' styled content. When a user clicks on the title, the accordion can be expanded to display content or collapsed.

1. Create array of items and pass it down as `props`
2. Map over items array in the Accordion component. `React Fragment` is an empty container that allow you to wrap or group multiple elements (div) without adding an extra node to the DOM.
3. Include a `event handler` to call a helper function once a user clicks the title. A `helper function` is a function that is passed to an event handler in an element and invoked when an event, such as a click, is performed on the element.

** Helper functions with argument are pass on to the event handler in the element with callback function.

`React Hooks` is giving functional components alot of additional functionality.
`useState()` allows the use of `state` in functional component.
`useEffect()` allows to use something like `component lifecycle` in functional component
`useRef()` function that allows the creation of `ref` in functional component.


`SEARCH WIDGET`
The search term entered in the Search component textfield initiates an API request to Wikipedia, which ultimately returns the results.

`useEffect()` useEffect runs automatically when a component is created. It combines the functionality of componentDidMount() and componentDidUpdate().

`useEffect() is configured in 3 ways`
To run some code:
1. When component is rendered `for the first time only.`
2. When component is rendered `for the first time and whenever it re-renders`
3. When component is rendered `for the first time and (whenever it re-rendered and some piece of data has changed).`


** You need to tell useEffect() when to execute the code in its first argument. i.e the callback arrouw function. The second argument i.e either ([] or [data] or ..nothing..) controls when the codes in the first argument to be executed.

1. `[]` code runs at intial (first) render | `componentDidMount()`
2. `[data]` code runs at initial render, and after every rerender if data has changed since last update | `componentDidUpdate()`
3. `..nothing..` code runs at initial render, runs after every rerender

** [] or [data] is commonly used in useEffect() implementation. Also the array in the second argument can have multiple data i.e [data1, data2] and the cb function is rerun if any of the data changes.

`How to make API request in useEffect`
Method 1:
useEffect(() => {
    const search = async () => {
        await axios.get('URL')
    };
    search();
}, [term])

`Security in React | XSS Attack`
Anytime you a take a string from a third party API, you could be introducing a security hole into your application called XSS (Cross Site Scripting) attack.

** use `dangerouslySetInnerHTML` only when you trust the third party providing you with the API data. Otherwise DO NOT use dangerouslySetInnerHTML in your application.

`Clean Up Function`
useEffect callback function can return another function that is specifically used for clean up. setTimeout() can be cleared in the clean up function.

`DROPDOWN WIDGET`
Shows list of options. When a user clicks on the dropdown, a few options will appear. The selected options recolor a text on the website so that it exactly matches the option's name in the list.

`Lessons`
- When an event handler is added to an element in a component, the component can only listen to events on that specific element. In this project, we're attempting to make the component listen to events in elements outside of it.

- Event handlers using the native addEventListener() get called first before any other event handler in the react component.

- `contains()` all DOM elements have this property. It enables you to determine whether one DOM element is contained inside another.

- How to toggle on or off component in React. To remove/hide component from the DOM, useEffect() cleanup function is used to hide or remove component from the DOM.

`Event Bubbling`
is a concept in the DOM. It happens when an element receives an event, and that event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element.

When you click on an element, for instance, it appears as though you have also clicked on the parent element all the way up to its root.

`useRef`
gives direct reference to a DOM element in React, instead of using the `document.getElementBy()` or `document.querySelector()`.

`ref.current` provides access to the div element we are attempting to access.



`THE TRANSLATE WIDGET`
Text is entered into the input field, a language is chosen from a drop-down menu, and the language is translated before being displayed on the screen.

`Lessons`
- How to reuse component (Dropdown) in React.

`The Convert Component`
- Receives props i.e language and text
- Makes API request to Google Translate API
- Get response from Google API and update state
- Show data on screen