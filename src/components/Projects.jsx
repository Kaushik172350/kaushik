import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Reveal from './Reveal.jsx';
import { projects } from '../data/portfolioData.js';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-eyebrow mb-3">04 — Projects</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-900 dark:text-white max-w-2xl">
            Featured work.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="glass-card overflow-hidden h-full flex flex-col group">
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.accent} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                  <span className="font-display font-bold text-3xl text-white/90 tracking-tight text-center px-6">
                    {project.title}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-base-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-1.5 text-xs text-ink-700 dark:text-ink-300"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-blue dark:bg-accent-teal shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="chip !py-1">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <a
                      href="#contact"
                      className="btn-secondary !py-2 !px-4 text-xs flex-1"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
