import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "../src/redux/storage";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
