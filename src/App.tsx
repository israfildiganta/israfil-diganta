import { Layout } from './layout/Layout';
import { Container } from './components/layout/Container';
import { Typography, Card } from 'antd';
import { motion, type Variants } from 'framer-motion';
import './index.css';

const { Title, Paragraph, Text } = Typography;

const projects = [
  { title: 'Project Name', description: 'Project description goes here.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: 'easeOut' as const,
    },
  },
};

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Title
              level={1}
              className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-3xl"
              style={{ fontWeight: 500, marginBottom: 0 }}
            >
              I create digital experiences that blend simplicity with purpose.
            </Title>
            <Paragraph className="mt-6 text-lg text-gray-600 max-w-xl" style={{ marginTop: 24 }}>
              A product designer and developer focused on crafting thoughtful interfaces
              and seamless interactions.
            </Paragraph>
          </motion.div>
        </Container>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2} className="text-2xl font-medium mb-12" style={{ fontWeight: 500 }}>
              Selected Work
            </Title>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="border-b border-gray-100 pb-12"
              >
                <Text className="text-xl font-medium block">{project.title}</Text>
                <Paragraph className="mt-2 text-gray-600">{project.description}</Paragraph>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2} className="text-2xl font-medium mb-12" style={{ fontWeight: 500 }}>
              About
            </Title>
            <div className="max-w-2xl">
              <Paragraph className="text-lg text-gray-600 leading-relaxed">
                I'm a designer and developer with a passion for creating clean,
                functional, and beautiful digital products. With years of experience
                in both design and engineering, I bridge the gap between aesthetics
                and technology.
              </Paragraph>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2} className="text-2xl font-medium mb-6" style={{ fontWeight: 500 }}>
              Get in Touch
            </Title>
            <Paragraph className="text-lg text-gray-600 mb-8">
              Have a project in mind? Let's talk.
            </Paragraph>
            <motion.a
              href="mailto:hello@example.com"
              className="inline-block text-lg border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              hello@example.com
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
}

export default App;
