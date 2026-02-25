import { motion, type Variants } from 'framer-motion';
import { Container } from '../layout/Container';

// Sample blog data - in a real app this would come from a CMS or API
export const blogPosts = [
  {
    id: '1',
    title: 'The Art of Minimalist Web Design',
    date: '2024-01-15',
    slug: 'art-of-minimalist-web-design',
  },
  {
    id: '2',
    title: 'Building Accessible User Interfaces',
    date: '2024-01-08',
    slug: 'building-accessible-user-interfaces',
  },
  {
    id: '3',
    title: 'Performance Optimization Techniques',
    date: '2023-12-20',
    slug: 'performance-optimization-techniques',
  },
  {
    id: '4',
    title: 'Modern CSS Architecture for Scale',
    date: '2023-12-05',
    slug: 'modern-css-architecture-for-scale',
  },
] as const;

type BlogPost = (typeof blogPosts)[number];

// Format date to readable format
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Animation variants for staggered fade-in
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

interface BlogPostItemProps {
  post: BlogPost;
}

function BlogPostItem({ post }: BlogPostItemProps) {
  return (
    <motion.article
      variants={itemVariants}
      className="group"
    >
      <a
        href={`/blog/${post.slug}`}
        className="block py-5 border-b border-neutral-200 group-hover:border-neutral-400 transition-colors duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          {/* Title with hover underline effect */}
          <h3 className="text-lg sm:text-xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors duration-300 relative">
            <span className="relative">
              {post.title}
              {/* Clean underline that appears on hover */}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300 ease-smooth" />
            </span>
          </h3>
          
          {/* Date */}
          <time
            dateTime={post.date}
            className="text-sm text-neutral-500 whitespace-nowrap"
          >
            {formatDate(post.date)}
          </time>
        </div>
      </a>
    </motion.article>
  );
}

interface BlogPreviewProps {
  title?: string;
  posts?: readonly BlogPost[];
  showAllLink?: string;
}

export function BlogPreview({
  title = 'Latest Articles',
  posts = blogPosts,
  showAllLink = '/blog',
}: BlogPreviewProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12"
        >
          <h2 className="text-section md:text-section-md font-semibold text-neutral-900">
            {title}
          </h2>
          
          {/* View All Link */}
          <a
            href={showAllLink}
            className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-300 group"
          >
            <span>View all articles</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Blog Posts List */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="border-t border-neutral-200"
        >
          {posts.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default BlogPreview;
