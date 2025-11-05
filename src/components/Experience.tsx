import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Consultant Junior',
      company: 'Cyberdefense',
      period: 'Avril 2025 - Juillet 2025',
      location: 'France',
      tasks: [
        'Automatisation des processus d\'audit avec PowerQuery',
        'Suivi d\'audits organisationnels',
        'Suivi d\'audits techniques',
        'Restitution d\'audits',
      ],
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'Réserviste - Section Cyber',
      company: '40 RT de Thionville',
      period: 'En cours',
      location: 'Thionville, France',
      tasks: [
        'Engagement dans la réserve opérationnelle',
        'Participation aux opérations de défense cyber',
        'Contribution à la sécurité du cyberespace français',
      ],
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Magasinier',
      company: 'CRITEL',
      period: 'Août 2024 - Septembre 2024',
      location: 'France',
      tasks: [
        'Restructuration du stockage de matériels bancaires',
        'Construction de nouveaux emplacements de stockage',
        'Gestion d\'inventaire',
      ],
      color: 'from-cyber-pink to-cyber-green',
    },
  ];

  return (
    <section id="expérience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Expérience Professionnelle</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`cyber-border cyber-border-hover p-8 rounded-lg bg-gradient-to-br ${exp.color}/5`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                        <Briefcase size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    </div>

                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                      {exp.company}
                    </p>

                    <div className="flex flex-col gap-2 mb-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:w-0 justify-center">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-cyber-darker`}></div>
                </div>

                {/* Spacer */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
