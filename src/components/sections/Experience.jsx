import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { BuildingOffice2Icon, ComputerDesktopIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import { CalendarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    id: 1,
    company: 'Lenovo',
    title: 'Fullstack Software Engineer',
    period: 'Aug 2022 - Jun 2025',
    duration: '3 years',
    location: 'Hybrid',
    headline: 'Built an award-winning internal tool serving 1,000+ users weekly',
    description: 'Led the complete redesign of a legacy system into a modern, user-friendly platform. The transformation was so successful that it won internal recognition and became the standard tool across the organization.',
    achievements: [
      'Transformed outdated systems into modern web applications that users love',
      'Streamlined workflows for multiple teams, saving hours of manual work every week',
      'Built robust, well-tested code that reduced bugs and manual testing needs',
      'Listened directly to users to improve their experience and increase satisfaction'
    ],
    technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JavaScript'],
    website: 'https://www.lenovo.com',
    type: 'fulltime'
  },
  {
    id: 2,
    company: 'Metav3rse, Inc.',
    title: 'Software Engineer (Contract)',
    period: 'Dec 2021 - Aug 2022',
    duration: '9 months',
    location: 'Remote',
    headline: 'Built high-traffic web3 platform generating $2M+ in launch day sales',
    description: 'Designed and deployed scalable systems for a cutting-edge NFT launch platform. Successfully handled extreme traffic spikes during a $2M+ launch while maintaining flawless performance.',
    achievements: [
      'Built systems that handled nearly 10,000 users at once without crashing',
      'Created reliable payment infrastructure for high-stakes transactions',
      'Delivered a fast, seamless experience during a multi-million dollar launch',
      'Worked with cutting-edge web3 technology under tight deadlines'
    ],
    technologies: ['JavaScript', 'MongoDB', 'Node.js', 'Web3', 'Solidity'],
    website: 'https://metav3rse.io',
    type: 'contract'
  }
]

const companyLogos = {
  fulltime: '🏢',
  contract: '🚀'
}

export function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <Section id="experience" ref={ref} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="My Experience"
          subtitle="Building reliable, user-focused solutions for complex challenges."
        />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8 ml-12"
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative border-l-4 border-accent"
              >
                <div className="absolute -left-[3.25rem] top-6 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center z-10 border-2 border-white">
                  <span className="text-lg">{companyLogos[exp.type]}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                  <span className="flex items-center gap-1 text-text-light">
                    <CalendarIcon className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="text-primary/30">•</span>
                  <span className="flex items-center gap-1 text-accent font-medium">
                    <CheckBadgeIcon className="w-4 h-4" />
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-1">
                  {exp.company}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {exp.title}
                </p>

                <div className="bg-accent/10 rounded-lg p-3 mb-4 border-l-2 border-accent">
                  <p className="text-text font-medium">
                    {exp.headline}
                  </p>
                </div>

                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-2 text-sm text-text"
                    >
                      <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-3 border-t border-gray-100">
                  <motion.a
                    href="https://www.linkedin.com/in/troyd41/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    View Full Profile
                  </motion.a>
                  {exp.website && (
                    <motion.a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:text-accent transition-colors"
                    >
                      <GlobeAltIcon className="w-4 h-4" />
                      {exp.company}
                    </motion.a>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="absolute left-[-1.625rem] top-6 w-5 h-5 rounded-full border-2 border-white bg-accent z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
