import { type FC } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { m, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: FC = () => {
 const { theme, toggleTheme } = useTheme();

 return (
 <button
 type="button"
 onClick={toggleTheme}
 aria-label="Toggle Dark Mode"
 className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-black/20 backdrop-blur-sm border border-slate-300 dark:border-cyber-cyan/30 text-slate-600 dark:text-cyber-cyan hover:bg-slate-200 dark:hover:bg-cyber-cyan/10 hover:shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyber-cyan overflow-hidden"
 >
 <AnimatePresence mode="wait" initial={false}>
 {theme === 'light' ? (
 <m.div
 key="moon"
 initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
 animate={{ opacity: 1, rotate: 0, scale: 1 }}
 exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
 transition={{ duration: 0.2 }}
 className="flex items-center justify-center"
 >
 <FaMoon className="w-5 h-5 text-slate-700 dark:text-cyber-cyan" aria-hidden="true" focusable="false" />
 </m.div>
 ) : (
 <m.div
 key="sun"
 initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
 animate={{ opacity: 1, rotate: 0, scale: 1 }}
 exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
 transition={{ duration: 0.2 }}
 className="flex items-center justify-center"
 >
 <FaSun className="w-5 h-5 text-amber-400" aria-hidden="true" focusable="false" />
 </m.div>
 )}
 </AnimatePresence>
 </button>
 );
};
