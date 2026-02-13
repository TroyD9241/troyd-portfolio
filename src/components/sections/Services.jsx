import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { CodeBracketIcon, BuildingOfficeIcon, BoltIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { services } from '../../data/services'

const serviceIcons = [CodeBracketIcon, BuildingOfficeIcon, BoltIcon]

export function Services() {
  return (
    <Section id="services" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Services"
          subtitle="Tailored solutions to meet your business needs and budget."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index]
            return (
              <Card
                key={service.id}
                hover
                delay={index * 0.15}
                className="p-8 flex flex-col h-full relative overflow-hidden group"
              >
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 8 }}
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: index * 0.15 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4, delay: index * 0.2 }}
                    >
                      <IconComponent className="w-8 h-8 text-accent" />
                    </motion.span>
                  </motion.div>

                  <h3 className="text-xl font-heading font-bold text-primary mb-3 relative">
                    {service.title}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '30%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                    />
                  </h3>

                  <p className="text-text-light mb-6 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.15 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-text"
                      >
                        <motion.svg
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.15 + i * 0.1 }}
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-100">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      className="text-accent font-semibold text-lg"
                    >
                      {service.price}
                    </motion.span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Let's discuss how I can help bring your vision to life.
                No obligation, just a conversation about your needs.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Get a Free Consultation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
