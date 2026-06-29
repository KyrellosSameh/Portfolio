import { Suspense, lazy } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { FadeIn } from './components/animations/FadeIn';
import { LazyMotion, domAnimation } from 'framer-motion';

const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./components/sections/Services').then(module => ({ default: module.Services })));
const Skills = lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const ExperienceEducation = lazy(() => import('./components/sections/ExperienceEducation').then(module => ({ default: module.ExperienceEducation })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Layout>
        <FadeIn direction="up">
          <Hero />
        </FadeIn>
        <Suspense fallback={<div className="h-[20vh] w-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin" /></div>}>
          <FadeIn direction="up">
            <About />
          </FadeIn>
          <FadeIn direction="up">
            <Services />
          </FadeIn>
          <FadeIn direction="up">
            <Skills />
          </FadeIn>
          <FadeIn direction="up">
            <ExperienceEducation />
          </FadeIn>
          <FadeIn direction="up">
            <Projects />
          </FadeIn>
          <FadeIn direction="up">
            <Contact />
          </FadeIn>
        </Suspense>
      </Layout>
    </LazyMotion>
  );
}

export default App;
