import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "./Badge";

export function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

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
            {[...Array(15)].map((_, i) => (
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
                  opacity: [0, 0.4, 0],
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
              {/* Close button */}
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
                {/* Project Image */}
                <motion.div
                  variants={itemVariants}
                  className="relative mb-6 rounded-3xl overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.status}
                    </div>
                  )}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-accent origin-left"
                  />
                </motion.div>

                {/* Title & Description */}
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl font-heading font-bold text-primary mb-4"
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-text-light text-lg leading-relaxed mb-6"
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
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
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent my-6 origin-center"
                />

                {/* Links */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  {project.demoUrl ? (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-2xl font-semibold transition-colors shadow-md"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      View Live Demo
                    </motion.a>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-surface text-text-light px-6 py-3 rounded-2xl font-semibold">
                      <span className="text-sm">Coming Soon</span>
                    </div>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
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
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
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
