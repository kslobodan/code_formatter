import "bulmaswatch/superhero/bulmaswatch.min.css";

import ReactDOM from "react-dom/client";
import React from "react";
import CodeCell from "./components/code-cell";

const App = () => {
  return (
    <div>
      <CodeCell />
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
