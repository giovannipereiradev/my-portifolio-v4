/**
 * Projects Section Component
 * Minimalist Brutalism: Grid layout with project cards,
 * monospace typography, subtle hover effects
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-background border-t border-border"
    >
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="font-mono text-5xl md:text-6xl font-bold text-foreground">
              {t.projects.title}
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group border border-border overflow-hidden hover:border-primary transition-colors"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-muted h-48 md:h-56">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Year */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-mono text-lg md:text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.project_descriptions[project.descriptionKey as keyof typeof t.project_descriptions] || ''}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-muted-foreground">
                      {t.projects.technologies}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2 py-1 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 font-mono text-xs"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t.projects.demo}
                        </Button>
                      </motion.a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 font-mono text-xs"
                        >
                          <Github className="h-3 w-3" />
                          {t.projects.github}
                        </Button>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
