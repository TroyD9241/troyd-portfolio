import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function Card({ className, children, hover = false, delay = 0 }) {
  if (hover) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -8, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
        className={cn('bg-white rounded-xl shadow-md overflow-hidden', className)}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn('bg-white rounded-xl shadow-md', className)}
    >
      {children}
    </motion.div>
  )
}
