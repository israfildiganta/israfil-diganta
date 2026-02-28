import { useState } from 'react';
import { motion } from 'framer-motion';

// Portfolio projects data
const portfolioProjects = [
  {
    id: '1',
    title: 'High-Performance E-Commerce Site',
    subtitle: 'Scalable Microservices Architecture',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: '2',
    title: 'Enterprise Resource Planning (ERP) System',
    subtitle: 'Full-stack business management solution',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=700&fit=crop',
    aspectRatio: 'aspect-[4/3.5]',
  },
  {
    id: '3',
    title: 'Hospital Management System',
    subtitle: 'Secure patient data & appointment scheduling',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    aspectRatio: 'aspect-[4/2.5]',
  },
  {
    id: '4',
    title: 'Core Banking System',
    subtitle: 'Secure, high-concurrency transaction engine',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=650&fit=crop',
    aspectRatio: 'aspect-[4/3.25]',
  },
  {
    id: '5',
    title: 'Automated Quality Assurance Product',
    subtitle: 'Testing & CI/CD pipeline integration',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=550&fit=crop',
    aspectRatio: 'aspect-[4/2.75]',
  },
];

// Mini featured project card component
function MiniProjectCard() {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 cursor-pointer hover:bg-gray-100 transition-colors">
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img
          src="https://images.unsplash.com/photo-1522542550221-31fd8575f5f5?w=400&h=250&fit=crop"
          alt="Featured Project"
          className="w-full h-auto object-cover"
        />
      </div>
      <h4 className="text-sm font-semibold text-gray-900">Featured Project</h4>
      <p className="text-xs text-gray-500 mt-1">Click to explore →</p>
    </div>
  );
}

// Toggle switch component
function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-gray-900' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

// Slider component
function Slider({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
    />
  );
}

// Project card component
function ProjectCard({ project, index }: { project: typeof portfolioProjects[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <motion.img
          src={project.image}
          alt={project.title}
          className={`w-full h-auto object-cover ${project.aspectRatio}`}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  const [isPopEnabled, setIsPopEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section className="min-h-screen bg-white px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
          {/* Left Column - Title & Description */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              portfolio.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-500 max-w-md leading-relaxed"
            >
              Check out some of my latest software engineering and backend architecture projects. I've built scalable solutions for various industries.
            </motion.p>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="lg:w-72">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Toggle Switch & Slider */}
              <div className="bg-gray-50 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Make it pop</span>
                  <ToggleSwitch checked={isPopEnabled} onChange={setIsPopEnabled} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Subtle</span>
                    <span>Bold</span>
                  </div>
                  <Slider value={sliderValue} onChange={setSliderValue} />
                </div>
              </div>

              {/* Mini Featured Project Card */}
              <MiniProjectCard />
            </motion.div>
          </div>
        </div>

        {/* Project Grid - Masonry/Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
