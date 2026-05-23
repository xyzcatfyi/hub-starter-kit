// ============================================
// App — Hub Starter Kit
// ============================================
// Root component. Owns auth and theme state.
// Passes theme down to Nav and all modules as props.
//
// TO ADD A NEW MODULE:
// 1. Import it here
// 2. Add a Route inside the Routes block
// 3. Add a NavLink in Nav.jsx
// ============================================

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import ModuleOne from "./pages/ModuleOne.jsx";
import ModuleTwo from "./pages/ModuleTwo.jsx";
import Nav from "./components/Nav.jsx";
import { useTheme } from "xyzcat-ui";

function App() {
  // — Auth —
  // Persists login state across page refreshes via localStorage
  const [authed, setAuthed] = useState(
    () => localStorage.getItem("hub_authed") === "true",
  );

  // — Theme —
  // Hub shell owns theme state and passes it down to all modules
  const { theme, toggleTheme } = useTheme();

  function handleLogin(password) {
    if (password === import.meta.env.VITE_HUB_PASSWORD) {
      localStorage.setItem("hub_authed", "true");
      setAuthed(true);
    } else {
      alert("Wrong password");
    }
  }

  function handleLogout() {
    localStorage.removeItem("hub_authed");
    setAuthed(false);
  }

  // Show login screen if not authenticated
  if (!authed)
    return (
      <div data-theme={theme}>
        <Login onLogin={handleLogin} />
      </div>
    );

  return (
    <div data-theme={theme}>
      <Nav onLogout={handleLogout} theme={theme} onToggle={toggleTheme} />
      <main>
        <Routes>
          {/* Default route — Hub landing page */}
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/module-one" element={<ModuleOne theme={theme} />} />
          <Route path="/module-two" element={<ModuleTwo theme={theme} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
