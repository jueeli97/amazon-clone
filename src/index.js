import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StateProvider } from "./stateProvider";

import { initialState } from "./reducer/reducer";
import Reducer from "./reducer/reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={Reducer}>
    <App />
  </StateProvider>,

  document.getElementById("root")
);
