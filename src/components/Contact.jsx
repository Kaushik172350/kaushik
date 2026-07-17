import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from './Reveal.jsx';
import { personal } from '../data/portfolioData.js';

const contactCards = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/kaushiklunagariya', href: personal.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/kaushiklunagariya', href: personal.github },
  { icon: MapPin, label: 'Location', value: personal.location, href: null },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    window.setTimeout(() => {
      setStatus('sent');
      setValues({ name: '', email: '', subject: '', message: '' });
      window.setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-eyebrow mb-3">07 — Contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-900 dark:text-white max-w-2xl">
            Let's build something together.
          </h2>
          <p className="mt-4 text-ink-500 max-w-xl">
            Have a project in mind, or just want to say hi? My inbox is open.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {contactCards.map((c) => {
                const Content = (
                  <div className="glass-card p-5 flex items-center gap-4 h-full">
                    <div className="h-11 w-11 rounded-xl bg-stack-gradient-soft flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-accent-blue dark:text-accent-teal" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
                        {c.label}
                      </div>
                      <div className="text-sm font-medium text-base-900 dark:text-white truncate">
                        {c.value}
                      </div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={c.label}>{Content}</div>
                );
              })}
            </div>
          </Reveal>

          {/* <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="glass-card p-7 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full rounded-xl bg-white/60 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-3 text-sm focus:border-accent-blue dark:focus:border-accent-teal outline-none transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full rounded-xl bg-white/60 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-3 text-sm focus:border-accent-blue dark:focus:border-accent-teal outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                  Subject <span className="normal-case text-ink-500/70">(optional)</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/60 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-3 text-sm focus:border-accent-blue dark:focus:border-accent-teal outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full rounded-xl bg-white/60 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 px-4 py-3 text-sm focus:border-accent-blue dark:focus:border-accent-teal outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-7 w-full sm:w-auto disabled:opacity-70"
              >
                {status === 'idle' && (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle2 size={16} /> Message Sent
                  </>
                )}
              </motion.button>
            </form>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
