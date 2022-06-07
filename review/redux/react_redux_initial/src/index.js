import React from "react";
import ReactDOM from "react-dom/client";
//*this provides the store to where ever it is needed
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
//*The file where the store is exported from
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //*entire APP has access to the store
  <Provider store={store}>
    <App />
  </Provider>
);
