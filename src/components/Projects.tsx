import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Cybersécurité',
      description: 'Un portfolio moderne et interactif mettant en avant les compétences en cybersécurité avec des effets visuels impressionnants.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: 'https://github.com',
      color: 'from-cyber-blue to-cyber-purple',
      featured: true,
    },
    {
      title: 'Outil d\'Audit de Sécurité',
      description: 'Application web pour automatiser les processus d\'audit de sécurité avec PowerQuery et analyse de données.',
      tags: ['Python', 'PowerQuery', 'SQL', 'Web'],
      link: '#',
      github: 'https://github.com',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Dashboard SOC',
      description: 'Interface de monitoring en temps réel pour la détection et réponse aux incidents de sécurité.',
      tags: ['React', 'Node.js', 'WebSocket', 'Docker'],
      link: '#',
      github: 'https://github.com',
      color: 'from-cyber-pink to-cyber-green',
    },
    {
      title: 'Système de Gestion d\'Infrastructure',
      description: 'Plateforme de gestion centralisée pour les ressources réseau et les systèmes Linux.',
      tags: ['Linux', 'Bash', 'Python', 'Docker'],
      link: '#',
      github: 'https://github.com',
      color: 'from-cyber-green to-cyber-blue',
    },
  ];

  return (
    <section id="projets" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projets</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </motion.div>

        {/* Featured Project */}
        {projects[0] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className={`cyber-border cyber-border-hover p-8 rounded-lg bg-gradient-to-br ${projects[0].color}/5 group`}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold mb-4 text-white">{projects[0].title}</h3>
                  <p className="text-lg text-gray-300 mb-6">{projects[0].description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[0].tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${projects[0].color} text-white`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg hover:shadow-lg hover:shadow-cyber-blue/50 transition-all"
                    >
                      Voir le projet
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={projects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 border-2 border-cyber-blue rounded-lg hover:bg-cyber-blue/10 transition-all"
                    >
                      GitHub
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className={`w-full h-64 bg-gradient-to-br ${projects[0].color} rounded-lg opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`cyber-border cyber-border-hover p-6 rounded-lg bg-gradient-to-br ${project.color}/5 group h-full flex flex-col`}
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded text-xs font-semibold bg-cyber-dark text-cyber-blue">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-blue hover:text-cyber-purple transition-colors"
                >
                  Voir
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-purple hover:text-cyber-pink transition-colors"
                >
                  Code
                  <Github size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
