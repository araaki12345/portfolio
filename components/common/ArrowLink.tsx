import Link from "next/link";
import { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export default function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: ArrowLinkProps) {
  const linkClasses = `
    group inline-flex items-center gap-1
    px-3 py-1.5
    rounded-lg
    border border-[hsl(var(--border))]
    bg-[hsl(var(--muted)/0.3)]
    text-sm text-[hsl(var(--muted-foreground))]
    hover:bg-[hsl(var(--muted))]
    hover:text-[hsl(var(--foreground))]
    transition-all duration-200
    ${className}
  `;

  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-current"
    >
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        className="translate-x-1 scale-x-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:scale-x-100"
      />
      <polyline
        points="12 5 19 12 12 19"
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      />
    </svg>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        <span>{children}</span>
        {arrowIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      <span>{children}</span>
      {arrowIcon}
    </Link>
  );
}
