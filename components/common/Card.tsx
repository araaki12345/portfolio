import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover-lift ${className}`}
    >
      {children}
    </div>
  );
}
