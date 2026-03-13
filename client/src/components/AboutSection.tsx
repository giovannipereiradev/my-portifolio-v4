/**
 * About Section Component
 * Minimalist Brutalism: Clean typography, generous spacing,
 * left-aligned content with asymmetric layout
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-background border-t border-border"
    >
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="font-mono text-5xl md:text-6xl font-bold text-foreground">
              {t.about.title}
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          {/* Content Area */}
          <div className="prose prose-invert max-w-none">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {t.about.content}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
