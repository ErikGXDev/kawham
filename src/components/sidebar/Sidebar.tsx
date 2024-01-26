import { useEffect, useRef, useState } from "react";
import { useResizable } from "react-resizable-layout";
import { cn } from "@utils/cn";

export default function Sidebar({
  children,
  axis,
  reverse,
  initial,
  min,
  max,
  separatorPosition,
  className,
}: {
  children: React.ReactNode;
  axis: "x" | "y";
  reverse?: boolean;
  initial?: number;
  min?: number;
  max?: number;
  separatorPosition?: "before" | "after";
  className?: string;
}) {
  const { isDragging, position, separatorProps } = useResizable({
    axis,
    initial: initial || 350,
    min: min || 50,
    max: max || 10000,
    reverse: reverse || false,
  });

  const separator = (
    <div
      className={cn(
        "bg-background-highest cursor-grabbing",
        axis === "x" && "w-1 h-full",
        axis === "y" && "h-1 w-full",
      )}
      {...separatorProps}
    ></div>
  );

  return (
    <div
      className={cn(
        "flex",
        axis === "x" && "h-full",
        axis === "y" && "w-full flex-col",
        className,
      )}
    >
      {separatorPosition === "before" && separator}
      <div style={{ [axis === "x" ? "width" : "height"]: position }}>
        {children}
      </div>
      {(!separatorPosition || separatorPosition === "after") && separator}
    </div>
  );
}
