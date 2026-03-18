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
          <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_360px] gap-10 md:gap-15 items-start">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {t.about.content}
            </p>

            <div className="mx-auto md:mx-0 w-56 md:w-full shrink-0">
              <img
                src="/images/me.png"
                alt="Giovanni Tavares"
                className="w-full object-cover drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
