import './Hero.css';
import myPhoto from '../assets/profile.jpg';
const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Decorative background elements */}
      <div className="hero-bg-decor">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="code-particles">
          <span className="particle">&lt;/&gt;</span>
          <span className="particle">&#123;&#125;</span>
          <span className="particle">&lt;div&gt;</span>
          <span className="particle">React</span>
          <span className="particle">JS</span>
          <span className="particle">CSS</span>
          <span className="particle">HTML</span>
          <span className="particle">const</span>
        </div>
      </div>

      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm Kyrellos</p>
          <h1 className="hero-title">
            CREATIVE <span className="accent">Front-End</span><br />
            <span className="accent">DEVELOPER</span>
          </h1>
          <p className="hero-desc">
            Computer Engineer &amp; Front-End Developer blending engineering precision with creative digital design.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <span>Hire me</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="../assets/Kyrellos_Sameh_CV.pdf" className="btn-outline" download = "Kyrellos_Sameh_CV.pdf">
              <span>Download CV</span>
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <img
              src={myPhoto}
              alt="Kyrellos Sameh — Software Engineer and Frontend Developer"
              className="profile-placeholder"
              width={380}
              height={380}
              fetchPriority="high"
            />
            <div className="profile-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
