import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play, Users, Zap, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  stats?: { label: string; value: string }[];
  github?: string;
  live?: string;
  icon: typeof Users;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Remote Interview Platform',
    subtitle: 'MERN Stack',
    description: 'A comprehensive platform for conducting 1-on-1 live technical interviews with real-time collaboration features.',
    features: [
      'Video calls & chat with Stream API',
      'VSCode-like code editor with real-time execution',
      'Screen sharing capabilities',
      'Automated feedback system',
      'Clerk authentication',
      'TanStack Query & Inngest background jobs',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Stream API', 'Clerk', 'TanStack Query'],
    stats: [
      { label: 'Live Sessions', value: '12+' },
      { label: 'Code Submissions', value: '30+' },
      { label: 'Response Time', value: '100ms' },
    ],
    github: 'https://github.com/akashsharma',
    live: 'https://interview-platform.demo',
    icon: Users,
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    subtitle: 'MERN Stack',
    description: 'A feature-rich chat application with real-time messaging, online status tracking, and media sharing.',
    features: [
      'JWT authentication',
      'Socket.io real-time messaging',
      'Online/offline indicators',
      'Resend email automation',
      'Cloudinary media uploads',
      'Arcjet rate-limiting',
      'Zustand state management',
    ],
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Cloudinary', 'Tailwind'],
    github: 'https://github.com/akashsharma',
    live: 'https://chat-app.demo',
    icon: MessageSquare,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      className="glass-card rounded-3xl overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <span className="glass-card px-3 py-1 rounded-full text-xs font-mono text-secondary">
            {project.subtitle}
          </span>
        </div>

        <h3 className="text-2xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Stats */}
      {project.stats && (
        <div className="px-6 py-4 border-t border-border/50">
          <div className="grid grid-cols-3 gap-4">
            {project.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expandable Features */}
      <motion.div
        className="overflow-hidden"
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
      >
        <div className="px-6 py-4 border-t border-border/50">
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <div className="px-6 py-4 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 py-4 border-t border-border/50 flex gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
        {project.github && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        )}
        {project.live && (
          <Button variant="default" size="sm" asChild>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my expertise in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Add Project Placeholder */}
        {/* <motion.div
          className="mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="glass-card rounded-3xl border-2 border-dashed border-primary/30 p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">➕</span>
            </div>
            <h3 className="text-xl font-display font-bold text-muted-foreground mb-2">
              Add New Project
            </h3>
            <p className="text-sm text-muted-foreground">
              Space for your future amazing projects
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
