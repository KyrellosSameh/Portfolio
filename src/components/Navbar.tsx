import { useState, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo">
          Kyrellos<span className="accent">.</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {/* Close button inside the drawer */}
          <li className="nav-close-item">
            <button
              className="nav-close-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>

          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
