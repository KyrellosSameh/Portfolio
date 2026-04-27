import { Helmet } from 'react-helmet-async'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Helmet>
        <title>Kyrellos Sameh | Software Engineer &amp; Frontend Developer</title>
        <meta
          name="description"
          content="Kyrellos Sameh — Computer Engineer & Frontend Developer specializing in React, TypeScript, JavaScript, and UI/UX design. Building performant, accessible, and beautifully crafted web experiences."
        />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
