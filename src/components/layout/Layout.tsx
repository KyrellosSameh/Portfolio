import { type FC, type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden flex flex-col bg-slate-50 dark:bg-[#0B0C10] text-slate-900 dark:text-[#06b6d4] font-sans selection:bg-cyan-500/30 selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-0" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
