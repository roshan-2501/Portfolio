import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "📋",
      technologies: ["React", "Firebase", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with 3D animations and modern design",
      image: "🎨",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-accent to-accent-glow",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image: "🌤️",
      technologies: ["React", "Weather API", "Chart.js", "CSS Grid"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-success to-success-glow",
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
    <div className="min-h-screen py-20 px-6 pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in modern web development,
            from concept to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-8 rounded-3xl hover-glow group cursor-pointer"
            >
              {/* Project Image/Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {project.image}
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted/50 rounded-full text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <AnimatedButton variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </AnimatedButton>
                <AnimatedButton variant="ghost" size="sm" className="flex-1">
                  <Github className="w-4 h-4" />
                  Code
                </AnimatedButton>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;