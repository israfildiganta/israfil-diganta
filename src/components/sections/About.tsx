import { motion, type Variants } from 'framer-motion';
import { Container } from '../layout/Container';

interface AboutProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1] as const,
      delay: 0.2,
    },
  },
};

export function About({
  title = 'About',
  description = `I'm a multidisciplinary designer and developer crafting digital experiences that bridge the gap between aesthetics and functionality. With over 5 years of experience, I specialize in creating intuitive interfaces and robust applications that solve real-world problems.

My approach combines strategic thinking with meticulous attention to detail, ensuring every project not only meets but exceeds expectations. I believe in the power of simplicity and the importance of user-centered design.

When I'm not designing or coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the design community.`,
  imageSrc = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face',
  imageAlt = 'Portrait of the designer',
}: AboutProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-8">
              {title}
            </h2>
            
            <div className="space-y-6">
              {description.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-neutral-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats / Additional Info */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: '5+', label: 'Years Experience' },
                  { value: '50+', label: 'Projects Completed' },
                  { value: '20+', label: 'Happy Clients' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-semibold text-black">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image / Styled Block */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative overflow-hidden bg-neutral-100 aspect-[4/5] md:aspect-auto md:h-full min-h-[400px]">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-neutral-900" />
              
              {/* Image */}
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover mix-blend luminosity opacity-80"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-black text-white px-6 py-4">
              <span className="text-sm font-medium tracking-wide">
                Available for projects
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
