/**
 * Hero Section Component
 * Minimalist Brutalism: Large monospace typography, asymmetric layout,
 * subtle grid background, smooth entrance animations
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { fadeUpContainer, fadeUpItem } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Decorative accent shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full border-2 border-primary"
      />

      <div className="relative z-10 container max-w-4xl">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >


          {/* Main Heading */}
          <motion.div variants={fadeUpItem} className="space-y-2">
            <h1 className="font-mono text-6xl md:text-7xl font-bold text-foreground leading-tight">
              {t.hero.name}
            </h1>
            <p className="font-mono text-xl md:text-2xl text-primary font-bold">
              {t.hero.title}
            </p>
            <p className="font-mono text-sm md:text-base text-muted-foreground">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUpItem}
            className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpItem}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="gap-2 font-mono font-bold"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="h-4 w-4" />
                {t.hero.cta_primary}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-mono font-bold"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.hero.cta_secondary}
                <ArrowDown className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
