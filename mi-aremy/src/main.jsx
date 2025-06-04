// src/main.jsx o src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";   // <-- aquí IMPORTAS tu CSS global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
