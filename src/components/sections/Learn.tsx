import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

interface LearnCardProps {
  title: string;
  description: string;
  thumbnail: React.ReactNode;
  badge?: string;
  index: number;
}

function LearnCard({ title, description, thumbnail, badge, index }: LearnCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out">
        {/* Thumbnail Area */}
        <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-50 overflow-hidden">
          {thumbnail}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
        </div>
        
        {/* Content Area */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-semibold text-neutral-900 leading-tight">
              {title}
            </h3>
            {badge && (
              <span className="shrink-0 px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                {badge}
              </span>
            )}
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Frosted Glass Hover Effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-t from-white/40 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

// Thumbnail Components
function DSAThumbnail() {
  return (
    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      {/* Graph Visualization */}
      <div className="flex-1 flex items-end justify-center gap-1">
        <motion.div 
          initial={{ height: '20%' }}
          whileInView={{ height: '40%' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-3 bg-blue-500 rounded-t-sm" 
        />
        <motion.div 
          initial={{ height: '30%' }}
          whileInView={{ height: '60%' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-3 bg-blue-500 rounded-t-sm" 
        />
        <motion.div 
          initial={{ height: '25%' }}
          whileInView={{ height: '50%' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-3 bg-blue-500 rounded-t-sm" 
        />
        <motion.div 
          initial={{ height: '40%' }}
          whileInView={{ height: '80%' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-3 bg-emerald-500 rounded-t-sm" 
        />
        <motion.div 
          initial={{ height: '35%' }}
          whileInView={{ height: '70%' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-3 bg-emerald-500 rounded-t-sm" 
        />
        <motion.div 
          initial={{ height: '50%' }}
          whileInView={{ height: '90%' }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-3 bg-emerald-500 rounded-t-sm" 
        />
        <motion.div 
          initial={{ height: '45%' }}
          whileInView={{ height: '85%' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-3 bg-indigo-500 rounded-t-sm" 
        />
      </div>
      
      {/* Complexity Label */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-neutral-600 bg-white/80 px-2 py-1 rounded">
          O(n log n)
        </span>
        <div className="flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          1850
        </div>
      </div>
    </div>
  );
}

function DockerThumbnail() {
  return (
    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      {/* Stacked Containers */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          {/* Container 1 */}
          <div className="w-24 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
            </svg>
          </div>
          {/* Container 2 */}
          <div className="w-24 h-16 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg shadow-lg flex items-center justify-center -mt-3 ml-3">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Terminal Window */}
      <div className="bg-neutral-900 rounded-lg p-3 font-mono text-xs">
        <div className="flex gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> docker-compose up -d
        </div>
      </div>
    </div>
  );
}

function DatabaseThumbnail() {
  return (
    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      {/* Schema Diagram */}
      <div className="flex-1 flex items-center justify-center gap-6">
        {/* PostgreSQL Table */}
        <div className="bg-white rounded-lg shadow-md p-3 min-w-[100px]">
          <div className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            users
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-16 bg-neutral-200 rounded" />
            <div className="h-1.5 w-12 bg-neutral-200 rounded" />
            <div className="h-1.5 w-14 bg-neutral-200 rounded" />
          </div>
        </div>
        
        {/* Connection Line */}
        <div className="w-8 h-0.5 bg-neutral-300" />
        
        {/* Redis */}
        <div className="bg-red-500 rounded-lg shadow-md p-3 flex items-center gap-2">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.5 2.661l.54.866.54-.866 1.414 2.447-1.414 2.447-.54-.866-.54.866-1.414-2.447 1.414-2.447zM6.625 5.91l.54.866.54-.866 1.414 2.447-1.414 2.447-.54-.866-.54.866-1.414-2.447 1.414-2.447zm3.875 0l.54.866.54-.866 1.414 2.447-1.414 2.447-.54-.866-.54.866-1.414-2.447 1.414-2.447zM2.661 10.5l.866.54-.866.54 2.447 1.414-2.447 1.414-.866-.54-.866.54-1.414-2.447 1.414-2.447zm0-3.875l.866.54-.866.54 2.447 1.414-2.447 1.414-.866-.54-.866.54-1.414-2.447 1.414-2.447zM10.5 8.339l.54.866.54-.866 1.414 2.447-1.414 2.447-.54-.866-.54.866-1.414-2.447 1.414-2.447zm-3.875 0l.54.866.54-.866 1.414 2.447-1.414 2.447-.54-.866-.54.866-1.414-2.447 1.414-2.447zm3.875 3.875l.54.866.54-.866 1.414 2.447-1.414 2.447-.54-.866-.54.866-1.414-2.447 1.414-2.447zm3.875 0l.54.866.54-.866 1.414 2.447-1.414 2.447-.54-.866-.54.866-1.414-2.447 1.414-2.447z"/>
          </svg>
          <span className="text-white font-bold text-xs">Redis</span>
        </div>
      </div>
      
      {/* Database Labels */}
      <div className="flex items-center justify-center gap-4">
        <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
          PostgreSQL
        </span>
        <span className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
          Redis
        </span>
      </div>
    </div>
  );
}

// Featured Image Component - Java Backend Mastery
function FeaturedImage() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Course Badge */}
        <div className="mb-auto">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium rounded-full border border-white/20">
            Video Course
          </span>
        </div>
        
        {/* Main Title */}
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Java Backend<br />
            <span className="text-blue-400">Mastery</span>
          </h3>
        </div>
        
        {/* Microservice Architecture Diagram */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            {/* Service Boxes */}
            <div className="grid grid-cols-3 gap-3">
              {/* API Gateway */}
              <div className="col-span-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 text-center shadow-lg">
                <span className="text-white text-xs font-semibold">API Gateway</span>
              </div>
              
              {/* Service 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/10">
                <span className="text-blue-300 text-[10px]">Auth</span>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/10">
                <span className="text-green-300 text-[10px]">Orders</span>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/10">
                <span className="text-purple-300 text-[10px]">Users</span>
              </div>
            </div>
            
            {/* Spring Boot Logo */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs">SB</span>
            </div>
          </div>
        </div>
        
        {/* Course Details */}
        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-white/70 text-sm mb-1">Microservices and REST API Design</p>
            <p className="text-blue-300 text-xs">8+ hours of content</p>
          </div>
          
          {/* Author Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">ID</span>
            </div>
            <span className="text-white text-sm font-medium">Israfil Diganta</span>
          </div>
        </div>
      </div>
      
      {/* Blue Glow Border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-500/30" />
    </div>
  );
}

export function Learn() {
  const cards = [
    {
      title: 'DSA & Competitive Programming',
      description: 'Master dynamic programming and graph theory.',
      thumbnail: <DSAThumbnail />,
      badge: 'Updated',
    },
    {
      title: 'Docker & Containerization',
      description: 'A step-by-step guide to orchestrating environments.',
      thumbnail: <DockerThumbnail />,
      badge: 'New',
    },
    {
      title: 'Database Design & Optimization',
      description: 'Learn indexing and query performance tuning.',
      thumbnail: <DatabaseThumbnail />,
      badge: 'Popular',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Two Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Overline */}
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-4">
              Software Engineering
            </span>
            
            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-none mb-6">
              learn.
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed mb-6">
              A few ways I can help you master backend systems and algorithmic problem solving.
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg">
              With a focus on high-performance architecture, clean Java code, and competitive programming, I've documented my journey and resources to help you master these fields.
            </p>
          </motion.div>
          
          {/* Right Column - Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <FeaturedImage />
          </motion.div>
        </div>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <LearnCard key={index} {...card} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Learn;
