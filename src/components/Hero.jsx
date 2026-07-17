import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, FolderGit2, Mail, MapPin } from 'lucide-react';
import { personal, typingRoles } from '../data/portfolioData.js';

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(typingRoles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-accent-blue/20 dark:bg-accent-blue/25 blur-[100px] animate-float pointer-events-none" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-teal/20 dark:bg-accent-teal/20 blur-[110px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-amber/10 blur-[100px] animate-float pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 chip mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-accent-teal animate-pulse" />
            Available for freelance & full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-base-900 dark:text-white"
          >
            Building scalable
            <br />
            software as{' '}
            <span className="text-gradient">{personal.name.split(' ')[0]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 h-8 font-mono text-lg sm:text-xl text-accent-blue dark:text-accent-teal"
          >
            {typed}
            <span className="inline-block w-[2px] h-5 bg-current ml-1 animate-blink align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-ink-700 dark:text-ink-300 text-base sm:text-lg leading-relaxed"
          >
            Senior Full Stack Developer with {personal.experience} experience shipping REST
            APIs, admin panels, and cross-platform apps — from database schema to pixel-perfect UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-ink-500 font-mono"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-accent-blue dark:text-accent-teal" />
              {personal.location}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href={`${import.meta.env.BASE_URL}Kaushik_Lunagariya_Resume.pdf`}
              download
              className="btn-primary"
            >
              <Download size={16} /> Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              <FolderGit2 size={16} /> View Projects
            </a>
            {/* <a href="#contact" className="btn-secondary">
              <Mail size={16} /> Contact Me
            </a> */}
          </motion.div>
        </div>

        {/* Right: profile portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 bg-stack-gradient opacity-25 blur-2xl rounded-[2.5rem]" />

          <div className="relative rounded-[2rem] p-[3px] bg-stack-gradient shadow-2xl shadow-black/20">
            <div className="relative rounded-[calc(2rem-3px)] overflow-hidden bg-base-900">
              <img
                src={`${import.meta.env.BASE_URL}kaushik-photo.jpg`}
                alt="Kaushik Lunagariya, Senior Full Stack Developer"
                width={900}
                height={1448}
                className="w-full aspect-[4/5] object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -bottom-6 -left-6 glass-card px-4 py-3 flex items-center gap-3 shadow-xl"
          >
            <div className="h-9 w-9 rounded-lg bg-stack-gradient flex items-center justify-center text-white font-display font-bold text-sm">
              20+
            </div>
            <div className="font-mono text-xs">
              <div className="text-base-900 dark:text-white font-semibold">Projects</div>
              <div className="text-ink-500">shipped to production</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute -top-5 -right-5 glass-card px-4 py-2.5 shadow-xl"
          >
            <div className="font-mono text-xs text-base-900 dark:text-white font-semibold">
              {personal.experience}
            </div>
            <div className="font-mono text-[10px] text-ink-500">experience</div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500 font-mono text-[11px] tracking-widest uppercase animate-float"
      >
        Scroll
        <ArrowRight size={14} className="rotate-90" />
      </a>
    </section>
  );
}
