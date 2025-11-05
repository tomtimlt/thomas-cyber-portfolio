import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thomas.lhostete@outlook.fr',
      link: 'mailto:thomas.lhostete@outlook.fr',
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 6 46 13 60 33',
      link: 'tel:+33646136033',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Nancy, France',
      link: '#',
      color: 'from-cyber-pink to-cyber-green',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Me Contacter</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-border cyber-border-hover p-6 rounded-lg text-center group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-gray-400 mb-2">{info.label}</p>
                <p className="font-semibold text-white group-hover:text-cyber-blue transition-colors">{info.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto cyber-border p-8 rounded-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-cyber-blue">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-cyber-dark border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-cyber-blue">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-cyber-dark border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="Votre email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-cyber-blue">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-cyber-dark border border-cyber-blue/30 rounded-lg focus:border-cyber-blue focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {submitted ? (
                <>
                  <span>✓ Message envoyé!</span>
                </>
              ) : (
                <>
                  Envoyer le message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-cyber-blue/20"
        >
          <p className="text-gray-400 mb-2">© 2025 Thomas L'hostete. Tous droits réservés.</p>
          <p className="text-sm text-gray-500">Créé avec React, TypeScript et Tailwind CSS</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
