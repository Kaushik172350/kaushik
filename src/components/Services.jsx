import {
  Cloud,
  Code,
  Database,
  Gauge,
  Plug,
  Server,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import Reveal from './Reveal.jsx';
import { services } from '../data/portfolioData.js';

const icons = [Code, Server, Sparkles, Smartphone, Database, Cloud, Plug, Gauge];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-eyebrow mb-3">05 — Services</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-900 dark:text-white max-w-2xl">
            How I can help your team.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="glass-card p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-stack-gradient-soft flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent-blue dark:text-accent-teal" />
                  </div>
                  <h3 className="font-display font-semibold text-base-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
