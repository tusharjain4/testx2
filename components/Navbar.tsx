'use client';

import portfolio from '@/data/portfolio.json';

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'NN';
  return parts
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Navbar() {
  const logo = initials(portfolio.name || '');

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo-text">MS</h1>
          <div className="logo-divider" />
          <a href="#" aria-label="Home">
            <img
              src="/assets/images/img_subtract.svg"
              alt="Logo icon"
              className="logo-icon"
            />
          </a>
        </div>
        <button type="button" className="hamburger" aria-label="Menu">
          ☰
        </button>
        <nav className="nav-menu" role="menubar">
          <button type="button" role="menuitem">
            Home
          </button>
          <button type="button" role="menuitem">
            Work
          </button>
          <button type="button" role="menuitem">
            About
          </button>
        </nav>
      </div>
    </header>
  );
}
