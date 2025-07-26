// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Github, ExternalLink, Eye, Star } from 'lucide-react';
import React, { useState } from 'react';

// Type definitions
type ProjectType = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  status: 'Completed' | 'In Progress';
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null); // ✅ Properly typed

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'api', name: 'APIs' }
  ];

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution...",
      longDescription: "This comprehensive e-commerce platform...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      github: "https://github.com/codexrahulKIIT",
      live: "#",
      featured: true,
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application...",
      longDescription: "Built with modern React patterns...",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "web",
      tech: ["React", "Socket.io", "Express", "PostgreSQL", "Redis"],
      github: "https://github.com/codexrahulKIIT",
      live: "#",
      featured: true,
      status: "In Progress"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application...",
      longDescription: "Features include interactive maps...",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      category: "web",
      tech: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      github: "https://github.com/codexrahulKIIT",
      live: "#",
      featured: false,
      status: "Completed"
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "A React Native fitness tracking app...",
      longDescription: "Complete fitness ecosystem with AI-powered...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "mobile",
      tech: ["React Native", "Firebase", "Redux", "Health Kit"],
      github: "https://github.com/codexrahulKIIT",
      live: "#",
      featured: true,
      status: "Completed"
    },
    {
      id: 5,
      title: "RESTful API Service",
      description: "A scalable Node.js API service...",
      longDescription: "Enterprise-grade API with advanced...",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      category: "api",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "AWS"],
      github: "https://github.com/codexrahulKIIT",
      live: "#",
      featured: false,
      status: "Completed"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website...",
      longDescription: "This very website you're viewing!",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      category: "web",
      tech: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
      github: "https://github.com/codexrahulKIIT",
      live: "#",
      featured: false,
      status: "Completed"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Your existing JSX stays the same here — no changes needed */}
      {/* Just make sure hoveredProject is now correctly typed */}
    </section>
  );
};

export default Projects;
