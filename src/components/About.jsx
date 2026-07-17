import { Code2, Layers, Rocket, Smartphone } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { personal } from '../data/portfolioData.js';

const pillars = [
  {
    icon: Code2,
    title: 'Backend Engineering',
    desc: 'Designing robust REST APIs, auth systems, and database architecture with Laravel & Node.js.',
  },
  {
    icon: Layers,
    title: 'Frontend Craft',
    desc: 'Building fast, accessible interfaces with React.js, Next.js and modern CSS tooling.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Shipping cross-platform mobile experiences with React Native from a single codebase.',
  },
  {
    icon: Rocket,
    title: 'Startups to Scale',
    desc: 'Comfortable owning a product 0→1 at a startup, and hardening systems for production load.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-eyebrow mb-3">01 — About</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-900 dark:text-white max-w-2xl">
            Engineering software that holds up in production.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-700 dark:text-ink-300">
              {personal.summary}
            </p>
            <p className="mt-5 leading-relaxed text-ink-700 dark:text-ink-300">
              I care about clean code, sensible architecture, and shipping things that actually
              perform under real users — not just in a demo. Whether it's a startup MVP or a
              production system already carrying load, I focus on the same fundamentals: clear
              APIs, sound data models, and interfaces people enjoy using.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Clean Code', 'Scalability', 'Performance', 'Ownership'].map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="glass-card p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-stack-gradient-soft flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-accent-blue dark:text-accent-teal" />
                  </div>
                  <h3 className="font-display font-semibold text-base-900 dark:text-white mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
