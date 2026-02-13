import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center'
}) {
  const alignments = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12', alignments[align], className)}
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'w-24 h-1 bg-accent mt-6',
        align === 'center' && 'mx-auto',
        align === 'right' && 'ml-auto'
      )} />
    </motion.div>
  )
}
