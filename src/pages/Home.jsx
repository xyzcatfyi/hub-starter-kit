// ============================================
// Home — Hub Starter Kit
// ============================================
// Landing page after login.
// Displays Hub identity and links to each module.
//
// TO ADD A MODULE CARD:
// 1. Add an entry to the MODULES array below
// 2. That's it.
// ============================================

import { Link } from "react-router-dom";

// — Module registry —
// Add a new object here for each module you add to the Hub.
const MODULES = [
  {
    id: "module-one",
    title: "Module One",
    description: "Placeholder — replace with module purpose.",
    path: "/module-one",
  },
  {
    id: "module-two",
    title: "Module Two",
    description: "Placeholder — replace with module purpose.",
    path: "/module-two",
  },
];

function Home({ theme }) {
  return (
    <div className="home">

      {/* — Identity — */}
      <div className="home__header">
        <h1 className="home__title">hub</h1>
        <p className="home__tagline">Your stuff. In one place.</p>
      </div>

      {/* — Module cards — */}
      <div className="home__grid">
        {MODULES.map((mod) => (
          <Link key={mod.id} to={mod.path} className="home__card">
            <span className="home__card-title">{mod.title}</span>
            <span className="home__card-desc">{mod.description}</span>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Home;