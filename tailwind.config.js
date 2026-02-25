/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom font family - Inter (Google Font)
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      
      // Custom font sizes - matching design system
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'hero-md': ['4.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'hero-lg': ['5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'section-md': ['3rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'section-lg': ['3.75rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        
        'subtitle': ['1.25rem', { lineHeight: '1.4', fontWeight: '400' }],
        'subtitle-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }],
        
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        
        'small': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small-md': ['0.9375rem', { lineHeight: '1.6', fontWeight: '400' }],
        
        'tiny': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.05em', textTransform: 'uppercase' }],
      },
      
      // Custom spacing scale
      spacing: {
        '18': '4.5rem',    // 72px
        '22': '5.5rem',    // 88px
        '26': '6.5rem',    // 104px
        '30': '7.5rem',    // 120px
        '34': '8.5rem',    // 136px
        '38': '9.5rem',    // 152px
        '42': '10.5rem',   // 168px
        '46': '11.5rem',   // 184px
        '50': '12.5rem',   // 200px
        'section-sm': '4rem',     // 64px
        'section-md': '6rem',     // 96px
        'section-lg': '8rem',     // 128px
        'section-xl': '12rem',    // 192px
      },
      
      // Custom transition defaults for smooth transitions
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'gentle': 'cubic-bezier(0.05, 0.7, 0.1, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      // Custom transition properties
      transitionProperty: {
        'all': 'all',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      
      // Custom colors - neutral palette
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      
      // Custom border radius
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      
      // Custom max-widths
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1536px',
        'container-max': '1440px',
      },
      
      // Custom letter spacing
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      
      // Animation utilities
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up': 'fadeInUp 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
