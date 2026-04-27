import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-copy">
          &copy; 2026 <span className="accent">Kyrellos Sameh</span>. All rights reserved.
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
