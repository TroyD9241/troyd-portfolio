import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

export function Button({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg transition-all duration-300 ease-out'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }

  const content = (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
      {...props}
    >
      {content}
    </motion.button>
  )
}
