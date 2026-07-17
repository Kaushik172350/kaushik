import { Briefcase } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <p className="section-eyebrow mb-3">03 — Experience</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-900 dark:text-white max-w-2xl">
            Where I've built &amp; shipped.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue via-accent-teal to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="relative pl-14">
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-xl glass flex items-center justify-center">
                    <Briefcase size={16} className="text-accent-blue dark:text-accent-teal" />
                  </div>

                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-lg text-base-900 dark:text-white">
                        {job.role} · {job.company}
                      </h3>
                      {job.current && (
                        <span className="chip !text-accent-teal !border-accent-teal/40">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-ink-500 mb-4">{job.period}</p>
                    <ul className="space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-300 leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent-blue dark:bg-accent-teal shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
