import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--primary)] text-white shadow-lg shadow-blue-500/20 hover:bg-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
  secondary:
    "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
  ghost:
    "text-slate-700 hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
};

const sharedClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200";

export function Button({ children, href, variant = "primary", type = "button", onClick, className = "" }: ButtonProps) {
  const fullClassName = `${sharedClassName} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link className={fullClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={fullClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
