import { cn } from "../../lib/utils";

export function Badge({ children, className, variant = "default" }) {
  const variants = {
    default: "bg-surface text-primary shadow-sm",
    accent: "bg-accent/20 text-accent shadow-sm",
    outline: "border-2 border-surface text-primary bg-white shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-2xl text-sm font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
