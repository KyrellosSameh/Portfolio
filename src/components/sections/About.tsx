import { type FC } from 'react';

export const About: FC = () => {
 const bioDetails = {
 "sys.name": "Kyrellos Sameh",
 "sys.role": "Frontend Developer",
 "sys.class": "Engineer",
 "sys.status": "ONLINE",
 "sys.location": "Global_Network"
 };

 return (
 <section id="about" className="py-24 relative overflow-hidden">
 <div className="container mx-auto px-4 md:px-6 relative z-10">
 
 {/* Section Header */}
 <div className="mb-16">
 <p className="text-cyan-800 dark:text-cyber-cyan font-mono tracking-widest text-sm mb-2 uppercase text-shadow-cyan" aria-hidden="true">
 &gt; WHO_I_AM
 </p>
 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-wider" id="about-heading">
 About me
 </h2>
 </div>
 
 <div className="flex flex-col lg:flex-row gap-12 items-center">
 
 {/* Left side: Bio text */}
 <div className="flex-1 space-y-6 text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-mono text-sm md:text-base">
 <p>
 I am a passionate <strong className="text-cyan-800 dark:text-cyber-cyan text-shadow-cyan font-semibold">Frontend Developer</strong> operating at the intersection of engineering logic and creative UI/UX design. My digital journey is fueled by a relentless obsession with architecting scalable, pixel-perfect, and universally accessible interfaces.
 </p>
 <p>
 By leveraging advanced stacks like <span className="text-cyan-700 dark:text-cyber-violet font-bold text-shadow-violet">React, TypeScript, and Tailwind CSS</span>, I construct robust front-end systems that don't just function flawlessly—they deliver a premium, immersive, and magical user experience across the network.
 </p>
 </div>
 
 {/* Right side: Futuristic JSON Code Editor */}
 <div className="flex-1 w-full max-w-xl">
 <div className="glass-card rounded-xl overflow-hidden relative group">
 {/* Animated scanning line (simulated via CSS) */}
 <div className="absolute top-0 left-0 w-full h-0.5 bg-cyber-mint opacity-50" />

 {/* Terminal title bar */}
 <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-glass-border bg-slate-100 dark:bg-black/40" aria-hidden="true">
 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 "></div>
 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 "></div>
 <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 "></div>
 <div className="flex-1 text-center text-xs text-slate-500 dark:text-cyber-mint font-mono opacity-80 uppercase tracking-widest">
 identity_payload.json
 </div>
 </div>
 
 {/* Code content */}
 <div className="p-6 overflow-x-auto text-sm md:text-base font-mono bg-slate-50 dark:bg-[#050505]/80">
 <pre className="text-slate-600 dark:text-gray-300" aria-label="Bio JSON Data">
 <span className="text-slate-400 dark:text-cyber-mint/50">{'{\n'}</span>
 {Object.entries(bioDetails).map(([key, value], index, array) => (
 <div key={key} className="pl-4 hover:bg-slate-200 dark:hover:bg-white/5 transition-colors duration-200">
 <span className="text-teal-700 dark:text-cyber-violet">"{key}"</span>
 <span className="text-slate-400 dark:text-cyber-mint/50">: </span>
 <span className="text-cyan-800 dark:text-cyber-cyan">"{value}"</span>
 {index < array.length - 1 && <span className="text-slate-400 dark:text-cyber-mint/50">,</span>}
 </div>
 ))}
 <span className="text-slate-400 dark:text-cyber-mint/50">{'}'}</span>
 </pre>
 </div>
 
 </div>
 </div>
 
 </div>
 </div>
 </section>
 );
};
