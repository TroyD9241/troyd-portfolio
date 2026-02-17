import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Card({ className, children, hover = false, delay = 0 }) {
  if (hover) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{
          y: -8,
          shadow: "0 25px 50px -12px rgba(120, 53, 15, 0.15)",
        }}
        className={cn(
          "bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-surface/50",
          className,
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white rounded-3xl shadow-lg border-2 border-surface/50",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
