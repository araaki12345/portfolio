import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "blue" | "yellow" | "green" | "purple" | "orange" | "gray" | "emerald" | "violet" | "sky";
  size?: "sm" | "md";
  icon?: ReactNode;
  className?: string;
}

const variantStyles = {
  default: "border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.5)] text-[hsl(var(--muted-foreground))]",
  blue: "border-blue-400/40 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  yellow: "border-yellow-400/40 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  green: "border-green-400/40 bg-green-500/10 text-green-600 dark:text-green-400",
  purple: "border-purple-400/40 bg-purple-500/10 text-purple-600 dark:text-purple-400",
  orange: "border-orange-400/40 bg-orange-500/10 text-orange-600 dark:text-orange-400",
  gray: "border-gray-400/40 bg-gray-500/10 text-gray-600 dark:text-gray-400",
  emerald: "border-emerald-400/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  violet: "border-violet-400/40 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  sky: "border-sky-400/40 bg-sky-500/10 text-sky-600 dark:text-sky-400",
} as const;

const sizeStyles = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
} as const;

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full border font-medium
        backdrop-blur-sm
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
