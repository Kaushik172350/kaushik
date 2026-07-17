import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { skillGroups } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-eyebrow mb-3">02 — Skills</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-900 dark:text-white max-w-2xl">
            A full stack toolkit, sharpened over 3.5+ years.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${group.color}`} />
                  <h3 className="font-display font-semibold text-base-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: si * 0.05 }}
                      whileHover={{ y: -2 }}
                      className="chip hover:border-accent-blue/50 dark:hover:border-accent-teal/50 hover:text-accent-blue dark:hover:text-accent-teal"
                    >
                      {skill}
                    </motion.span>
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
