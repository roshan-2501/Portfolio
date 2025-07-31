import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "HTML", category: "Frontend", icon: "🌐" },
    { name: "CSS", category: "Frontend", icon: "🎨" },
    { name: "JavaScript", category: "Language", icon: "☕" },
    { name: "Bootstrap", category: "Frontend", icon: "🎯" },
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Redux", category: "Frontend", icon: "🔄" },
    { name: "Java", category: "Language", icon: "☕" },
    { name: "C++", category: "Language", icon: "⚡" },
    { name: "Spring Boot", category: "Backend", icon: "🍃" },
    { name: "SQL", category: "Database", icon: "🗄️" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "Git", category: "DevOps", icon: "📝" },
    { name: "GitHub", category: "DevOps", icon: "🐙" },
    { name: "Jenkins", category: "DevOps", icon: "🤖" },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen py-20 px-6 pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary-gradient mb-6">
            Skills 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across different technologies and domains.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-2xl font-bold text-accent-gradient mb-8 text-center">
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="glass-card p-6 rounded-2xl hover-glow group"
                    >
                      {/* Skill Icon & Name */}
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <h4 className="text-lg font-semibold text-foreground">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;