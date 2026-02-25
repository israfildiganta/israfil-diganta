import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Menu, Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { key: 'work', label: 'Work', href: '#work' },
  { key: 'about', label: 'About', href: '#about' },
  { key: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-black hover:opacity-70 transition-opacity"
          >
            Your Name
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-sm font-medium text-black hover:text-gray-600 transition-colors group"
              >
                {item.label}
                <motion.span
                  className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="text-black">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <Menu
                mode="vertical"
                items={navItems.map((item) => ({
                  key: item.key,
                  label: (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-black"
                    >
                      {item.label}
                    </a>
                  ),
                }))}
                className="bg-transparent border-none"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
