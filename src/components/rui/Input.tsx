import { cn } from "@utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: "left" | "right";
}

const Input = forwardRef(({ ...props }: InputProps, ref) => (
  <input
    type="text"
    {...props}
    ref={ref as any}
    className={cn(
      props.className,
      props.textAlign === "right" && "text-right",
      "px-4 py-2 bg-background-higher rounded-xl border-2 border-background-highest outline-none focus:outline-primary-default focus:outline-3"
    )}
  />
));

export default Input;
