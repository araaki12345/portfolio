interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`
        text-xl font-semibold
        text-[hsl(var(--foreground))]
        mb-4
        ${className}
      `}
    >
      {children}
    </h2>
  );
}
