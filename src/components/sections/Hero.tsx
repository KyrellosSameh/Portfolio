import { type FC } from 'react';
import { ArrowRight, Download, Activity, Cpu, Hexagon } from 'lucide-react';
import { m, useReducedMotion, type Variants } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';

export const Hero: FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const floatVariants: Variants = {
    animate: {
      y: shouldReduceMotion ? 0 : [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const greetingWords = "Hello, I'm Kyrellos".split(" ");

  const typewriterText = useTypewriter({
    words: [
      'FRONTEND DEVELOPER',
      'SOFTWARE ENGINEER',
      'UI/UX ENTHUSIAST',
      'PROBLEM SOLVER',
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDelay: 5000,
  });

  return (
    <section id="home" className="min-h-dvh w-full pt-28 pb-16 grid items-center relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" aria-hidden="true" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Left side: Text Content */}
          <m.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-xl md:text-2xl font-mono text-slate-600 dark:text-gray-400 flex space-x-2 uppercase tracking-widest" aria-label="Greeting">
              {greetingWords.map((word, i) => (
                <m.span key={i} variants={textVariants} className="inline-block text-shadow-cyan text-cyan-800 dark:text-cyber-cyan">
                  {word}
                </m.span>
              ))}
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none flex flex-col items-center lg:items-start" aria-label="Creative Front-end Developer">
              <m.span variants={textVariants} className="inline-block text-slate-900 dark:text-white">CREATIVE</m.span>
              <m.div variants={textVariants} className="h-[2em] sm:h-[1.5em] md:h-[1.2em] mt-2 flex items-center">
                <span className="inline-block font-mono text-cyan-800 dark:text-cyber-cyan drop-shadow-none dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] text-3xl md:text-5xl lg:text-6xl">
                  {typewriterText}
                  <span className="inline-block w-[3px] h-[0.9em] bg-cyan-600 dark:bg-cyan-400 ml-1 animate-[pulse_1s_infinite] align-middle" aria-hidden="true" />
                </span>
              </m.div>
            </h1>

            <m.p variants={textVariants} className="text-lg text-slate-600 dark:text-gray-400 max-w-lg leading-relaxed font-mono text-sm md:text-base">
              I specialize in building visually stunning, high-performance web applications that deliver exceptional user experiences through the fusion of engineering logic and cyber-aesthetic design.
            </m.p>

            {/* Buttons */}
            <m.div variants={textVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <m.a
                href="#contact"
                className="group w-full sm:w-auto flex justify-center items-center gap-2 bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-gradient-to-r dark:from-cyber-cyan dark:to-cyber-violet dark:hover:from-cyan-400 dark:hover:to-purple-500 font-mono font-bold py-3 px-8 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:ring-offset-2 focus:ring-offset-[#0B0C10] shadow-none hover:-translate-y-1"
                aria-label="Hire me"
              >
                Hire me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" focusable="false" />
              </m.a>

              <m.a
                href="/cv.pdf"
                className="group w-full sm:w-auto flex justify-center items-center gap-2 bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-transparent dark:text-cyber-cyan border border-slate-200 dark:border-slate-800/50 dark:hover:bg-cyber-cyan/10 font-mono font-bold py-3 px-8 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:ring-offset-2 focus:ring-offset-[#0B0C10] shadow-none hover:-translate-y-1"
                aria-label="Download CV"
              >
                Download CV
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" aria-hidden="true" focusable="false" />
              </m.a>
            </m.div>
          </m.div>

          {/* Right side: Profile Image & HUD */}
          <div className="flex-1 flex justify-center lg:justify-center relative">
            <m.div
              className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-tr from-cyber-cyan/20 via-cyber-mint/20 to-cyber-violet/20 shadow-none hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] dark:hover:shadow-[0_0_100px_rgba(6,182,212,0.9)] transition-shadow duration-700 cursor-pointer group"
              variants={floatVariants}
              animate="animate"
            >
              {/* Outer HUD Rings */}
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-cyber-cyan/30 animate-[spin_20s_linear_infinite]" aria-hidden="true" />
              <div className="absolute inset-[-40px] rounded-full border border-cyber-violet/20 animate-[spin_30s_linear_infinite_reverse]" aria-hidden="true" />

              <img
                src="/profile.webp"
                alt="Kyrellos Sameh - Frontend Developer"
                className="w-full h-full object-cover rounded-full border-4 border-[#0B0C10] transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                width={384}
                height={384}
              />

              {/* Floating HUD Elements */}
              <div className="absolute -top-10 -right-10 glass-card p-3 rounded text-cyber-cyan font-mono text-xs animate-bounce border border-slate-200 dark:border-slate-800/50 shadow-none dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" aria-hidden="true">
                <Activity className="w-4 h-4 mb-1" aria-hidden="true" focusable="false" />
                SYS.OPT: 100%
              </div>
              <div className="absolute top-1/2 -left-16 glass-card p-2 rounded text-cyber-violet font-mono text-[10px] animate-pulse border border-slate-200 dark:border-slate-800/50 shadow-none dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" aria-hidden="true">
                <Cpu className="w-4 h-4 mb-1" aria-hidden="true" focusable="false" />
                DATA_STREAM
              </div>
              <div className="absolute -bottom-8 right-10 glass-card px-3 py-1.5 rounded flex items-center gap-2 text-cyber-mint font-mono text-xs animate-bounce border border-slate-200 dark:border-slate-800/50 shadow-none dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" aria-hidden="true" style={{ animationDelay: '0.5s' }}>
                <Hexagon className="w-4 h-4" aria-hidden="true" focusable="false" />
                FRONT-E.SECURE
              </div>
            </m.div>
          </div>

        </div>
      </div>
    </section>
  );
};
