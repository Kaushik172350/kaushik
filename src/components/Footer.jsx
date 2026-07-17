import { Mail, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { navLinks, personal } from '../data/portfolioData.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/5 dark:border-white/[0.06] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-semibold text-lg text-base-900 dark:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stack-gradient text-white font-mono text-sm font-bold tracking-wider shadow-md shadow-accent-blue/20 dark:shadow-accent-teal/10 group-hover:scale-105 transition-transform duration-300">
                KL
              </span>
              Kaushik <span className="text-gradient">Lunagariya</span>
            </a>
            <p className="mt-4 text-sm text-ink-500 leading-relaxed max-w-xs">
              Senior Full Stack Developer building scalable web & mobile products from Rajkot, India.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-700 dark:text-ink-300 hover:text-accent-blue dark:hover:text-accent-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email Kaushik"
                className="h-10 w-10 flex items-center justify-center rounded-xl glass hover:border-accent-blue/50 dark:hover:border-accent-teal/50 transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaushik on LinkedIn"
                className="h-10 w-10 flex items-center justify-center rounded-xl glass hover:border-accent-blue/50 dark:hover:border-accent-teal/50 transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaushik on GitHub"
                className="h-10 w-10 flex items-center justify-center rounded-xl glass hover:border-accent-blue/50 dark:hover:border-accent-teal/50 transition-colors"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-500 font-mono">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500 font-mono">Designed & built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
