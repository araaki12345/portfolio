import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg p-8 border border-gray-200 hover-lift ${className}`}
    >
      {children}
    </div>
  );
}
