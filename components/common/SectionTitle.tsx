interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-semibold mb-6 text-white flex items-center">
      <span className="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
      {children}
    </h2>
  );
}
