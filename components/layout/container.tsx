import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

export function Container({ 
  children, 
  className = "", 
  maxWidth = "lg" 
}: ContainerProps) {
  const maxWidthClass = maxWidthClasses[maxWidth];
  
  return (
    <div className={`mx-auto w-full ${maxWidthClass} px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
