import { useState, useEffect } from 'react';
import { Layout } from './layout/Layout';
import { Contact } from './components/sections/Contact';
import { About } from './components/sections/About';
import { Blog } from './components/sections/Blog';
import { DualPersonaHero } from './components/sections/DualPersonaHero';
import { SelectedWork } from './components/sections/SelectedWork';
import { Portfolio } from './components/sections/Portfolio';
import { Learn } from './components/sections/Learn';
import './index.css';

// Route definitions
type Route = '/' | '/contact' | '/about' | '/portfolio' | '/blog' | '/learn';

// Simple hash-based routing
function useHashRoute() {
  const [hash, setHash] = useState<Route>(() => {
    const path = window.location.hash.slice(1) || '/';
    // Handle both /contact and contact as valid contact routes
    if (path === '/contact' || path === 'contact') {
      return '/contact' as Route;
    }
    // Default valid routes
    if (['/', '/about', '/portfolio', '/blog', '/learn'].includes(path)) {
      return path as Route;
    }
    return '/' as Route;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.slice(1) || '/';
      if (path === '/contact' || path === 'contact') {
        setHash('/contact' as Route);
      } else if (['/', '/about', '/portfolio', '/blog', '/learn'].includes(path)) {
        setHash(path as Route);
      } else {
        setHash('/' as Route);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return hash;
}

// Page components
function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}

function PortfolioPage() {
  return (
    <>
      <Portfolio />
    </>
  );
}

function LearnPage() {
  return (
    <>
      <Learn />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Blog />
    </>
  );
}

function HomePage() {
  return (
    <>
      {/* Dual Persona Hero Section */}
      <DualPersonaHero />

      {/* Selected Work Preview - 2 items */}
      <SelectedWork title="Selected Work" limit={2} />
    </>
  );
}

function App() {
  const hash = useHashRoute();

  // Route rendering
  const renderRoute = () => {
    switch (hash) {
      case '/about':
        return <AboutPage />;
      case '/portfolio':
        return <PortfolioPage />;
      case '/learn':
        return <LearnPage />;
      case '/blog':
        return <BlogPage />;
      case '/contact':
        return <Contact />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderRoute()}
    </Layout>
  );
}

export default App;
