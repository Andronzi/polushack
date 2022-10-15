import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "@redux/store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
