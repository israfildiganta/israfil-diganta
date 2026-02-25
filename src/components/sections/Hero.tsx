import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

interface HeroProps {
  headline: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export function Hero({ headline, description, ctaText, onCtaClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <Container>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold text-black leading-tight mb-6"
          >
            {headline}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-black text-white text-base font-medium rounded-none hover:bg-gray-900 transition-colors duration-200"
            >
              {ctaText}
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
