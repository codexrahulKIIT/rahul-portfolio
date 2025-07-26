import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  ArrowUp,
  Code2,
  Coffee
} from 'lucide-react';

interface QuickLink {
  name: string;
  id: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick links data
  const quickLinks: QuickLink[] = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  // Social links data
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/codexrahulKIIT',
      icon: <Github size={20} />,
      color: 'hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rahulkumar-mca/',
      icon: <Linkedin size={20} />,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:rahulkr.tech247@gmail.com',
      icon: <Mail size={20} />,
      color: 'hover:bg-red-600'
    }
  ];

  // Services data
  const services: string[] = [
    'Web Development',
    'Mobile Apps',
    'API Development',
    'UI/UX Design',
    'Consulting'
  ];

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              onClick={scrollToTop}
            >
              Rahul Kumar
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through clean, efficient code. 
              Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} group`}
                  aria-label={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300 block">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-1">
                <Code2 size={16} />
                <span>3+ Years Coding</span>
              </div>
              <div className="flex items-center gap-1">
                <Coffee size={16} />
                <span>500+ Cups of Coffee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, color: '#60A5FA' }}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-blue-400 transition-all duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <div className="space-y-3 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-sm"
                >
                  • {service}
                </motion.div>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <Mail size={14} />
                <span>rahulkr.tech247@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <Phone size={14} />
                <span>+91 6202587293</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <MapPin size={14} />
                <span>Bhubaneswar, Odisha</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>&copy; 2025 Rahul Kumar. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-500 fill-current" />
              </motion.div>
              <span>and lots of</span>
              <Coffee size={14} className="text-yellow-600" />
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 text-sm font-medium"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-4 text-xs text-gray-500"
          >
            <p>
              This website is built with React, Tailwind CSS, and Framer Motion. 
              Hosted with ❤️ on the web.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
};

export default Footer;