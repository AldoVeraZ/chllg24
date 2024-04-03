import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// Importar estilos en componente
import "./App.css"; // Asumiendo que creaste un archivo App.css

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
