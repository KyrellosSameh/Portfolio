import { type FC, useRef, type MouseEvent } from 'react';
import { m } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date?: string;
  description: string;
  type: 'experience' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 'edu1',
    type: 'education',
    title: 'B.Sc. Computer Engineering',
    organization: 'Faculty of Engineering, Shoubra',
    date: '2023-2028',
    description: 'Comprehensive study of computer architecture, software engineering, and advanced mathematics.',
  },
  {
    id: 'edu2',
    type: 'education',
    title: 'Front-End Development Track',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: 'Present',
    description: 'Intensive training in modern front-end technologies and web performance optimization.',
  },
  {
    id: 'exp1',
    type: 'experience',
    title: 'Freelance Frontend Developer',
    organization: 'Self-Employed / Various Clients',
    date: 'Present',
    description: "Engineered full-stack web applications including 'FailSafe Lab' (physics simulator) and a University Academic Advisor platform. Delivered custom solutions for various clients using React and TypeScript.",
  },
  {
    id: 'exp2',
    type: 'experience',
    title: ' Programming Instructor ',
    organization: 'El_Agaiby',
    date: '2026',
    description: 'Teaching programming fundamentals to students using modern tools.',
  }
];

const TimelineCard: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const isEven = index % 2 === 0;

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Spacer for timeline centering */}
      <div className="hidden md:block w-5/12"></div>

      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-100 dark:bg-[#0B0C10] border-2 border-cyan-500 shadow-none z-10 flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 -ml-[2px] md:ml-0">
        {item.type === 'experience' ? (
          <Briefcase className="w-3.5 h-3.5 text-cyan-800 dark:text-cyber-cyan" />
        ) : (
          <GraduationCap className="w-3.5 h-3.5 text-cyan-800 dark:text-cyber-cyan" />
        )}
      </div>

      {/* Card */}
      <div className="w-full pl-14 md:pl-0 md:w-5/12">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative glass-card rounded-2xl p-6 md:p-8 overflow-hidden group transition-all duration-300 shadow-none dark:shadow-none hover:-translate-y-1 hover:border-cyan-600 dark:hover:border-cyber-cyan bg-transparent"
        >
          {/* Spotlight Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.08) 0%, transparent 100%)'
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-wide uppercase">
              {item.title}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <span className="text-cyan-800 dark:text-cyber-cyan font-mono text-sm tracking-wide font-semibold">
                {item.organization}
              </span>
              <span className="hidden md:inline-block text-slate-400 dark:text-slate-600">|</span>
              {item.date && (
                <span className="text-slate-500 dark:text-slate-400 font-mono text-xs tracking-widest uppercase">
                  {item.date}
                </span>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export const ExperienceEducation: FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-cyan-800 dark:text-cyber-cyan font-mono tracking-widest text-sm mb-2 uppercase text-shadow-cyan" aria-hidden="true">
            &gt; CAREER_PATH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
            Experience & <span className="text-cyan-800 dark:text-cyber-cyan text-shadow-cyan font-mono">Education</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/80 via-cyan-500/20 to-transparent transform -translate-x-1/2 md:-translate-x-1/2" />

          {/* Items */}
          <div className="relative pt-8">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
