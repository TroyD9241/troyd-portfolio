import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Section = forwardRef(function Section({ id, className, children }, ref) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn('section', className)}
    >
      {children}
    </section>
  )
})

export { Section }
