import { Quote, Star } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { testimonials } from '../data/portfolioData.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-eyebrow mb-3">06 — Testimonials</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-900 dark:text-white max-w-2xl">
            What people say about working with me.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="glass-card p-7 h-full flex flex-col">
                <Quote className="text-accent-blue/40 dark:text-accent-teal/40 mb-4" size={28} />
                <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300 flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-stack-gradient flex items-center justify-center text-white font-display font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-base-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-ink-500">{t.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} className="fill-accent-amber text-accent-amber" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
