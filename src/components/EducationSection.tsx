import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science',
    institution: 'Lovely Professional University',
    year: '2022 - 2026',
    score: 'CGPA: 7.5',
    icon: GraduationCap,
    color: 'from-cyan-400 to-blue-500',
    current: true,
  },
  {
    id: 2,
    degree: 'Intermediate (12th)',
    institution: 'Senior Secondary School',
    year: '2019 - 2021',
    score: '89%',
    icon: School,
    color: 'from-green-400 to-emerald-500',
    current: false,
  },
  {
    id: 3,
    degree: 'Matriculation (10th)',
    institution: 'High School',
    year: '2019',
    score: '90%',
    icon: BookOpen,
    color: 'from-purple-400 to-pink-500',
    current: false,
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Education Cards - Layered Stack Effect */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative mb-6"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ zIndex: education.length - index }}
              >
                <motion.div
                  className={`glass-card p-6 rounded-3xl transition-all duration-500 ${
                    edu.current ? 'neon-border' : 'hover:neon-border'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-display font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {edu.current && (
                            <span className="flex items-center gap-2 glass-card px-3 py-1 rounded-full text-xs">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                              </span>
                              <span className="text-secondary">Current</span>
                            </span>
                          )}
                          <span className="glass-card px-3 py-1 rounded-full text-sm font-mono text-primary">
                            {edu.year}
                          </span>
                        </div>
                      </div>

                      {/* Score */}
                      <div className="mt-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-display font-bold gradient-text">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Add Education Placeholder */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="glass-card p-6 rounded-3xl border-2 border-dashed border-primary/30 text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span className="text-muted-foreground">
                    Add future education (Masters, Courses, etc.)
                  </span>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
