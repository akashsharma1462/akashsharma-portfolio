import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// ==========================================
// EMAILJS CONFIGURATION - UPDATE THESE VALUES
// ==========================================
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Add an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with these variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Get your Public Key from Account > API Keys
// 5. Replace the values below:

const EMAILJS_SERVICE_ID = 'service_8j8kofg';     // e.g., 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_vd0rhlv';   // e.g., 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'ZaR-zbPKK4zCGDb3g';     // e.g., 'AbCdEfGhIjKlMnOp'

// ==========================================

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'akkrishna1462@gmail.com',
    href: 'mailto:akkrishna1462@gmail.com',
    editable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 79731 65728',
    href: 'tel:+917973165728',
    editable: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/akashsharma1462',
    href: 'https://github.com/akashsharma1462',
    editable: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/akashsharma11',
    href: 'https://www.linkedin.com/in/akashsharma11/',
    editable: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Punjab, India',
    href: '#',
    editable: true,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const isEmailJSConfigured = [EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY].every(
    (v) => typeof v === 'string' && v.length > 0 && !v.includes('YOUR_')
  );

  useEffect(() => {
    if (!isEmailJSConfigured) return;
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      // eslint-disable-next-line no-console
      console.log('EmailJS initialized');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('EmailJS init failed', err);
    }
  }, [isEmailJSConfigured]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate inputs
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (isEmailJSConfigured) {
      // Use EmailJS
      try {
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.from_name,
            from_email: formData.from_email,
            subject: formData.subject || 'Portfolio Contact',
            message: formData.message,
            to_name: 'Akash Sharma',
          }
        );

        console.log('EmailJS Success:', result);
        setIsSubmitted(true);
        toast.success('Message sent successfully!', {
          description: 'Thank you for reaching out. I will get back to you soon!',
        });

        // Reset form
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (err: any) {
        console.error('EmailJS Error:', err);
        setError('Failed to send message. Please try again or use the email link.');
        toast.error('Failed to send message', {
          description: 'Please try again or contact directly via email.',
        });
      }
    } else {
      // Fallback: Open email client
      const mailtoLink = `mailto:akkrishna1462@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `Name: ${formData.from_name}\nEmail: ${formData.from_email}\n\nMessage:\n${formData.message}`
      )}`;

      toast.info('Opening email client...', {
        description: 'EmailJS not configured. Using email client as fallback.',
      });

      window.location.href = mailtoLink;
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-primary">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:neon-border transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                  {info.editable && (
                    <span className="text-xs text-muted-foreground/50"></span>
                  )}
                </motion.a>
              ))}
            </div>

            {/* EmailJS Status */}
            {/* <motion.div
              className={`mt-6 glass-card p-4 rounded-2xl border ${
                isEmailJSConfigured 
                  ? 'border-secondary/30' 
                  : 'border-yellow-500/30'
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              {isEmailJSConfigured ? (
                <div className="flex items-center gap-3 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">EmailJS configured - Direct messaging enabled</span>
                </div>
              ) : (
                <div className="flex items-start gap-3 text-yellow-500">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">EmailJS not configured</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Messages will open your email client. Configure EmailJS in ContactSection.tsx for direct messaging.
                    </p>
                  </div>
                </div>
              )}
            </motion.div> */}

            {/* Add Contact Placeholder */}
            {/* <motion.div
              className="mt-6 glass-card p-4 rounded-2xl border-2 border-dashed border-primary/30 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              <span className="text-muted-foreground text-sm">
                ➕ Add future contact links here
              </span>
            </motion.div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-3xl neon-border">
              <h3 className="text-2xl font-display font-bold mb-6 gradient-text">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      maxLength={100}
                      value={formData.from_name}
                      onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      maxLength={255}
                      value={formData.from_email}
                      onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    maxLength={200}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground"
                    placeholder="Tell me about your project..."
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {formData.message.length}/2000
                  </p>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
