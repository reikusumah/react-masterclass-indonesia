import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import List from "./components/List";
import Styling from "./components/Styling";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <List name="Books" />
    <Styling />
  </React.StrictMode>,
  document.getElementById("root")
);
