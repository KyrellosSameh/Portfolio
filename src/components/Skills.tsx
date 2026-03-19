import './Skills.css';

interface Skill {
  name: string;
  icon: string;
}

const technicalSkills: Skill[] = [
  { name: 'HTML', icon: 'fa-brands fa-html5' },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'TypeScript', icon: 'fa-solid fa-code' },
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
  { name: 'Git', icon: 'fa-brands fa-git-alt' },
  { name: 'Figma', icon: 'fa-brands fa-figma' },
];

const softSkills: Skill[] = [
  { name: 'Problem Solving', icon: 'fa-solid fa-puzzle-piece' },
  { name: 'Effective Communication', icon: 'fa-solid fa-comments' },
  { name: 'Multitasking', icon: 'fa-solid fa-layer-group' },
  { name: 'Teamwork', icon: 'fa-solid fa-users' },
  { name: 'Leadership', icon: 'fa-solid fa-flag' },
  { name: 'Time Management', icon: 'fa-solid fa-clock' },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="skill-card">
    <i className={`${skill.icon} skill-icon`}></i>
    <span className="skill-name">{skill.name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">
            My <span className="accent">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and capabilities I bring to every project.
          </p>
        </div>

        <div className="skills-body">
          <div className="skill-group">
            <h3 className="skill-group-title">
              <i className="fa-solid fa-code"></i> Technical Skills
            </h3>
            <div className="skills-grid">
              {technicalSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3 className="skill-group-title">
              <i className="fa-solid fa-lightbulb"></i> Soft Skills
            </h3>
            <div className="skills-grid">
              {softSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
