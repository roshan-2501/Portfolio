import { motion } from "framer-motion";
import { Code, Bug, Rocket, Trophy } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Expericence of building modern web applications",
      color: "text-primary",
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Debugger",
      description: "Good at troubleshooting and fixing complex issues",
      color: "text-secondary",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Always exploring cutting-edge technologies",
      color: "text-accent",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
      color: "text-success",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary-gradient mb-6">
            About Me
          </h2>
                     <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             I'm a passionate fresher developer eager to learn and grow in the world of 
             software development. With a strong foundation in modern technologies
             and a drive to create innovative solutions, I'm ready to contribute to 
             meaningful projects.
           </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="glass-card p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-accent-gradient mb-6">
                  My Journey
                </h3>
                                 <p className="text-muted-foreground leading-relaxed mb-6">
                   Started as a curious student fascinated by the intersection of 
                   technology and creativity. I've built several projects to learn 
                   full-stack development using React, Java Spring Boot, and modern 
                   technologies. I'm passionate about learning new skills and 
                   contributing to real-world projects.
                 </p>
                 <p className="text-muted-foreground leading-relaxed">
                   When I'm not coding, you'll find me exploring new technologies, 
                   working on personal projects, or learning from the developer community.
                 </p>
              </div>
              <div className="relative">
                <motion.div 
                  className="w-64 h-64 mx-auto rounded-3xl bg-gradient-hero border border-border/50 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-6xl">👨‍💻</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">
            What I Bring
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 rounded-2xl hover-glow group cursor-pointer"
              >
                <div className={`mb-4 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;