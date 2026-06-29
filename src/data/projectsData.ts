export type ProjectCategory = 'web' | 'engineering';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: ProjectCategory;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'FailSafe Lab',
    description: 'A virtual physics lab simulator.',
    image: '/project-1.png',
    techStack: ['React 19', 'TypeScript', 'Supabase'],
    liveUrl: 'https://failsafe-lab.vercel.app/',
    githubUrl: 'https://github.com/KyrellosSameh/failsafe-lab',
    category: 'engineering'
  },
  {
    id: 2,
    title: 'Beshoy Portfolio',
    description: 'A profissional portfolio for a graphic designer.',
    image: '/project-2.png',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://beshoy-portfolio-alpha.vercel.app/',
    githubUrl: 'https://github.com/KyrellosSameh/beshoy-portfolio',
    category: 'web'
  },
  {
    id: 3,
    title: 'Amr Portfolio',
    description: 'A profissional portfolio for an AI Engineer.',
    image: '/project-3.png',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://amr-portfolio-coral.vercel.app/',
    githubUrl: 'https://github.com/KyrellosSameh/amr-portfolio',
    category: 'web'
  },
  {
    id: 4,
    title: 'FinTech Wallet Portal',
    description: 'A highly secure, sleek digital wallet dashboard allowing users to track crypto and fiat transactions with live market charts.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4fec07?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'web'
  },
  {
    id: 5,
    title: 'AI Content Forge',
    description: 'A generative AI prompt interface that allows users to rapidly prototype, edit, and organize machine-generated copy and code snippets.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Tailwind', 'OpenAI API', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'web'
  }
];
