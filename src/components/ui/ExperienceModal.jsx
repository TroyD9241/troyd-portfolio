import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  BuildingOffice2Icon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import { Badge } from "./Badge";

export function ExperienceModal({ isOpen, onClose, experience }) {
  if (!experience) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateX: -15,
      y: 100,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5,
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      rotateX: 15,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 20,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-primary/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Animated particles in background */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                  scale: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-2 h-2 bg-accent rounded-full"
              />
            ))}
          </motion.div>

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-4xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative border-4 border-accent/20">
              {/* Close button with rotation animation */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9, rotate: -90 }}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-accent/10 hover:bg-accent text-primary hover:text-white flex items-center justify-center transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </motion.button>

              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="p-8"
              >
                {/* Header with animated gradient */}
                <motion.div
                  variants={itemVariants}
                  className="mb-6 relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-surface to-accent/20 border-l-4 border-accent"
                >
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-20"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(234,88,12,0.3), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-3"
                    >
                      {experience.type === "fulltime" ? (
                        <BuildingOffice2Icon className="w-10 h-10 text-accent" />
                      ) : (
                        <ComputerDesktopIcon className="w-10 h-10 text-accent" />
                      )}
                    </motion.div>
                    <motion.h2
                      variants={itemVariants}
                      className="text-3xl font-heading font-bold text-primary mb-2"
                    >
                      {experience.company}
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-xl text-accent font-semibold mb-2"
                    >
                      {experience.title}
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="text-text-light"
                    >
                      {experience.period} • {experience.duration} •{" "}
                      {experience.location}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Headline with animated border */}
                <motion.div variants={itemVariants} className="mb-6 relative">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accent origin-left"
                  />
                  <div className="bg-accent/10 rounded-2xl p-4 pl-6 border-l-4 border-accent">
                    <motion.p
                      variants={itemVariants}
                      className="text-lg font-semibold text-primary"
                    >
                      {experience.headline}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-text-light text-lg leading-relaxed mb-6"
                >
                  {experience.description}
                </motion.p>

                {/* Achievements with staggered entrance */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={achievementVariants}
                        className="flex items-start gap-3 bg-surface/30 rounded-2xl p-4 border-l-4 border-accent/30"
                      >
                        <motion.span
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            delay: i * 0.1,
                            duration: 0.5,
                          }}
                          className="text-accent text-xl flex-shrink-0 mt-0.5"
                        >
                          ▸
                        </motion.span>
                        <span className="text-text">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies with rotating entrance */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, i) => (
                      <motion.div
                        key={tech}
                        custom={i}
                        variants={badgeVariants}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Badge variant="default">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Animated divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent my-6 origin-center"
                />

                {/* Footer links */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href="https://www.linkedin.com/in/troyd41/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-surface hover:bg-surface-dark text-primary px-6 py-3 rounded-2xl font-semibold transition-colors shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </motion.a>
                  {experience.website && (
                    <motion.a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-2xl font-semibold transition-colors shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      Visit {experience.company}
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
