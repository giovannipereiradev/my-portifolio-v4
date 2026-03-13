/**
 * Footer Component
 * Minimalist Brutalism: Simple footer with copyright and attribution
 */

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <p className="font-mono text-sm text-muted-foreground">
            © {currentYear} Giovanni Tavares. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            The initial integration prompt was sourced from 21st.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
