import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Cloud, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Expert',
    description: 'Building responsive, interactive UIs with React & Next.js',
  },
  {
    icon: Server,
    title: 'Backend Developer',
    description: 'Designing scalable APIs with Node.js & Express',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deploying with AWS, Docker & Kubernetes',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Integrating AI features into modern web apps',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer crafting intelligent, scalable web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Card Effect */}
          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, rotateY: -30 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-3xl neon-border transform-gpu hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
                  4th Year B.Tech CSE Student
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm a dedicated Full-Stack Developer pursuing my B.Tech in Computer Science at LPU. 
                  With a strong foundation in the MERN stack, I specialize in building real-time 
                  applications, video-calling platforms, and cloud-deployed solutions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  My journey includes developing remote interview platforms with live code execution, 
                  real-time chat systems with WebSocket integration, and deploying scalable applications 
                  using Docker and Kubernetes.
                </p>
                
                {/* Vision Statement */}
                <div className="glass-card p-4 rounded-xl border border-secondary/30 mt-6">
                  <p className="text-secondary font-mono text-sm">
                    🚀 "I build intelligent, scalable, real-time web experiences powered by MERN & AI."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 rounded-2xl group hover:neon-border transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-display font-bold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Achievements Placeholder */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="glass-card inline-block px-6 py-3 rounded-full border border-dashed border-primary/30">
            <span className="text-muted-foreground text-sm">
              {/* ✨ Add your future achievements here */}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
