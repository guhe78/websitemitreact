import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "./contexts/Theme.context.jsx";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.scss";
import "./styles/carousel-overrides.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
