import { type FC, useRef, type MouseEvent } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const GithubIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.1 5.1 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.1 5.1 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsAppIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const Contact: FC = () => {
  const socialLinks = [
    {
      platform: 'LinkedIn',
      handle: 'Kyrellos Sameh',
      icon: <LinkedinIcon className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/kyrellos-sameh/',
      color: 'text-[#0077b5] group-hover:text-[#0077b5]',
    },
    {
      platform: 'GitHub',
      handle: 'Kyrellos Sameh',
      icon: <GithubIcon className="w-6 h-6" />,
      url: 'https://github.com/KyrellosSameh',
      color: 'text-gray-300 group-hover:text-white',
    },
    {
      platform: 'Email',
      handle: 'kerlis447509@feng.bu.edu.eg',
      icon: <Mail className="w-6 h-6" aria-hidden="true" focusable="false" />,
      url: 'mailto:kerlis447509@feng.bu.edu.eg',
      color: 'text-cyber-cyan group-hover:text-cyber-cyan',
    },
  ];

  const waRef = useRef<HTMLDivElement>(null);

  const handleWaMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!waRef.current) return;
    const rect = waRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    waRef.current.style.setProperty('--mouse-x', `${x}px`);
    waRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-cyan-800 dark:text-cyber-cyan font-mono tracking-widest text-sm mb-2 uppercase text-shadow-cyan" aria-hidden="true">
            &gt; INITIATE_CONNECTION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
            Got a project in <span className="text-cyan-800 dark:text-cyber-cyan text-shadow-cyan font-mono">mind?</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl font-mono text-sm">
            Establish a secure link via the communication protocols below. My system is currently ONLINE and ready for new directives.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Left Column: Social Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 glass-card rounded-xl transition-all duration-300 hover:-translate-y-1 border border-transparent dark:border-glass-border dark:hover:border-cyber-cyan dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.4),inset_0_0_15px_rgba(6,182,212,0.2)] shadow-none bg-transparent group focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyber-cyan"
                aria-label={`Visit my ${social.platform}`}
              >
                <div className={`p-4 bg-slate-100 dark:bg-black/40 rounded-lg shadow-inner transition-colors duration-300 ${social.color}`}>
                  {social.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-1 uppercase tracking-widest font-mono">
                    {social.platform}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 font-mono text-sm group-hover:text-cyan-800 dark:group-hover:text-cyber-cyan transition-colors">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: CTA Card (Direct WhatsApp Chat) */}
          <div className="flex-[1.5]">
            <div
              ref={waRef}
              onMouseMove={handleWaMouseMove}
              className="h-full flex flex-col justify-center p-10 lg:p-14 glass-card bg-transparent dark:bg-[#050505]/60 border border-transparent dark:border-glass-border dark:hover:border-[#25D366]/50 rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-none dark:hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] relative overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://wa.me/201212828384', '_blank')}
            >

              {/* Decorative accent -> Mouse-tracking Spotlight Glow Overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,211,102,0.15) 0%, transparent 100%)'
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-105 group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/50 shadow-none dark:group-hover:drop-shadow-[0_0_15px_rgba(37,211,102,0.6)]">
                  <WhatsAppIcon className="w-12 h-12 text-[#25D366] transition-transform duration-500 group-hover:rotate-12" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-shadow-violet">
                  Direct Chat via WhatsApp
                </h3>

                <p className="text-slate-600 dark:text-gray-400 text-lg mb-10 leading-relaxed max-w-lg font-mono">
                  Bypass the forms and connect directly to my secure network. <br className="hidden md:block" />
                  <span className="text-slate-900 dark:text-white font-bold block mt-4">Start a conversation with Kyrellos.</span>
                </p>

                <a
                  href="https://wa.me/201212828384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/wa relative inline-flex items-center justify-center gap-3 overflow-hidden bg-transparent border-2 border-[#25D366] text-[#25D366] hover:text-[#0B0C10] dark:hover:text-white font-mono font-bold text-lg md:text-xl py-5 px-10 rounded-xl transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 uppercase tracking-widest shadow-none hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
                  aria-label="Chat on WhatsApp"
                >
                  <span className="absolute inset-0 w-full h-full bg-[#25D366] -translate-x-full group-hover/wa:translate-x-0 transition-transform duration-500 ease-out" aria-hidden="true" />
                  <span className="relative z-10 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 group-hover/wa:-translate-y-1 transition-transform duration-300" aria-hidden="true" focusable="false" />
                    Start Chat with me
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
