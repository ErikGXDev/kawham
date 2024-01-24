import { cn } from "@utils/cn";
import { useState } from "react";
import ChevronRight from "./icons/ChevronRight";
import ChevronDown from "./icons/ChevronDown";

export interface CollapsibleProps {
  name: React.ReactNode;
  isExpanded?: boolean;
  children?: React.ReactNode;
  classNameHeader?: string;
  classNameContent?: string;
}

export default function Collapsible({ ...props }: CollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded ?? false);

  return (
    <div>
      <div
        className={cn(
          "w-64 flex items-center cursor-pointer select-none",
          props.classNameHeader
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="w-8">
          {isExpanded ? (
            <ChevronDown
              width={16}
              height={16}
              className="pointer-events-none"
            />
          ) : (
            <ChevronRight
              width={16}
              height={16}
              className="pointer-events-none"
            />
          )}
        </div>
        {props.name}
      </div>
      {isExpanded && (
        <div className={cn("pl-8", props.classNameContent)}>
          {props.children}
        </div>
      )}
    </div>
  );
}
