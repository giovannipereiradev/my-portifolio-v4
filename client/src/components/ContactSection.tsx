/**
 * Contact Section Component
 * Minimalist Brutalism: Simple layout with social links,
 * monospace typography, minimal decoration
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { socialLinks } from '@/lib/projects';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export function ContactSection() {
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

  // Type-safe icon mapping
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Github: <Icons.Github className="h-5 w-5" />,
      Linkedin: <Icons.Linkedin className="h-5 w-5" />,
      Mail: <Icons.Mail className="h-5 w-5" />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-background border-t border-border"
    >
      <div className="container max-w-4xl">
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
              {t.contact.title}
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {/* Email */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="font-mono text-sm text-muted-foreground">
                {t.contact.email}
              </p>
              <a
                href="mailto:contact@giovannitavares.com"
                className="font-mono text-lg md:text-xl text-foreground hover:text-primary transition-colors"
              >
                contact@giovannitavares.com
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="font-mono text-sm text-muted-foreground">
                Social & Links
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    {getIcon(link.icon)}
                    <span className="font-mono text-sm">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border space-y-4"
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Estou sempre aberto para novas oportunidades e colaborações.
                Sinta-se à vontade para entrar em contato!
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I am always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
