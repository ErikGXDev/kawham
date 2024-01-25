import { cn } from "@utils/cn";
import { forwardRef, useState } from "react";
import ChevronRight from "./icons/ChevronRight";
import ChevronDown from "./icons/ChevronDown";

export interface CollapsibleProps extends React.HTMLProps<HTMLButtonElement> {
  header: React.ReactNode;
  isExpanded?: boolean;
  classNameHeader?: string;
  classNameContent?: string;
}

const Collapsible = forwardRef(({ ...props }: CollapsibleProps, ref) => {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded ?? false);

  return (
    <div>
      <button
        className={cn(
          "w-64 flex items-center cursor-pointer select-none",
          props.classNameHeader,
        )}
        ref={ref as any}
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
        {props.header}
      </button>
      {isExpanded && (
        <div className={cn("pl-8", props.classNameContent)}>
          {props.children}
        </div>
      )}
    </div>
  );
});

export default Collapsible;
