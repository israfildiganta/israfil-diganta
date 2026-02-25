/**
 * Footer Component
 * Responsive footer with navigation links and copyright
 * Matches adhamdannaway.com footer style
 */

const navigationLinks = [
  { label: 'about', href: '#about' },
  { label: 'learn', href: '#learn' },
  { label: 'portfolio', href: '#portfolio' },
  { label: 'blog', href: '#blog' },
  { label: 'contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left: Copyright */}
          <p className="text-[#333] text-sm order-2 sm:order-1 mt-4 sm:mt-0">
            © {currentYear} Israfil Diganta
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
