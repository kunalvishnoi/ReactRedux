import React from "react";
import Demo from "./components/demo";
import { Provider } from "react-redux";
import store from "./redux/store";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Demo />
      </div>
    </Provider>
  );
}

export default App;
