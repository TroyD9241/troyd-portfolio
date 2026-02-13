import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { projects } from '../../data/projects'

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-white/50">
      <div className="container mx-auto">
        <SectionHeading
          title="Portfolio"
          subtitle="Recent projects showcasing my skills and approach to problem-solving."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              hover
              delay={index * 0.1}
              className="overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden bg-primary/10 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-text-light text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <motion.a
                    href={project.demoUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary font-medium text-sm hover:text-accent transition-colors"
                  >
                    Live Demo →
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary font-medium text-sm hover:text-accent transition-colors"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-4">
            More projects coming soon. Have a project in mind?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-secondary inline-flex"
          >
            Let's Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </Section>
  )
}
