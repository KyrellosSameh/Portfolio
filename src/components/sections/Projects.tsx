import { useState, type FC } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const Projects: FC = () => {
 const [visibleCount, setVisibleCount] = useState(3);

 const displayedProjects = projectsData.slice(0, visibleCount);

 const handleShowLess = () => {
   document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
   setTimeout(() => {
     setVisibleCount(3);
   }, 300); // Wait for scroll to initiate before unmounting cards
 };

 return (
 <section id="projects" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-black/20">
 <div className="container mx-auto px-4 md:px-6 relative z-10">
 
 {/* Section Header */}
 <div className="mb-12 text-center md:text-left">
 <p className="text-cyan-800 dark:text-cyber-cyan font-mono tracking-widest text-sm mb-2 uppercase text-shadow-cyan" aria-hidden="true">
 &gt; DEPLOYED_ASSETS
 </p>
 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
 My recent works
 </h2>
 </div>
 
 {/* Projects Grid */}
 <m.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 <AnimatePresence mode="popLayout">
 {displayedProjects.map((project) => (
 <m.div
 key={project.id}
 layout
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.9, y: 20 }}
 transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
 className="h-full"
 >
 <ProjectCard project={project} />
 </m.div>
 ))}
 </AnimatePresence>
 </m.div>
 
 {/* Pagination Buttons */}
 {projectsData.length > 3 && (
 <m.div layout className="mt-16 flex justify-center gap-6">
 {visibleCount < projectsData.length && (
 <button
 onClick={() => setVisibleCount((prev) => prev + 3)}
 className="group relative inline-flex items-center justify-center gap-2 text-cyan-700 hover:text-white dark:text-cyber-cyan dark:hover:text-[#0B0C10] border border-cyan-600 dark:border-cyber-cyan bg-transparent font-mono font-bold px-8 py-3 rounded overflow-hidden transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyber-cyan min-w-[160px]"
 >
 <span className="absolute inset-0 w-full h-full bg-cyan-600 dark:bg-cyber-cyan -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" aria-hidden="true" />
 <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
 Show More
 <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" aria-hidden="true" />
 </span>
 </button>
 )}
 {visibleCount > 3 && (
 <button
 onClick={handleShowLess}
 className="group inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-300 hover:border-slate-400 dark:bg-transparent dark:text-gray-300 dark:hover:text-white dark:border-gray-600 dark:hover:border-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 tracking-widest uppercase text-sm min-w-[160px] font-mono font-bold px-8 py-3 rounded"
 >
 Show Less
 </button>
 )}
 </m.div>
 )}
 
 </div>
 </section>
 );
};
