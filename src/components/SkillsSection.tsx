import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  projects?: number;
  description?: string;
}

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: '⚡', color: 'from-blue-500 to-blue-700', projects: 5, description: 'Data structures & algorithms' },
      { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600', projects: 12, description: 'Primary development language' },
      { name: 'TypeScript', icon: '🔷', color: 'from-blue-400 to-blue-600', projects: 8, description: 'Type-safe applications' },
      { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-orange-600', projects: 15 },
      { name: 'CSS', icon: '🎨', color: 'from-blue-300 to-blue-500', projects: 15 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-cyan-600', projects: 10, description: 'Primary frontend framework' },
      { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700', projects: 8, description: 'Backend runtime' },
      { name: 'Express.js', icon: '🚂', color: 'from-gray-400 to-gray-600', projects: 8 },
      { name: 'Next.js', icon: '▲', color: 'from-slate-600 to-slate-800', projects: 4 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600', projects: 6, description: 'NoSQL database' },
      { name: 'MySQL', icon: '🐬', color: 'from-blue-400 to-blue-600', projects: 3 },
      { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-500 to-blue-700', projects: 2 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-orange-600', description: 'Cloud infrastructure' },
      { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600', description: 'Container deployment' },
      { name: 'Kubernetes', icon: '☸️', color: 'from-blue-500 to-blue-700', description: 'Container orchestration' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '📚', color: 'from-orange-500 to-red-600' },
      { name: 'GitHub', icon: '🐙', color: 'from-gray-500 to-gray-700' },
      { name: 'Linux', icon: '🐧', color: 'from-yellow-500 to-yellow-700' },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`glass-card p-4 rounded-xl cursor-pointer transition-all duration-300 ${
          isHovered ? 'neon-border' : 'border border-transparent'
        }`}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-center">
          <motion.span
            className="text-3xl block mb-2"
            animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {skill.icon}
          </motion.span>
          <p className="text-sm font-medium text-foreground">{skill.name}</p>
          {skill.projects && (
            <p className="text-xs text-muted-foreground mt-1">{skill.projects} projects</p>
          )}
        </div>
      </motion.div>

      {/* Tooltip */}
      {isHovered && skill.description && (
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 glass-card px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {skill.description}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-display font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Journey */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-display font-bold mb-8 text-center gradient-text">
            Tech Stack Journey
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {['C++', 'JavaScript', 'React', 'Node', 'MongoDB', 'DevOps', 'Kubernetes'].map((tech, i) => (
              <motion.div
                key={tech}
                className="flex items-center gap-2 md:gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <span className="glass-card px-4 py-2 rounded-full text-sm font-mono text-primary">
                  {tech}
                </span>
                {i < 6 && <span className="text-secondary text-xl">→</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add Skills Placeholder */}
        {/* <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <div className="glass-card inline-block px-6 py-3 rounded-full border border-dashed border-primary/30">
            <span className="text-muted-foreground text-sm">
              ➕ Add or remove skills as you learn
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
