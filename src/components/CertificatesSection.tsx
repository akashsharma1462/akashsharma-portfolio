import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Trophy, Medal } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'AI Integration with MERN',
    issuer: 'W3elite',
    icon: Award,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 2,
    title: 'MongoDB CRUD Operations',
    issuer: 'GeeksforGeeks',
    icon: Medal,
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 3,
    title: 'WEB-A-THON Hackathon',
    issuer: 'LPU',
    icon: Trophy,
    color: 'from-purple-400 to-pink-500',
  },
];

const achievements = [
  {
    id: 1,
    title: 'Naukri Campus Young Turks',
    description: 'Qualified Round 2',
    year: '2024',
  },
  {
    id: 2,
    title: 'Smart India Hackathon',
    description: 'Participant',
    year: '2024',
  },
];

export default function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition of my continuous learning and accomplishments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8 text-primary">
              Certifications
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="glass-card p-6 rounded-2xl group hover:neon-border transition-all duration-500"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                      <cert.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <motion.div
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Add Certificate Placeholder
              <motion.div
                className="glass-card p-6 rounded-2xl border-2 border-dashed border-primary/30 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <span className="text-muted-foreground text-sm">
                  ➕ Add new certificates here
                </span>
              </motion.div> */}
            </div>
          </div>

          {/* Achievements Timeline */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8 text-secondary">
              Achievements
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-accent" />

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    className="relative pl-16"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-4 w-5 h-5 rounded-full bg-secondary border-4 border-background"
                      whileHover={{ scale: 1.5 }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 hsl(var(--neon-green) / 0.4)',
                          '0 0 0 10px hsl(var(--neon-green) / 0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="glass-card p-5 rounded-2xl hover:neon-border transition-all duration-500">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-display font-bold text-foreground">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {achievement.description}
                          </p>
                        </div>
                        <span className="glass-card px-3 py-1 rounded-full text-xs font-mono text-primary">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Add Achievement Placeholder */}
                {/* <motion.div
                  className="relative pl-16"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <div className="absolute left-4 w-5 h-5 rounded-full border-2 border-dashed border-primary/50" />
                  <div className="glass-card p-5 rounded-2xl border-2 border-dashed border-primary/30 text-center">
                    <span className="text-muted-foreground text-sm">
                      ➕ Add future achievements
                    </span>
                  </div>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
