import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-foreground outline-none transition placeholder:text-slate-400 focus:border-primary ${className}`}
      {...props}
    />
  );
}
