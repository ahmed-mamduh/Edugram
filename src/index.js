import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; 
import "./index.css";
import Home from "./pages/Home";
import { store } from "./store/store";

const root = createRoot(document.getElementById("root")); 
root.render(
  <Provider store={store}> 
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>
);
