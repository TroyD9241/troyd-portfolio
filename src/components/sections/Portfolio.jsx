import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { ProjectModal } from "../ui/ProjectModal";
import { projects } from "../../data/projects";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  return (
    <>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
      <Section
        id="portfolio"
        className="bg-surface/30 relative overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto relative z-10">
          <SectionHeading
            title="Recent Work"
            subtitle="Click on any project to see more details"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleProjectClick(project)}
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-surface/30 hover:border-accent/50 group relative overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-surface/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Project Image Preview */}
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.status && (
                      <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {project.status}
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-light leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Click to expand indicator */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 text-accent font-semibold text-sm mb-4"
                  >
                    <span>Click to see full details</span>
                    <motion.span className="text-xl">→</motion.span>
                  </motion.div>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-surface/50">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div className="absolute -bottom-2 -right-2 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-text-light text-lg mb-6">
              Working on something exciting? I'd love to help bring your ideas
              to life!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-accent/90 transition-colors shadow-xl"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
