import { type FC } from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon: FC<{ className?: string }> = ({ className }) => (
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
 <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.1 5.1 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.1 5.1 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
 <path d="M9 18c-4.51 2-5-2-7-2"></path>
 </svg>
);
import { type Project } from '../../data/projectsData';

interface ProjectCardProps {
 project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
 return (
 <article className="flex flex-col h-full glass-card rounded-2xl overflow-hidden hover:border-cyan-600 dark:hover:border-cyber-cyan transition-all duration-500 group border border-slate-200 dark:border-slate-800/50 shadow-none dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1">
 {/* Thumbnail */}
 <div className="relative aspect-video overflow-hidden border-b border-glass-border">
 <img
 src={project.image}
 alt={`Screenshot of ${project.title}`}
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] to-transparent opacity-60 pointer-events-none" />
 <div className="absolute inset-0 bg-transparent group-hover:bg-cyber-cyan/10 transition-colors duration-500 pointer-events-none mix-blend-overlay" />
 </div>
 
 {/* Content */}
 <div className="p-8 flex flex-col flex-grow relative">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-wide uppercase text-shadow-violet">
 {project.title}
 </h3>
 <p className="text-slate-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed font-mono text-sm">
 {project.description}
 </p>
 
 {/* Glowing Tags */}
 <div className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
 {project.techStack.map((tag) => (
 <span 
 key={tag}
 className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyber-cyan/10 dark:border-cyber-cyan/30 dark:text-cyber-cyan text-xs font-mono rounded-full tracking-wider shadow-sm "
 >
 {tag}
 </span>
 ))}
 </div>
 
 {/* Actions */}
 <div className="flex flex-wrap gap-4 mt-auto">
 <a
 href={project.liveUrl}
 className="group/btn relative inline-flex items-center justify-center gap-2 text-cyan-700 hover:text-white dark:text-cyber-cyan dark:hover:text-[#0B0C10] font-mono font-bold px-5 py-2.5 overflow-hidden rounded border border-cyan-600 dark:border-cyber-cyan transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-cyan shadow-sm flex-1 min-w-[140px]"
 aria-label={`Live Demo for ${project.title}`}
 target="_blank"
 rel="noopener noreferrer"
 >
 <span className="absolute inset-0 w-full h-full bg-cyan-600 dark:bg-cyber-cyan -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" aria-hidden="true" />
 <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
 Live Demo
 <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" aria-hidden="true" />
 </span>
 </a>
 
 <a
 href={project.githubUrl}
 className="group/github inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-300 hover:border-slate-400 dark:bg-transparent dark:text-gray-300 dark:hover:text-white dark:border-gray-600 dark:hover:border-cyber-violet font-mono font-bold px-5 py-2.5 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-violet flex-1 min-w-[140px] dark:bg-white/5 backdrop-blur-sm"
 aria-label={`GitHub Repository for ${project.title}`}
 target="_blank"
 rel="noopener noreferrer"
 >
 <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
 GitHub
 <GithubIcon className="w-4 h-4 group-hover/github:scale-110 transition-transform duration-300" aria-hidden="true" />
 </span>
 </a>
 </div>
 </div>
 </article>
 );
};
