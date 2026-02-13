import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { ArrowDownIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <Section id="hero" ref={ref} className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl relative z-10"
        >
          <motion.p
            variants={fadeInUp}
            className="text-accent font-medium mb-4 tracking-widest uppercase flex items-center gap-2"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 rounded-full bg-accent"
            />
            Fullstack Developer
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary leading-tight mb-6"
          >
            I build websites that{' '}
            <motion.span
              variants={fadeInUp}
              className="text-accent relative inline-flex items-center"
            >
              grow
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-4 text-accent/30"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,10 Q50,0 100,10 T200,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.svg>
            </motion.span>
            {' '}local businesses
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-text-light mb-10 max-w-2xl leading-relaxed"
          >
            Professional fullstack development for local businesses and startups.
            Modern technologies, elegant design, and results-driven solutions.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="#contact">
                Let's Work Together
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" href="#services">
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y, opacity, scale }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block w-[500px] h-[500px]"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="w-full h-full rounded-full border-2 border-accent/20 border-dashed flex items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
              }}
              className="w-[80%] h-[80%] rounded-full border border-primary/10 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }
                }}
                className="w-[60%] h-[60%] rounded-full border border-accent/30 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center"
                >
                  <CodeBracketIcon className="w-10 h-10 text-accent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
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
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-3xl -z-10"
        style={{
          background: 'radial(circle, rgba(212,165,116,0.15) 0%, rgba(212,165,116,0) 70%)'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl -z-10"
        style={{
          background: 'radial(circle, rgba(30,41,59,0.1) 0%, rgba(30,41,59,0) 70%)'
        }}
      />
    </Section>
  )
}
