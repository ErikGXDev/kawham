import { cn } from "@utils/cn";
import { useState } from "react";
import ChevronRight from "./icons/ChevronRight";
import ChevronDown from "./icons/ChevronDown";

export interface CollapsibleProps {
  name: React.ReactNode;
  isExpanded?: boolean;
  children?: React.ReactNode;
}

export default function Collapsible({ ...props }: CollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded ?? false);

  return (
    <div>
      <div
        className={cn("w-64 flex gap-4 items-center cursor-pointer select-none")}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronDown width={16} height={16} className="pointer-events-none" />
        ) : (
          <ChevronRight
            width={16}
            height={16}
            className="pointer-events-none"
          />
        )}
        {props.name}
      </div>
      {isExpanded && <div className="pl-8">{props.children}</div>}
    </div>
  );
}
