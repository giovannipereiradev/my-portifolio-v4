/**
 * Navbar Component
 * Minimalist Brutalism: Monospace font for nav items, subtle underline on active,
 * asymmetric layout with theme/language toggles on right
 */

import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ y: -3 }}
          onClick={handleLogoClick}
          className="font-mono text-lg font-bold text-foreground cursor-pointer"
        >
          GT
        </motion.div>

        {/* Navigation Items - Hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ y: -3 }}
              className={`font-mono text-sm transition-colors relative ${
                activeSection === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Controls: Theme & Language */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <motion.div 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="cursor-pointer p-2 flex items-center gap-1 font-mono text-xs"
            title={`Switch to ${language === 'pt' ? 'English' : 'Português'}`}
          >
            <Globe className="h-4 w-4" />
            <span>{language.toUpperCase()}</span>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="cursor-pointer p-2"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
