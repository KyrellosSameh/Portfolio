import { useRef, useState, useCallback } from 'react';
import './Projects.css';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
}
const projectsData: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A minimalist personal website focusing on performance, accessibility, and stunning UX design.',
    tags: ['HTML', 'CSS', 'React'],
    thumbnail: p1,
  },
  {
    title: 'Landing Page',
    description: 'Responsive landing page with smooth scroll animations and a captivating design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: p2,
  },
  {
    title: 'Physics lab simulation',
    description: 'Interactive physics lab simulation for University students and teachers to simulate and experiment with various physical phenomena.',
    tags: ['React', 'JavaScript', 'Physics', 'Simulation'],
    thumbnail: p3,
  },
];

const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateNavVisibility = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 4);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('.project-card') as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 16; // card width + gap
    sliderRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              My recent <span className="accent">works</span>
            </h2>
          </div>
        </div>

        <div className="slider-wrapper">
          {/* Desktop left button */}
          <button
            className="nav-btn nav-btn-left"
            onClick={() => scroll('left')}
            aria-label="Previous project"
            style={{ opacity: showLeft ? 1 : 0, pointerEvents: showLeft ? 'auto' : 'none' }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <div className="slider-track" ref={sliderRef} onScroll={updateNavVisibility} style={{ touchAction: 'pan-x' }}>
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-thumbnail">
                  <img src={project.thumbnail} alt="Project" className="project-img" />
                </div>
                <div className="project-details">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop right button */}
          <button
            className="nav-btn nav-btn-right"
            onClick={() => scroll('right')}
            aria-label="Next project"
            style={{ opacity: showRight ? 1 : 0, pointerEvents: showRight ? 'auto' : 'none' }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* Mobile-only nav row below slider */}
        <div className="mobile-nav-row">
          <button
            className="nav-btn"
            onClick={() => scroll('left')}
            aria-label="Previous project"
            style={{ opacity: showLeft ? 1 : 0, pointerEvents: showLeft ? 'auto' : 'none' }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="nav-btn"
            onClick={() => scroll('right')}
            aria-label="Next project"
            style={{ opacity: showRight ? 1 : 0, pointerEvents: showRight ? 'auto' : 'none' }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
