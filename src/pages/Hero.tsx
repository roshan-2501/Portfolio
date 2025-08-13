import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import ParticlesBackground from "@/components/layout/ParticlesBackground";
import Scene3D from "@/components/three/Scene3D";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const handleGetInTouch = () => {
    navigate('/contact');
  };

  const handleDownloadCV = () => {
    try {
      // Create a CV download link
      const cvUrl = '/Roshan_Resume.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Roshan_Resume.pdf';
      link.target = '_blank';
      
      // Add error handling
      link.onerror = () => {
        alert('CV file not found. Please contact me directly for my CV.');
      };
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Unable to download CV. Please contact me directly for my CV.');
    }
  };

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <ParticlesBackground />
      <Scene3D />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="hero-title text-gradient mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            Roshan T
          </motion.h1>
          <motion.p 
            className="hero-subtitle text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Eager to learn and grow in the world of software development. 
            Passionate about creating innovative solutions and building a strong foundation in modern technologies.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <AnimatedButton 
            variant="glow" 
            size="lg" 
            className="group"
            onClick={handleGetInTouch}
          >
            <Mail className="group-hover:rotate-12 transition-transform duration-300" />
            Get In Touch
          </AnimatedButton>
          
          <AnimatedButton 
            variant="outline" 
            size="lg" 
            className="group"
            onClick={handleDownloadCV}
          >
            <Download className="group-hover:translate-y-1 transition-transform duration-300" />
            Download Resume
          </AnimatedButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 rounded-full border border-primary/30 hover:border-primary/60 transition-colors cursor-pointer"
            onClick={() => navigate('/about')}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="text-xs text-muted-foreground mt-2 font-mono">
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 rounded-full bg-gradient-primary opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 rounded-full bg-gradient-secondary opacity-40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-gradient-accent opacity-50"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
};

export default Hero;