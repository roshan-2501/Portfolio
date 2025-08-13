import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Trophy, Target, Linkedin } from "lucide-react";
import { AnimatedButton } from "../components/ui/animated-button";

const Profiles = () => {
  const profiles = [
    {
      name: "GitHub",
      icon: Github,
      description: "Projects and contributions",
      link: "https://github.com/roshan-2501",
      color: "text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "Professional network and experience",
      link: "https://www.linkedin.com/in/roshant25",
      color: "text-blue-400",
    },
    {
      name: "LeetCode",
      icon: Code,
      description: "Problem solving and algorithms",
      link: "https://leetcode.com/u/roshan2513/",
      color: "text-orange-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 py-20 px-6 pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title text-gradient mb-6">
            Coding Profiles
          </h1>
          <p className="hero-subtitle text-muted-foreground max-w-2xl mx-auto">
            Explore my journey across various coding platforms and competitive programming sites.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <motion.div
                key={profile.name}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="card-glass p-8 h-full flex flex-col justify-between border border-border/50 hover:border-primary/50 transition-all duration-300">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 ${profile.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {profile.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {profile.description}
                  </p>

                  {/* Action Button */}
                  <AnimatedButton
                    variant="outline"
                    size="sm"
                    className="group-hover:border-primary/60 transition-colors duration-300"
                    onClick={() => window.open(profile.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Visit Profile
                  </AnimatedButton>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
      
        </motion.div>
      </div>
    </div>
  );
};

export default Profiles;