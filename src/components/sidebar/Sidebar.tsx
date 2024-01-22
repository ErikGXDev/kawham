import { useEffect, useRef, useState } from "react";
import { useResizable } from "react-resizable-layout";

export default function Sidebar({
  children,
  axis,
  reverse,
  initial,
  min,
  max,
}: {
  children: React.ReactNode;
  axis: "x" | "y";
  reverse?: boolean;
  initial?: number;
  min?: number;
  max?: number;
}) {
  const { isDragging, position, separatorProps } = useResizable({
    axis,
    initial: initial || 350,
    min: min || 50,
    max: max || 10000,
    reverse: reverse || false,
  });

  return (
    <div className="flex h-full">
      <div style={{ width: position }}>{children}</div>
      <div
        className="w-1 h-full bg-background-highest cursor-grabbing"
        {...separatorProps}
      ></div>
    </div>
  );
}
