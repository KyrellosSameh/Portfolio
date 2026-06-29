import { useState, useEffect, type FC } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (targetId === 'home' || targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', window.location.pathname);
      return;
    }

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-[#0B0C10]/80 backdrop-blur-md shadow-none border-b border-slate-200 dark:border-glass-border py-3' : 'bg-transparent border-b border-transparent py-5 shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '')}
          className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors"
          aria-label="Home"
        >
          Kyrellos<span className="text-cyan-800 dark:text-cyber-cyan dark:[text-shadow:0_0_8px_rgba(6,182,212,0.6)]">.</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => {
            const targetId = link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
                className="text-slate-600 hover:text-cyan-800 dark:text-gray-300 dark:hover:text-cyber-cyan dark:hover: transition-all duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
