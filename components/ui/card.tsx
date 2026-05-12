import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <div className={`glass-card rounded-3xl p-6 ${className}`.trim()}>{children}</div>;
}
