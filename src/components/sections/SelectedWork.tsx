import { motion, type Variants } from 'framer-motion';
import { Container } from '../layout/Container';
import { projects } from '../../constants/projects';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

interface ProjectCardProps {
  project: (typeof projects)[number];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      className="group cursor-pointer"
    >
      <a href={project.link || '#'} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-neutral-100">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: '4/3' }}
            whileHover={{ scale: 1.03 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
          />
        </div>

        {/* Content */}
        <div className="mt-4">
          <div className="flex items-center gap-3 text-xs text-neutral-500 uppercase tracking-wider mb-2">
            <span>{project.category}</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            <span>{project.year}</span>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 text-neutral-600 leading-relaxed">
            {project.description}
          </p>
        </div>
      </a>
    </motion.article>
  );
}

interface SelectedWorkProps {
  title?: string;
}

export function SelectedWork({ title = 'Selected Work' }: SelectedWorkProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Title - Left Aligned */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-section md:text-section-md font-semibold text-neutral-900 mb-12 md:mb-16"
        >
          {title}
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default SelectedWork;
