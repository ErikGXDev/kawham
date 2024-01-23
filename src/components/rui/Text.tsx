import { cn } from "@utils/cn";

export interface TextProps extends React.HTMLProps<HTMLHeadingElement> {
  variant?: "text" | "small" | "header" | "subheader";
}

export default function Text({ ...props }: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        props.className,
        "block",
        props.variant === "header"
          ? "text-2xl leading-loose"
          : props.variant === "subheader"
          ? "text-xl leading-loose"
          : props.variant === "small"
          ? "text-xs"
          : "text-base"
      )}
    >
      {props.children}
    </span>
  );
}
