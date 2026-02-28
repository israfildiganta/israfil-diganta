import { motion } from 'framer-motion';

// Dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Advanced Dynamic Programming Patterns for LeetCode",
    excerpt: "A step-by-step logic and intuition guide to recognizing and solving complex DP problems efficiently in C++ and Java.",
    author: "Your Name",
    date: "Last updated 15 March 2026",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Spring Boot 3",
    excerpt: "The most practical and useful architectural guidelines to help you build robust backend systems using JPA, Kafka, and JWT authentication.",
    author: "Your Name",
    date: "Last updated 28 February 2026",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Dockerizing Your Backend: Best Practices in 2026",
    excerpt: "My go-to strategies for optimizing Dockerfiles, reducing image sizes, and orchestrating multi-container environments with Docker Compose.",
    author: "Your Name",
    date: "Last updated 10 January 2026",
    imageUrl: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=600&fit=crop",
  },
  {
    id: 4,
    title: "System Design: Scaling to 1 Million Active Users",
    excerpt: "Key things I've learned from studying top tech company architectures to help you design for high availability and low latency.",
    author: "Your Name",
    date: "Last updated 5 December 2025",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  },
];

// Avatar URL using placeholder service
const avatarUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face";

interface BlogPostProps {
  post: typeof blogPosts[0];
  index: number;
}

function BlogPost({ post, index }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-24 md:mb-32 last:mb-0"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-lg md:text-xl text-gray-600 mb-5 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Author Metadata */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={avatarUrl}
          alt={post.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-gray-900 font-medium">{post.author}</span>
        <span className="text-gray-400 text-sm">•</span>
        <span className="text-gray-500 text-sm">{post.date}</span>
      </div>

      {/* Thumbnail Image */}
      <div className="overflow-hidden rounded-2xl shadow-sm">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.article>
  );
}

export function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-gray-900 mb-8" style={{ fontWeight: 500 }}>
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Thoughts on design, development, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Feed */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={post.id} post={post} index={index} />
          ))}

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-12"
          >
            <a
              href="#/blog?page=2"
              className="text-blue-600 hover:text-blue-700 text-lg font-medium transition-colors"
            >
              Next Page &gt;
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
