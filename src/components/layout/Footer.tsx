import { Container } from './Container';
import { Typography, Space } from 'antd';
import { motion } from 'framer-motion';

const { Text, Link } = Typography;

const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <Text className="text-sm text-gray-500">
            © {currentYear} Your Name. All rights reserved.
          </Text>
          
          <Space size="middle">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </Space>
        </motion.div>
      </Container>
    </footer>
  );
}
