import { cn } from '../../lib/utils'

export function Badge({ children, className, variant = 'default' }) {
  const variants = {
    default: 'bg-primary/10 text-primary',
    accent: 'bg-accent/20 text-accent',
    outline: 'border border-primary/30 text-primary'
  }

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
