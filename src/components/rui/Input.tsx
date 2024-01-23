import { cn } from "@utils/cn";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: "left" | "right";
}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={cn(
        props.className,
        props.textAlign === "right" && "text-right",
        "px-4 py-2 bg-background-higher rounded-xl border-2 border-background-highest outline-none focus:outline-primary-default focus:outline-3"
      )}
    />
  );
}
