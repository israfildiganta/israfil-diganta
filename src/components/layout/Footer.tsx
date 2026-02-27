/**
 * Footer Component
 * Responsive footer with navigation links and copyright
 * Matches adhamdannaway.com footer style
 */

import { useCallback } from 'react';

const navigationLinks = [
  { label: 'about', href: '#/about' },
  { label: 'learn', href: '#/learn' },
  { label: 'portfolio', href: '#/portfolio' },
  { label: 'blog', href: '#/blog' },
  { label: 'contact', href: '#/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if this is a route link (starts with #/)
    if (href.startsWith('#/')) {
      e.preventDefault();
      window.location.hash = href.slice(1); // Remove # and set the hash
      return;
    }
    
    // For section links, scroll to the element
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F5F5F5]">
      {/* Back to Top Button - Centered above footer */}
      <div className="flex justify-center -mb-6 relative z-10">
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="bg-[#F5F5F5] text-[#333] p-3 rounded-full
                   hover:bg-[#e8e8e8] transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#333]/30 focus:ring-offset-2 focus:ring-offset-[#F5F5F5]
                   cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left: Copyright */}
          <p className="text-[#333] text-sm order-2 sm:order-1 mt-4 sm:mt-0">
            © {currentYear} Your Name
          </p>

          {/* Right: Navigation Links */}
          <nav 
            aria-label="Footer navigation" 
            className="order-1 sm:order-2"
          >
            <ul className="flex flex-wrap justify-center items-center gap-x-3 sm:space-x-4">
              {navigationLinks.map((link, index) => (
                <li key={link.label} className="flex items-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#555] text-sm uppercase tracking-wide 
                             hover:text-[#333] hover:opacity-80 transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-[#333]/20 focus:ring-offset-2 focus:ring-offset-[#F5F5F5] rounded-sm"
                  >
                    {link.label}
                  </a>
                  {/* Add separator dot between links (not after last) */}
                  {index < navigationLinks.length - 1 && (
                    <span className="text-[#999] text-sm ml-3 sm:ml-4" aria-hidden="true">
                      •
                    </span>
                  )}
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
