import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import {
  SparklesIcon,
  CommandLineIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import profileLogoSvg from "../../assets/profile-logo.svg";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);

  return (
    <Section
      id="about"
      ref={ref}
      className="bg-surface/30 relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-surface blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Hi, I'm Troy!"
          subtitle="A friendly developer who genuinely cares about helping your business succeed online."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              style={{ scale }}
              className="aspect-[4/5] rounded-4xl overflow-hidden bg-gradient-to-br from-surface to-accent/30 relative shadow-2xl border-4 border-white"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="mx-auto w-full flex items-center justify-center"
                  >
                    <img
                      src={profileLogoSvg}
                      alt="Troy Dawson"
                      className="w-full h-auto max-w-md drop-shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                style={{ rotate }}
                className="absolute -bottom-8 -right-8 w-52 h-52 bg-accent/20 rounded-4xl shadow-xl"
              />
              <motion.div
                animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 w-24 h-24 bg-white/50 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight"
            >
              I love helping businesses grow
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-light text-lg mb-6 leading-relaxed"
            >
              There's nothing better than seeing a local business owner light up
              when they see their new website. I'm a fullstack developer who
              specializes in creating beautiful, easy-to-use websites that
              actually help your business grow.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-text-light text-lg mb-8 leading-relaxed"
            >
              Whether you're just starting out or looking to refresh your online
              presence, I'm here to help. No tech jargon, no complicated
              processes—just honest work and great results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-text-light mb-8 leading-relaxed"
            >
              Whether you need a complete website overhaul, a new feature, or
              ongoing technical support, I bring the same dedication to quality
              and attention to detail to every project.
            </motion.p>

            <motion.a
              href="#experience"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="block mb-8 bg-white rounded-3xl p-6 border-l-4 border-accent shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <BriefcaseIcon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="font-bold text-primary text-xl mb-1">
                        Lenovo
                      </h4>
                      <p className="text-accent font-medium text-base">
                        Fullstack Software Engineer
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      className="text-accent"
                    >
                      →
                    </motion.div>
                  </div>
                  <p className="text-text-light text-sm mb-3">
                    Aug 2022 - Jun 2025 • 3 years
                  </p>
                  <div className="bg-accent/10 rounded-2xl p-3 mb-3 border-l-2 border-accent">
                    <p className="text-text font-medium text-sm">
                      Built an award-winning internal tool serving 1,000+ users
                      weekly
                    </p>
                  </div>
                  <p className="text-xs text-text-light italic">
                    Click to see full experience & achievements →
                  </p>
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="#contact" className="btn btn-primary inline-flex">
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
