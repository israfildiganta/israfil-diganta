import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import profileImage from '../../assets/ID9.png';

// Placeholder images
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=200&fit=crop',
];

const ACHIEVEMENT_IMAGE = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop';
const CODE_IMAGE = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop';
const CLASSROOM_IMAGE = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop';

const textVariants = {
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

const fadeInVariants = {
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

export function About() {
  return (
    <section className="bg-white">
      <Container>
        {/* 1. Hero Section */}
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
                about.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                I'm a Software Engineer at Enosis Solution and an ACM Trainer at American International University-Bangladesh (AIUB). I enjoy turning complex algorithmic problems into highly scalable backend systems.
              </p>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <div className="overflow-hidden bg-gray-100 aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={profileImage}
                  alt="Israfil Diganta"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Photo Strip */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-16"
          >
            <div className="flex gap-4 overflow-x-auto pb-2">
              {PLACEHOLDER_IMAGES.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden bg-gray-100"
                >
                  <img
                    src={img}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2. The "Dual Persona" Section - 50/50 Pie Chart */}
        <div className="py-20">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Pie Chart - CSS/SVG */}
            <div className="flex justify-center mb-16">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                {/* SVG Pie Chart */}
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Left side - Engineer (light gray) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                    strokeDasharray="125.66 125.66"
                    strokeDashoffset="0"
                  />
                  {/* Right side - CPer (dark gray) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#374151"
                    strokeWidth="20"
                    strokeDasharray="125.66 125.66"
                    strokeDashoffset="-125.66"
                  />
                </svg>
                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">50/50</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-center gap-8 md:gap-16 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-200" />
                <span className="text-lg text-gray-500 font-medium">Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-700" />
                <span className="text-lg text-gray-700 font-medium">CPer</span>
              </div>
            </div>

            {/* Two Column Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
              {/* Left Column - Part Engineer */}
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                  Part Software Engineer
                </h3>
                <ul className="space-y-3">
                  {[
                    'Backend Development',
                    'Java / Spring Boot',
                    'Docker',
                    'System Architecture',
                  ].map((skill, index) => (
                    <li key={index} className="text-lg text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Column - Part CPer */}
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                  Part Competitive Programmer
                </h3>
                <ul className="space-y-3">
                  {[
                    'Algorithms & Data Structures',
                    'C++',
                    'Dynamic Programming',
                    'Graph Theory',
                  ].map((skill, index) => (
                    <li key={index} className="text-lg text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 3. Achievements & Facts */}
        <div className="py-20">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            {/* Left Column - Image */}
            <div className="order-2 md:order-1">
              <div className="overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={ACHIEVEMENT_IMAGE}
                  alt="Tech achievements"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                Notable Achievements
              </h3>
              <ul className="space-y-4">
                <li className="text-lg text-gray-700">
                  <span className="font-medium text-blue-600">ICPC ASIA WEST Finalist</span> (2023)
                </li>
                <li className="text-lg text-gray-700">
                  <span className="font-medium text-blue-600">Meta Hacker Cup T-Shirt Winner</span> (2022)
                </li>
                <li className="text-lg text-gray-700">
                  <span className="font-medium text-blue-600">ACM Trainer</span> at AIUB
                </li>
                <li className="text-lg text-gray-700">
                  <span className="font-medium text-blue-600">Software Engineer</span> at Enosis Solution
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 4. My Skills - Bar Chart Section */}
        <div className="py-20">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-16">
              My skills
            </h3>

            {/* Bar Chart */}
            <div className="flex flex-col items-center">
              {/* Y-Axis Labels */}
              <div className="flex gap-8 md:gap-16 w-full max-w-4xl mb-4">
                <div className="w-24 md:w-32 text-right text-sm md:text-base text-gray-500">Grandmaster</div>
                <div className="flex-1 flex items-end justify-center gap-4 md:gap-8">
                  {/* Bars */}
                  {[
                    { skill: 'C++', percentage: 95, color: 'bg-emerald-400' },
                    { skill: 'Java', percentage: 90, color: 'bg-pink-400' },
                    { skill: 'Spring Boot', percentage: 85, color: 'bg-yellow-400' },
                    { skill: 'Problem Solving', percentage: 92, color: 'bg-blue-400' },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                        {item.percentage}%
                      </div>
                      <div
                        className={`w-16 md:w-20 ${item.color} rounded-t-md`}
                        style={{ height: `${item.percentage * 2}px` }}
                      />
                      <div className="mt-3 text-sm md:text-base text-gray-600">{item.skill}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Y-Axis Labels - Lower levels */}
              <div className="flex gap-8 md:gap-16 w-full max-w-4xl">
                <div className="w-24 md:w-32 text-right text-sm md:text-base text-gray-500">Master</div>
                <div className="flex-1" />
              </div>
              <div className="flex gap-8 md:gap-16 w-full max-w-4xl">
                <div className="w-24 md:w-32 text-right text-sm md:text-base text-gray-500">Expert</div>
                <div className="flex-1" />
              </div>
              <div className="flex gap-8 md:gap-16 w-full max-w-4xl">
                <div className="w-24 md:w-32 text-right text-sm md:text-base text-gray-500">Specialist</div>
                <div className="flex-1" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5. Experience Details */}
        <div className="py-20">
          {/* Item 1: Software Engineer */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Software Engineer at Enosis Solution
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Building scalable backend systems and distributed applications. I specialize in designing 
                microservices architecture, optimizing database performance, and implementing robust 
                APIs that handle millions of requests. My work focuses on creating efficient, 
                maintainable, and highly available systems that power real-world applications.
              </p>
            </div>
            <div className="order-2 md:order-1">
              <div className="overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={CODE_IMAGE}
                  alt="Code"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Item 2: ACM Trainer */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            <div className="order-1">
              <div className="overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={CLASSROOM_IMAGE}
                  alt="Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                ACM Trainer at AIUB
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mentoring and training students for competitive programming competitions including 
                ICPC, NCPC, and other programming contests. I conduct regular workshops on algorithms, 
                data structures, and problem-solving techniques, helping students develop the analytical 
                skills needed to excel in competitive programming.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
