import { motion } from 'framer-motion';
import { Code2, Lock, Server, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Lock,
      title: 'Cybersécurité',
      skills: ['SOC & Pentest', 'Audits Organisationnels', 'Audits Techniques', 'Infrastructure Systèmes', 'OPSEC'],
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      icon: Code2,
      title: 'Programmation',
      skills: ['PHP/HTML/CSS', 'Python', 'C++', 'C', 'JavaScript/React'],
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      icon: Server,
      title: 'Systèmes & Réseau',
      skills: ['Linux (Debian/Ubuntu)', 'Docker', 'Kali Linux/Exegol', 'Réseau TCP/IP', 'Administration Système'],
      color: 'from-cyber-pink to-cyber-green',
    },
    {
      icon: Database,
      title: 'Outils & Logiciels',
      skills: ['Suite Office', 'PowerQuery', 'Git/GitHub', 'Wireshark', 'Burp Suite'],
      color: 'from-cyber-green to-cyber-blue',
    },
  ];

  const certifications = [
    { name: 'CPTS HackTheBox', status: 'En cours', icon: '🎓' },
    { name: 'CCNA 1', status: 'Obtenu', icon: '✓' },
  ];

  const languages = [
    { name: 'Français', level: 'Natif', progress: 100 },
    { name: 'Anglais', level: 'B2', progress: 80 },
  ];

  return (
    <section id="compétences" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-border cyber-border-hover p-6 rounded-lg group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyber-blue">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="cyber-border p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className="text-sm text-gray-400">{cert.status}</p>
                  </div>
                  <span className="text-2xl">{cert.icon}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyber-purple">Langues</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <p className="font-semibold text-white">{lang.name}</p>
                    <p className="text-sm text-gray-400">{lang.level}</p>
                  </div>
                  <div className="w-full h-2 bg-cyber-dark rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.progress}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
