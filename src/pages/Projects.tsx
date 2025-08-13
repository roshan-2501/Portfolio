import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedButton } from "../components/ui/animated-button";

const Projects = () => {
  const projects = [
    {
      title: "Fitness Microservices Application",
      description: "Secure fitness tracking app with Java microservices, dual databases, and React frontend. Features user management, workout logging, goal tracking, and AI-powered recommendations.",
      image: "💪",
      technologies: ["React.js", "JavaScript", "React Router", "CSS", "Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "MongoDB", "Docker", "JWT", "Microservices"],
      githubUrl: "https://github.com/roshan-2501/Fitness_Microservices_App.git",
      gradient: "from-accent to-accent-glow",
    },
    {
      title: "AI Chat Application",
      description: "Full-stack chat app with React frontend and Java backend, integrated with Google Gemini AI for intelligent conversations and dynamic responses.",
      image: "🤖",
      technologies: ["React", "JavaScript", "Axios", "CSS", "Java", "Spring Boot", "Spring AI", "Vertex AI"],
      githubUrl: "https://github.com/roshan-2501/AI-chatbot.git",
      gradient: "from-success to-success-glow",
    },
    {
      title: "Retail Shopping Web Application",
      description: "E-commerce platform with React frontend and Firebase backend. Features user authentication, product management, shopping cart, and secure transactions.",
      image: "🛍️",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Firebase"],
      githubUrl: "https://github.com/roshan-2501/Amazon-Clone-using-React.git",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      title: "AI Summarizer Extension",
      description: "Chrome extension powered by Google Gemini AI for summarizing web content. Features multiple summary types, clipboard integration, and secure API storage.",
      image: "📝",
      technologies: ["JavaScript", "HTML", "CSS", "Chrome Extensions API", "Google Gemini API"],
      githubUrl: "https://github.com/roshan-2501/AI-Summarizer-Extension.git",
      gradient: "from-primary to-primary-glow",
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
            A collection of projects I've built to learn and demonstrate my skills in 
            full-stack development, AI integration, and modern web technologies.
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
                <AnimatedButton 
                  variant="ghost" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
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