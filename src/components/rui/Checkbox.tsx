import { cn } from "@utils/cn";
import { useState } from "react";
import Checkmark from "./icons/Checkmark";

export interface CheckboxProps {
  checked?: boolean;
  classButton?: string;
  classCheckmark?: string;

  onChecked?: (value: boolean) => any;
}

export default function Checkbox({ ...props }: CheckboxProps) {
  const [value, setValue] = useState(props.checked ?? false);

  return (
    <button
      className={cn(
        "w-12 h-12 rounded-xl outline-none",
        "bg-background-higher border-2 border-background-highest",
        "flex items-center justify-center",

        value && "bg-primary-default border-primary-highest",

        props.classButton
      )}
      onClick={() => {
        setValue(!value);
        if (props.onChecked) props.onChecked(!value);
      }}
    >
      {value && <Checkmark className={cn("w-6 h-6", props.classCheckmark)} />}
    </button>
  );
}