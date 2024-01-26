import { cn } from "@utils/cn";
import { forwardRef } from "react";

export interface GapProps extends React.HTMLProps<HTMLDivElement> {
  gapsize: "small" | "medium" | "large";
  direction?: "horizontal" | "vertical";
}

const Gap = forwardRef(({ ...props }: GapProps, ref) => (
  <div
    {...props}
    ref={ref as any}
    className={cn(
      props.className,
      props.gapsize == "small"
        ? props.direction == "horizontal"
          ? "px-2"
          : "py-2"
        : props.gapsize == "large"
        ? props.direction == "horizontal"
          ? "px-6"
          : "py-6"
        : props.direction == "horizontal"
        ? "px-4"
        : "py-4",
    )}
  ></div>
));

export default Gap;
