import ChevronRight from "./icons/ChevronRight";
import ChevronDown from "./icons/ChevronDown";
import Button from "./Button";
import Text from "./Text";

import { cn } from "@utils/cn";
import { useEffect, useRef, useState } from "react";

export interface SelectProps {
  options: string[];
  default?: number;
  onChange?: (index: number) => any;
}

export default function Select({ ...props }: SelectProps) {
  const dropdownMain = useRef<HTMLButtonElement>(null);
  const dropdownContent = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState<number | null>(
    props.default ?? null
  );

  useEffect(() => {
    if (!isExpanded) return;

    function clickListener(e: MouseEvent) {
      if (
        !e.target ||
        (!dropdownContent.current!.contains(e.target as HTMLElement) &&
          !dropdownMain.current!.contains(e.target as HTMLElement))
      ) {
        setIsExpanded(false);
      }
    }

    window.addEventListener("click", clickListener);

    return () => window.removeEventListener("click", clickListener);
  }, [isExpanded]);

  return (
    <div className="relative w-fit">
      <Button
        ref={dropdownMain}
        variant="flat"
        className="w-64 flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {selected !== null ? (
          props.options[selected]
        ) : (
          <Text foreground="dimmer">Select an option...</Text>
        )}
        {isExpanded ? (
          <ChevronDown width={16} height={16} className="pointer-events-none" />
        ) : (
          <ChevronRight
            width={16}
            height={16}
            className="pointer-events-none"
          />
        )}
      </Button>
      {isExpanded && (
        <div
          className="absolute flex flex-col top-12 left-0"
          ref={dropdownContent}
        >
          {props.options.map((option, i) => (
            <button
              key={i}
              className={cn(
                "w-64 px-4 py-2 outline-none bg-background-higher border-2 border-transparent",
                "text-left",

                i === selected
                  ? "bg-primary-default hover:bg-primary-default hover:border-transparent"
                  : "hover:border-primary-default active:bg-background-highest",

                i === 0 && "rounded-t-xl",
                i === props.options.length - 1 && "rounded-b-xl"
              )}
              onClick={() => {
                setIsExpanded(false);
                setSelected(i);
                if (props.onChange && selected !== i) props.onChange(i);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
