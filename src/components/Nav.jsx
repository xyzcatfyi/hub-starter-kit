// ============================================
// Nav — Hub Starter Kit
// ============================================
// Top navigation bar for the Hub shell.
// Receives theme and toggle from App (Hub owns theme state).
// Add new module links here when adding modules.
// ============================================

import { NavLink } from "react-router-dom";
import { ThemeToggle } from "xyzcat-ui";

function Nav({ onLogout, theme, onToggle }) {
  return (
    <nav className="hub-nav">
      <span className="hub-nav__title">hub</span>
      <div className="hub-nav__links">
        {/* Add NavLinks here for each module */}
        <NavLink to="/module-one">Module One</NavLink>
        <NavLink to="/module-two">Module Two</NavLink>
      </div>
      <ThemeToggle theme={theme} onToggle={onToggle} />
      <button onClick={onLogout}>Log out</button>
    </nav>
  );
}

export default Nav;
