/**
 * Projects Data
 * Selected work portfolio items
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fintech Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization and intuitive user experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Product Design',
    year: '2024',
    link: '#',
  },
  {
    id: '2',
    title: 'Healthcare App',
    description: 'Mobile application for patient management with telehealth features and secure medical records.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    category: 'Mobile App',
    year: '2024',
    link: '#',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Full-featured online store with seamless checkout experience and inventory management system.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'Web Development',
    year: '2023',
    link: '#',
  },
  {
    id: '4',
    title: 'Brand Identity System',
    description: 'Complete visual identity redesign for a tech startup including logo, typography, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    category: 'Branding',
    year: '2023',
    link: '#',
  },
  {
    id: '5',
    title: 'SaaS Analytics',
    description: 'Business intelligence tool with custom dashboards and automated reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1543286386-2fba5b4fdb7c?w=800&h=600&fit=crop',
    category: 'Product Design',
    year: '2023',
    link: '#',
  },
  {
    id: '6',
    title: 'Travel Booking App',
    description: 'Feature-rich travel planning application with itinerary management and booking integration.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    category: 'Mobile App',
    year: '2022',
    link: '#',
  },
];

export default projects;
