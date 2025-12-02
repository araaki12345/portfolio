interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "yellow" | "green" | "purple" | "orange" | "gray";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700 border border-gray-200",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    yellow: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    green: "bg-green-50 text-green-700 border border-green-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200",
    orange: "bg-orange-50 text-orange-700 border border-orange-200",
    gray: "bg-gray-100 text-gray-600 border border-gray-200",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
