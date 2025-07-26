import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="relative p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 overflow-hidden"
      aria-label="Toggle dark mode"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-blue-500"
        initial={false}
        animate={{
          scale: darkMode ? 1 : 0,
          opacity: darkMode ? 0.2 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon Container */}
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: darkMode ? 180 : 0,
            opacity: darkMode ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={20} />
        </motion.div>
        
        {/* Moon Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: darkMode ? 0 : -180,
            opacity: darkMode ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={20} />
        </motion.div>
      </div>
      
      {/* Tooltip */}
      <motion.div
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;