import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks } from '../data/portfolioData.js';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/5' : ''
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-3 font-display font-semibold text-lg text-base-900 dark:text-white group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stack-gradient text-white font-mono text-sm font-bold tracking-wider shadow-md shadow-accent-blue/20 dark:shadow-accent-teal/10 group-hover:scale-105 transition-transform duration-300">
              KL
            </span>
            <span>
              Kaushik <span className="text-gradient">Lunagariya</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-ink-700 dark:text-ink-300 hover:text-accent-blue dark:hover:text-accent-teal hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className="h-10 w-10 flex items-center justify-center rounded-xl glass hover:border-accent-blue/50 dark:hover:border-accent-teal/50 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {/* <a href="#contact" className="hidden sm:inline-flex btn-primary !py-2 !px-4 text-sm">
              Contact Me
            </a> */}
            <button
              className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-4 mt-2 overflow-hidden"
          >
            <div className="glass rounded-2xl p-3 flex flex-col gap-1 font-mono text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-ink-700 dark:text-ink-300 hover:text-accent-blue dark:hover:text-accent-teal hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}