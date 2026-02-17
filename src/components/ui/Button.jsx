import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export function Button({
  variant = "primary",
  children,
  className,
  href,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 font-medium rounded-2xl transition-all duration-300 ease-out shadow-md";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/90 hover:shadow-xl hover:-translate-y-1",
    secondary:
      "bg-surface text-primary hover:bg-surface-dark border-2 border-primary/20",
  };

  const content = (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );

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
    );
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
  );
}
