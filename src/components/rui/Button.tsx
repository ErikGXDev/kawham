import { cn } from "@utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "filled" | "flat" | "outline";
}

export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        "px-4 py-2 rounded-xl outline-none",
        props.variant === "flat"
            ? "bg-background-higher hover:bg-background-highest hover:outline-primary-default hover:outline-1 active:outline-2"
            : props.variant === "outline"
            ? "outline-2 outline-primary-default text-primary-highest hover:bg-background-higher hover:outline-primary-default active:outline-primary-highest"
            : "bg-primary-default hover:bg-primary-higher active:outline-2 active:outline-primary-highest"
      )}
    />
  );
}
