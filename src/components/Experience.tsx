export {};
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  Globe, 
  Award, 
  Calendar, 
  MapPin,
  Users,
  TrendingUp,
  Star
} from 'lucide-react';

const Experience = () => {
  // Experience data
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and collaborating with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Led a team of 5 developers on major client projects",
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 3 junior developers to mid-level positions"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB", "GraphQL"],
      icon: <Briefcase size={20} />,
      color: "bg-blue-500",
      current: true
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Bhubaneswar, Odisha",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed responsive web applications and improved user experience for various clients. Worked extensively with React, TypeScript, and modern CSS frameworks.",
      achievements: [
        "Built 15+ responsive websites with 99% client satisfaction",
        "Improved website performance scores by average 35%",
        "Integrated multiple third-party APIs and payment gateways",
        "Collaborated with design team to implement pixel-perfect UIs"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Sass"],
      icon: <Code size={20} />,
      color: "bg-green-500",
      current: false
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "StartUp Hub",
      location: "Bhubaneswar, Odisha",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Built dynamic web applications and learned modern development practices. Gained valuable experience in full-stack development and agile methodologies.",
      achievements: [
        "Contributed to 10+ web applications from concept to deployment",
        "Learned and implemented modern JavaScript frameworks",
        "Participated in code reviews and improved coding standards",
        "Collaborated in agile environment with daily standups"
      ],
      technologies: ["JavaScript", "React", "Express.js", "MySQL", "Git"],
      icon: <Globe size={20} />,
      color: "bg-purple-500",
      current: false
    },
    {
      id: 4,
      title: "MCA Graduate",
      company: "KIIT University",
      location: "Bhubaneswar, Odisha",
      period: "2019 - 2021",
      type: "Education",
      description: "Completed Master of Computer Applications with focus on software development, algorithms, database management systems, and modern programming paradigms.",
      achievements: [
        "Graduated with First Class Honors (8.5 CGPA)",
        "Led final year project on e-commerce platform",
        "Active member of coding club and tech societies",
        "Completed internship at local software company"
      ],
      technologies: ["Java", "Python", "C++", "MySQL", "Data Structures"],
      icon: <Award size={20} />,
      color: "bg-orange-500",
      current: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 dark:bg-purple-900 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience & Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My journey in software development and the experiences that shaped my career.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-8 h-8 ${exp.color} rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-gray-900`}
                  >
                    {exp.icon}
                  </motion.div>
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-blue-500 rounded-full opacity-20"
                    />
                  )}
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="text-blue-500" size={16} />
                        <span className="text-blue-500 font-medium text-sm bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-green-500 font-medium text-sm bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full flex items-center gap-1"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Current
                          </motion.span>
                        )}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Users size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                        <TrendingUp size={16} className="text-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                          >
                            <Star size={12} className="text-yellow-500 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;