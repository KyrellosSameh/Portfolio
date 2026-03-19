import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-copy">
          &copy; 2026 <span className="accent">Kyrellos Sameh</span>. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
