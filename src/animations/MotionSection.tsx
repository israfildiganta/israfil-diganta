import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionSectionProps {
  children: ReactNode;
  /** Optional className for additional styling */
  className?: string;
  /** Optional delay before animation starts */
  delay?: number;
  /** Optional custom variants (defaults to slideUp) */
  variants?: Variants;
  /** Optional id for the section */
  id?: string;
}

/**
 * A reusable motion section wrapper that:
 * - Triggers animation once on scroll (using whileInView)
 * - Uses smooth 0.6s duration with easeOut
 * - Has subtle motion (no dramatic effects)
 * - Provides a clean, professional feel
 */
export function MotionSection({
  children,
  className = '',
  delay = 0,
  variants,
  id,
}: MotionSectionProps) {
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        delay: delay,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true, // Animation triggers only once on scroll
        margin: '-100px', // Start animation before element is fully in view
        amount: 0.2, // Trigger when 20% of element is visible
      }}
      variants={variants || defaultVariants}
    >
      {children}
    </motion.section>
  );
}

export default MotionSection;
