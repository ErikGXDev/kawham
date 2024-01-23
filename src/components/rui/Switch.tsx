import { cn } from "@utils/cn";
import { useState } from "react";

export interface SwitchProps {
  align?: "right" | "left";
  checked?: boolean;
  onChecked?: (value: boolean) => any;

  classButton?: string;
  classCircle?: string;
}

export default function Switch({ ...props }: SwitchProps) {
  const [value, setValue] = useState(props.checked ?? false);

  return (
    <button
      className={cn(
        "w-24 h-12 rounded-full outline-none",
        "bg-background-higher border-2 border-background-highest",
        "flex items-center px-2",

        value && "bg-primary-default border-primary-highest",

        props.classButton
      )}
      onClick={() => {
        setValue(!value);
        if (props.onChecked) props.onChecked(!value);
      }}
    >
      <div
        className={cn(
          "transition-all",
          props.align === "right" ? !value && "grow" : value && "grow"
        )}
      ></div>
      <div
        className={cn(
          "rounded-full bg-foreground-default w-8 h-8 transition-all",
          props.classCircle
        )}
      ></div>
    </button>
  );
}
