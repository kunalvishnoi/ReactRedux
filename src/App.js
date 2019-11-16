import React from "react";
import Demo from "./components/demo";
import HooksDemo from "./components/hooksdemo";
import { Provider } from "react-redux";
import store from "./redux/store";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Demo />
        <HooksDemo />
      </div>
    </Provider>
  );
}

export default App;
