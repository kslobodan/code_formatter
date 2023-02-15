import "bulmaswatch/superhero/bulmaswatch.min.css";

import ReactDOM from "react-dom/client";
import React from "react";
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

// ReactDOM.render(<App />, document.querySelector("#root"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
