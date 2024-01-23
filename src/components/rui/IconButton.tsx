import { cn } from "@utils/cn";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function IconButton({ ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        "w-12 h-12 flex justify-center items-center rounded-xl outline-none",
        "bg-primary-default hover:bg-primary-higher active:outline-2 active:outline-primary-highest"
      )}
    />
  );
}
