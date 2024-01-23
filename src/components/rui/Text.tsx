import { cn } from "@utils/cn";
import { forwardRef } from "react";

export interface TextProps extends React.HTMLProps<HTMLHeadingElement> {
  variant?: "text" | "small" | "header" | "subheader";
  foreground?: "dimmer" | "normal" | "lighter";
}

const Text = forwardRef(({ ...props }: TextProps, ref) => (
  <span
    {...props}
    ref={ref as any}
    className={cn(
      props.className,
      "block",
      props.variant === "header"
        ? "text-2xl leading-loose"
        : props.variant === "subheader"
        ? "text-xl leading-loose"
        : props.variant === "small"
        ? "text-xs"
        : "text-base",

      props.foreground === "dimmer"
        ? "text-foreground-muted"
        : props.foreground === "lighter"
        ? "text-foreground-higher"
        : "text-foreground-default"
    )}
  >
    {props.children}
  </span>
));

export default Text;
