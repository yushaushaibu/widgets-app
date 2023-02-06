import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a Javascript front-end framework",
  },
  {
    title: "Why use React?",
    content: "React is the favorite library among engineers",
  },
  {
    title: "How do you use React?",
    content: "React is used by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
