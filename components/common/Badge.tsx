interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "yellow" | "green" | "purple" | "orange" | "gray";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantStyles = {
    default: "bg-gray-800/50 text-gray-300 border border-gray-700",
    blue: "bg-blue-600/20 text-blue-300",
    yellow: "bg-yellow-600/20 text-yellow-300",
    green: "bg-green-600/20 text-green-300",
    purple: "bg-purple-600/20 text-purple-300",
    orange: "bg-orange-600/20 text-orange-300",
    gray: "bg-gray-600/20 text-gray-300",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
