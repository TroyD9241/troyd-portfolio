import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export function Contact() {
  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const emailAddress = "troydawsondev@gmail.com";

  async function handleSubmit(event) {
    event.preventDefault();
    setFormState({ submitting: true, success: false, error: false });

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        import.meta.env.VITE_FORMSPREE_ENDPOINT ||
          "https://formspree.io/f/demo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setFormState({ submitting: false, success: true, error: false });
        event.target.reset();
      } else {
        setFormState({ submitting: false, success: false, error: true });
      }
    } catch {
      setFormState({ submitting: false, success: false, error: true });
    }
  }

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background/80" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading
          title="Let's Chat!"
          subtitle="Got a project idea? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours."
        />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-4xl shadow-2xl p-10 md:p-14 relative overflow-hidden border-4 border-surface/30"
        >
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
          />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.a
              href={`mailto:${emailAddress}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex items-center gap-4 p-5 bg-surface/40 rounded-2xl hover:bg-surface shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shadow-lg">
                <EnvelopeIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-text-light">Email</p>
                <p className="font-medium text-primary">{emailAddress}</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/troyd41/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex items-center gap-4 p-5 bg-surface/40 rounded-2xl hover:bg-surface shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-text-light">LinkedIn</p>
                <p className="font-medium text-primary">Connect with me</p>
              </div>
            </motion.a>
          </div>

          {formState.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
              >
                <CheckCircleIcon className="w-14 h-14 text-green-600" />
              </motion.div>
              <h3 className="text-3xl font-heading font-bold text-primary mb-3">
                Thanks so much!
              </h3>
              <p className="text-text-light text-lg mb-6 leading-relaxed">
                I've received your message and I'll get back to you within 24
                hours. Looking forward to chatting!
              </p>
              <Button
                onClick={() =>
                  setFormState({
                    submitting: false,
                    success: false,
                    error: false,
                  })
                }
                variant="secondary"
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-surface focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-200 outline-none font-medium"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-surface focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-200 outline-none font-medium"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Project Type
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  id="projectType"
                  name="projectType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none"
                >
                  <option value="">Select a project type</option>
                  <option value="fullstack">Fullstack Website</option>
                  <option value="local">Local Business Website</option>
                  <option value="contract">Short-term Contract</option>
                  <option value="other">Other</option>
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-surface focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-200 outline-none resize-none font-medium"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </motion.div>

              {formState.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-50 text-red-600 text-sm"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full"
                >
                  {formState.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <PaperAirplaneIcon className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
