interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
      {children}
    </h2>
  );
}
