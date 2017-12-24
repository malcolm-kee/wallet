import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// don't run this code as it will crashes due to firebase.storage is not initialize properly in node js
xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
