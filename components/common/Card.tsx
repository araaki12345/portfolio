import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "lg",
}: CardProps) {
  return (
    <div
      className={`
        bg-[hsl(var(--card))]
        border border-[hsl(var(--border))]
        rounded-2xl
        ${paddingStyles[padding]}
        ${hover ? "transition-all duration-200 hover:bg-[hsl(var(--muted)/0.5)] hover:border-[hsl(var(--border))]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
