// ============================================
// main.jsx — Hub Starter Kit
// ============================================
// Entry point. Wraps the app in BrowserRouter
// so React Router can handle navigation.
// ============================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
