import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-lg blur-xl opacity-50"></div>
            <img
              src="/profile.jpg"
              alt="Thomas L'hostete"
              className="relative w-full h-full object-cover rounded-lg border-2 border-cyber-blue/50"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
        >
          Thomas L'hostete
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-cyber-blue mb-6 font-light"
        >
          Étudiant en Ingénierie | Spécialiste en Cybersécurité
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionné par la cybersécurité et l'informatique, je combine expertise technique et curiosité constante pour résoudre des défis complexes. Détenteur du permis B et engagé dans la réserve cyber.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Me contacter
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projets"
            className="px-8 py-3 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
          >
            Voir mes projets
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-cyber-blue/30 rounded-lg hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 group"
          >
            <Github size={24} className="group-hover:text-cyber-blue transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/thomas-l%E2%80%99hostete-389920274/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-cyber-purple/30 rounded-lg hover:border-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 group"
          >
            <Linkedin size={24} className="group-hover:text-cyber-purple transition-colors" />
          </a>
          <a
            href="mailto:thomas.lhostete@outlook.fr"
            className="p-3 border-2 border-cyber-pink/30 rounded-lg hover:border-cyber-pink hover:bg-cyber-pink/10 transition-all duration-300 group"
          >
            <Mail size={24} className="group-hover:text-cyber-pink transition-colors" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyber-blue rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
