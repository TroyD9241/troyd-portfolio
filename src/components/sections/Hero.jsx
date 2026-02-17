import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import {
  ArrowDownIcon,
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <Section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl relative z-10"
        >
          <motion.p
            variants={fadeInUp}
            className="text-accent font-semibold mb-6 text-lg flex items-center gap-3"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 rounded-full bg-accent shadow-lg"
            />
            Your Friendly Local Developer
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight mb-6"
          >
            Building websites that help{" "}
            <motion.span
              variants={fadeInUp}
              className="text-accent relative inline-block"
            >
              your business
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,7 Q75,0 150,7 T300,7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </motion.svg>
            </motion.span>{" "}
            thrive
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-text-light mb-10 max-w-2xl leading-relaxed font-medium"
          >
            Hi! I'm a fullstack developer who loves helping local businesses
            grow online. From beautiful websites to custom web apps—let's build
            something great together.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#contact">Let's Work Together</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" href="#services">
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y, opacity, scale }}
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden lg:block w-[450px] h-[450px]"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.08, 1],
            }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-full h-full rounded-full bg-gradient-to-br from-surface/40 to-accent/10 flex items-center justify-center shadow-2xl"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-32 h-32 rounded-3xl bg-white shadow-xl flex items-center justify-center border-4 border-accent/20"
            >
              <SparklesIcon className="w-16 h-16 text-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-10 right-10 w-20 h-20 rounded-full bg-accent/20 shadow-lg"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-16 left-8 w-16 h-16 rounded-2xl bg-surface shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-text-light">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-text-light/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(234,88,12,0.2) 0%, rgba(254,215,170,0.1) 50%, rgba(255,251,235,0) 70%)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(254,243,199,0.4) 0%, rgba(120,53,15,0.1) 50%, rgba(255,251,235,0) 70%)",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl -z-10"
        style={{
          background:
            "radial(circle, rgba(30,41,59,0.1) 0%, rgba(30,41,59,0) 70%)",
        }}
      />
    </Section>
  );
}
