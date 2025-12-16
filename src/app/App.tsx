import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Articles } from './components/Articles';
import { Quiz } from './components/Quiz';
import { Curiosities } from './components/Curiosities';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleExplore = () => {
    scrollToSection('articles');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'articles', 'quiz', 'curiosities', 'gallery'];
      const scrollPosition = window.scrollY + 150;

      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }

      for (const section of sections.slice(1)) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <Hero onExplore={handleExplore} />
        
        <div id="articles">
          <Articles />
        </div>
        
        <div id="quiz">
          <Quiz />
        </div>
        
        <div id="curiosities">
          <Curiosities />
        </div>
        
        <div id="gallery">
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}