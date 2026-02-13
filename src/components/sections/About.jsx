import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { SparklesIcon, CommandLineIcon, BoltIcon } from '@heroicons/react/24/outline'

const skills = [
  'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL',
  'MongoDB', 'Tailwind CSS', 'Prisma', 'REST APIs', 'Git',
  'AWS', 'Docker', 'GraphQL', 'Next.js', 'Redis'
]

export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1])

  return (
    <Section id="about" ref={ref} className="bg-white/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about creating digital solutions that make a real impact for local businesses."
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
              className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center"
                  >
                    <SparklesIcon className="w-16 h-16 text-accent" />
                  </motion.div>
                  <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-white/80 text-lg"
                  >
                    Your Photo Here
                  </motion.p>
                </motion.div>
              </div>
              <motion.div
                style={{ rotate }}
                className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent/30 rounded-2xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-4 right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
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
              className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4"
            >
              Building Digital Experiences That Matter
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-light mb-6 leading-relaxed"
            >
              I'm a fullstack developer with a passion for helping local businesses
              thrive in the digital world. With experience across modern web
              technologies, I deliver fast, beautiful, and functional websites
              that drive real results.
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <BoltIcon className="w-5 h-5 text-accent" />
                </motion.span>
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="outline">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="#contact"
                className="btn btn-primary inline-flex"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
