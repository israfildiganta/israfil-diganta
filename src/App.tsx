import { useState, useEffect } from 'react';
import { Layout } from './layout/Layout';
import { Container } from './components/layout/Container';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import { Contact } from './components/sections/Contact';
import { About } from './components/sections/About';
import { SelectedWork } from './components/sections/SelectedWork';
import { Blog } from './components/sections/Blog';
import { DualPersonaHero } from './components/sections/DualPersonaHero';
import { Learn } from './components/sections/Learn';
import profileImage from './assets/Israfil Diganta.png';
import './index.css';

const { Title, Paragraph, Text } = Typography;

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
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Title
              level={1}
              className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-3xl mb-8"
              style={{ fontWeight: 500 }}
            >
              About
            </Title>
          </motion.div>
        </Container>
      </section>
      <About 
        imageSrc={profileImage}
        imageAlt="Israfil Diganta"
      />
    </>
  );
}

function PortfolioPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Title
              level={1}
              className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-3xl mb-8"
              style={{ fontWeight: 500 }}
            >
              Portfolio
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-xl">
              A selection of my recent work and projects.
            </Paragraph>
          </motion.div>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <SelectedWork />
        </Container>
      </section>
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

      {/* Selected Work Preview */}
      <section id="work" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2} className="text-2xl font-medium mb-12" style={{ fontWeight: 500 }}>
              Selected Work
            </Title>
          </motion.div>
          
          <SelectedWork />
          
          <motion.div className="mt-8">
            <a
              href="#/portfolio"
              className="inline-block text-lg border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              View All Work →
            </a>
          </motion.div>
        </Container>
      </section>

      {/* About Preview */}
      <section id="about" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2} className="text-2xl font-medium mb-12" style={{ fontWeight: 500 }}>
              About
            </Title>
          </motion.div>
          
          <About 
            imageSrc={profileImage}
            imageAlt="Israfil Diganta"
          />
          
          <motion.div className="mt-8">
            <a
              href="#/about"
              className="inline-block text-lg border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              More About Me →
            </a>
          </motion.div>
        </Container>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2} className="text-2xl font-medium mb-6" style={{ fontWeight: 500 }}>
              Get in Touch
            </Title>
            <Paragraph className="text-lg text-gray-600 mb-8">
              Have a project in mind? Let's talk.
            </Paragraph>
            <motion.a
              href="#/contact"
              className="inline-block text-lg border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Contact Page →
            </motion.a>
          </motion.div>
        </Container>
      </section>
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
