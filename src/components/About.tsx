import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Spécialiste en SOC, Pentest et audits organisationnels',
    },
    {
      icon: Zap,
      title: 'Développement',
      description: 'Compétences en web (PHP/HTML/CSS), Python, C++, C',
    },
    {
      icon: Target,
      title: 'Infrastructure',
      description: 'Réseau, systèmes Linux et outils de sécurité avancés',
    },
  ];

  return (
    <section id="à propos" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Je suis un étudiant en école d'ingénieur passionné par la cybersécurité depuis plusieurs années. Mon parcours m'a permis de développer une expertise solide en sécurité des systèmes d'information, audits organisationnels et techniques.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Très motivé et curieux, j'ai l'habitude de la confidentialité et des bonnes pratiques de sécurité (OPSEC). Je suis actuellement réserviste au 40 RT dans une section Cyber, ce qui me permet de contribuer à la défense du cyberespace français.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mon objectif est de combiner mes connaissances techniques avec une approche pragmatique pour résoudre les défis complexes de la cybersécurité moderne.
            </p>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="cyber-border p-6 rounded-lg text-center hover:shadow-lg hover:shadow-cyber-blue/30 transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <p className="text-gray-400">Années d'expérience</p>
            </div>
            <div className="cyber-border p-6 rounded-lg text-center hover:shadow-lg hover:shadow-cyber-purple/30 transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <p className="text-gray-400">Compétences maîtrisées</p>
            </div>
            <div className="cyber-border p-6 rounded-lg text-center hover:shadow-lg hover:shadow-cyber-pink/30 transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">2</div>
              <p className="text-gray-400">Certifications en cours</p>
            </div>
            <div className="cyber-border p-6 rounded-lg text-center hover:shadow-lg hover:shadow-cyber-green/30 transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">B2</div>
              <p className="text-gray-400">Anglais courant</p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="cyber-border cyber-border-hover p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyber-blue">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
