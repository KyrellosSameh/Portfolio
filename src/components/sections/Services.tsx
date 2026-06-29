import { type FC, type MouseEvent, useRef } from 'react';
import { m, useReducedMotion, type Variants } from 'framer-motion';
import { Rocket, Code2, Sparkles } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicesData: Service[] = [
  {
    title: "Landing Pages & Portfolios",
    description: "Crafting high-impact, fast-loading landing pages and interactive personal portfolios designed to captivate visitors and maximize conversion rates.",
    icon: <Rocket className="w-8 h-8" aria-hidden="true" focusable="false" />
  },
  {
    title: "Custom Web Applications",
    description: "Building scalable, high-performance Single Page Applications (SPAs) tailored to complex business logic using the React and TypeScript ecosystem.",
    icon: <Code2 className="w-8 h-8" aria-hidden="true" focusable="false" />
  },
  {
    title: "Interactive UI & Motion",
    description: "Translating static designs into pixel-perfect, responsive interfaces with fluid animations and a modern cyber-aesthetic feel.",
    icon: <Sparkles className="w-8 h-8" aria-hidden="true" focusable="false" />
  }
];

const ServiceCard: FC<{ 
  service: Service; 
  variants: Variants; 
}> = ({ service, variants }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set properties directly on style for max performance without React state re-renders
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <m.div 
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      style={{ 
        '--skill-glow': 'rgba(6,182,212,0.4)', // cyan-500 equivalent for the spotlight
      } as React.CSSProperties}
      className="group relative flex flex-col p-8 glass-card bg-slate-100/50 dark:bg-slate-900/50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-slate-200 dark:border-slate-800/50 shadow-sm shadow-slate-200 dark:shadow-none overflow-hidden"
    >
      {/* Mouse-tracking Spotlight Glow Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--skill-glow) 0%, transparent 100%)'
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex flex-col items-start text-left">
        <div 
          className="mb-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm text-cyan-800 dark:text-[#06b6d4]"
        >
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white font-mono tracking-wide">
          {service.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </m.div>
  );
};

export const Services: FC = () => {
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
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-cyan-800 dark:text-cyber-cyan font-mono tracking-widest text-sm mb-2 uppercase text-shadow-cyan" aria-hidden="true">
            &gt; SYSTEM_SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            What I Do
          </h2>
        </div>
        
        {/* Services Grid */}
        <m.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              variants={itemVariants}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
};
