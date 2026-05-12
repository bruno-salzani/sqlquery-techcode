import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

export function Select({ hasError = false, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:ring-4 ${hasError ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100" : "border-slate-200 focus:border-blue-300 focus:ring-[var(--ring)]"} ${props.className ?? ""}`.trim()}
    />
  );
}
