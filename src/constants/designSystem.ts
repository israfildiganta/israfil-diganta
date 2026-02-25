/**
 * Design System Constants
 * Based on adhamdannaway.com typography inspiration
 * Minimal and premium aesthetic
 */

// Container widths for different breakpoints
export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  max: '1440px',
} as const;

// Section spacing for consistent vertical rhythm
export const section = {
  py: {
    sm: '4rem',    // 64px
    md: '6rem',    // 96px
    lg: '8rem',    // 128px
    xl: '12rem',   // 192px
  },
  gap: {
    sm: '1.5rem',  // 24px
    md: '2rem',    // 32px
    lg: '4rem',    // 64px
    xl: '6rem',    // 96px
  },
} as const;

// Font scale for consistent typography
export const fontScale = {
  // Hero title - largest, most prominent
  hero: {
    size: {
      base: '3.75rem',    // 60px
      md: '4.5rem',       // 72px
      lg: '5rem',         // 80px
    },
    height: '1.1',
    weight: '700',
    tracking: '-0.02em',
  },
  
  // Section title - major headings
  sectionTitle: {
    size: {
      base: '2.25rem',    // 36px
      md: '3rem',         // 48px
      lg: '3.75rem',      // 60px
    },
    height: '1.2',
    weight: '600',
    tracking: '-0.01em',
  },
  
  // Subtitle - secondary headings
  subtitle: {
    size: {
      base: '1.25rem',    // 20px
      md: '1.5rem',       // 24px
    },
    height: '1.4',
    weight: '400',
  },
  
  // Body text - main content
  body: {
    size: {
      base: '1rem',       // 16px
      md: '1.125rem',     // 18px
    },
    height: '1.7',
    weight: '400',
  },
  
  // Small text - captions, labels
  small: {
    size: {
      base: '0.875rem',   // 14px
      md: '0.9375rem',    // 15px
    },
    height: '1.6',
    weight: '400',
  },
  
  // Tiny text - metadata, fine print
  tiny: {
    size: '0.75rem',      // 12px
    height: '1.5',
    weight: '500',
    tracking: '0.05em',
    transform: 'uppercase',
  },
} as const;

// Animation durations
export const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
  slowest: '1000ms',
} as const;

// Transition easing functions
export const easing = {
  // Smooth, natural ease-out
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // More pronounced easing
  emphasized: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Ease-in-out for full transitions
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Subtle deceleration
  gentle: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
  // Spring-like effect
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

// Z-index scale
export const zIndex = {
  base: '0',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modal: '1040',
  popover: '1050',
  tooltip: '1060',
} as const;

// Border radius scale
export const radius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  full: '9999px',
} as const;

// Colors - neutral palette for premium feel
export const colors = {
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
  primary: {
    DEFAULT: '#171717',
    light: '#404040',
    dark: '#0a0a0a',
  },
} as const;

// Default animation configurations
export const animations = {
  transition: {
    property: 'all',
    duration: duration.normal,
    timingFunction: easing.smooth,
  },
  fadeIn: {
    keyframes: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    duration: duration.normal,
  },
  slideUp: {
    keyframes: {
      from: { opacity: '0', transform: 'translateY(20px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    duration: duration.slow,
  },
} as const;

// Breakpoint values for reference
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Design system export - combines all tokens
export const designSystem = {
  container,
  section,
  fontScale,
  duration,
  easing,
  zIndex,
  radius,
  colors,
  animations,
  breakpoints,
} as const;

export default designSystem;
