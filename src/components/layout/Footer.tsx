import { type FC } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: FC = () => {
 const scrollToTop = () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 return (
 <footer className="bg-white dark:bg-[#0B0C10] py-8 mt-auto border-t border-slate-200 dark:border-cyan-500/20 relative overflow-hidden transition-colors duration-300">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-600 dark:via-cyber-cyan to-transparent opacity-50" aria-hidden="true" />
 <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
 {/* Copyright */}
 <p className="text-slate-500 dark:text-gray-400 font-mono text-xs md:text-sm mb-4 md:mb-0 uppercase tracking-widest">
 © 2026 Kyrellos Sameh. All rights reserved.
 </p>

 {/* Links */}
 <nav className="flex space-x-6 mb-4 md:mb-0" aria-label="Footer Navigation">
 {['Privacy Policy', 'Terms of Service'].map((link) => (
 <a
 key={link}
 href="#"
 className="text-slate-500 hover:text-cyan-800 dark:text-gray-400 dark:hover:text-cyber-cyan hover:text-shadow-cyan transition-all font-mono text-xs uppercase tracking-widest"
 >
 {link}
 </a>
 ))}
 </nav>

 {/* Back to top */}
 <button
 onClick={scrollToTop}
 type="button"
 className="p-3 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 dark:bg-transparent dark:border-cyber-cyan/30 dark:text-cyber-cyan dark:hover:bg-cyber-cyan dark:hover:text-[#0B0C10] border rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyber-cyan shadow-sm "
 aria-label="Back to top"
 >
 <ArrowUp className="w-5 h-5" aria-hidden="true" focusable="false" />
 </button>
 </div>
 </footer>
 );
};
