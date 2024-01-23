import { cn } from "@utils/cn";
import { forwardRef } from "react";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = forwardRef(({ ...props }: IconButtonProps, ref) => (
  <button
    {...props}
    ref={ref as any}
    className={cn(
      props.className,
      "w-12 h-12 flex justify-center items-center rounded-xl outline-none",
      "bg-primary-default hover:bg-primary-higher active:outline-2 active:outline-primary-highest"
    )}
  />
));

export default IconButton;
