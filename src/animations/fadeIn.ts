import type { Variants } from 'framer-motion';

/**
 * Standard animation duration for smooth, professional transitions
 */
export const ANIMATION_DURATION = 0.6;

/**
 * Easing curve for smooth, professional motion
 * Uses easeOut for a natural deceleration feel
 */
export const ANIMATION_EASE = 'easeOut';

/**
 * Fade in animation variants
 * Creates a subtle, professional fade effect from opacity 0 to 1
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    },
  },
};

/**
 * Fade in from specific direction variants
 * Used when you want to combine fade with a subtle directional movement
 */
export const fadeInFromVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
    },
  },
};
