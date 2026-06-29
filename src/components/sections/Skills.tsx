import { type FC, type MouseEvent, useRef } from 'react';
import { m, useReducedMotion, type Variants } from 'framer-motion';
import { technicalSkills, softSkills, type Skill } from '../../data/skillsData';

const SkillCard: FC<{ 
  skill: Skill; 
  variants: Variants; 
}> = ({ skill, variants }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set properties directly on style to guarantee max Lighthouse performance without React state re-renders
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <m.div 
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      style={{ 
        '--skill-glow': skill.glow,
        '--skill-color': skill.color 
      } as React.CSSProperties}
      className="skill-card-dynamic group relative flex flex-col items-center justify-center p-6 glass-card rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-slate-200 dark:border-slate-800/50 shadow-sm shadow-slate-200 dark:shadow-none overflow-hidden"
    >
      {/* Mouse-tracking Spotlight Glow Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--skill-glow) 0%, transparent 100%)'
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <div 
          className="mb-3 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        <span className="text-slate-700 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white font-mono text-center text-sm md:text-base font-bold tracking-wide transition-colors">
          {skill.name}
        </span>
      </div>
    </m.div>
  );
};

export const Skills: FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-cyan-800 dark:text-cyber-cyan font-mono tracking-widest text-sm mb-2 uppercase text-shadow-cyan" aria-hidden="true">
            &gt; SYSTEM_CAPABILITIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            My Skills
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-mono mb-8 text-cyan-800 dark:text-cyber-violet border-b border-slate-200 dark:border-glass-border pb-4 uppercase tracking-widest text-shadow-violet">
              // Technical_Skills
            </h3>
            <m.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {technicalSkills.map((skill) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  variants={itemVariants}
                />
              ))}
            </m.div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-mono mb-8 text-teal-600 dark:text-cyber-mint border-b border-slate-200 dark:border-glass-border pb-4 uppercase tracking-widest shadow-sm dark:shadow-none">
              // Soft_Skills
            </h3>
            <m.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {softSkills.map((skill) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  variants={itemVariants}
                />
              ))}
            </m.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
