export type RunIconProps = React.SVGAttributes<SVGElement>;

export default function RunIcon({ ...props }: RunIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      {...props}
    >
      <path d="M15 9L0 17.6603V0.339746L15 9Z" fill="currentColor" />
    </svg>
  );
}
