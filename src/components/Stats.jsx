import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/portfolioData.js';
import { useCountUp } from '../hooks/useCountUp.js';

function StatCard({ stat, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const value = useCountUp(stat.value, isInView);
  const display = Number.isInteger(stat.value) ? Math.floor(value) : value.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 text-center"
    >
      <div className="font-display font-bold text-4xl sm:text-5xl text-gradient tabular-nums">
        {display}
        {stat.suffix}
      </div>
      <div className="mt-3 font-mono text-xs uppercase tracking-widest text-ink-500">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
