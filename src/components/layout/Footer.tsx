/**
 * Footer Component
 * Minimalist footer with centered overlapping "Back to Top" button
 */

import { useCallback } from 'react';

const navigationLinks = [
  { label: 'about', href: '#about' },
  { label: 'learn', href: '#learn' },
  { label: 'portfolio', href: '#portfolio' },
  { label: 'blog', href: '#blog' },
  { label: 'contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative">
      {/* Back to Top Button - Centered, overlapping the top border */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-gray-500"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <div className="max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          {/* Left: Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 Israfil Diganta
          </p>

          {/* Right: Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex space-x-6">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
