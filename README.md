`Widgets App`
Creating distinct or separate panels with React Hooks that are integrated to form the widgets app.

`Accordion Widget`
The Accordion component receives an array of items (title and content) from the App component as props and renders the items' styled content. When a user clicks on the title, the accordion can be expanded to display content or collapsed.

1. Create array of items and pass it down as `props`
2. Map over items array in the Accordion component. `React Fragment` is an empty container that allow you to wrap or group multiple elements (div) without adding an extra node to the DOM.
3. Include a `event handler` to call a helper function once a user clicks the title. A `helper function` is a function that is passed to an event handler in an element and invoked when an event, such as a click, is performed on the element.

** Helper functions with argument are pass on to the event handler in the element with callback function.

`React Hooks` is giving functional components alot of additional functionality.
`useState()` allows the use of `state` in functional component.
`useEffect()` allows to use something like `component lifecycle` in functional component
`useRef()` function that allows the creation of `ref` in functional component.

`Search Widget`
The search term entered in the Search component textfield initiates an API request to Wikipedia, which ultimately returns the results.

