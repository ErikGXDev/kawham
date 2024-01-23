export type PauseIconProps = React.SVGAttributes<SVGElement>;

export default function PauseIcon({ ...props }: PauseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="26"
      viewBox="0 0 18 26"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V24C0 25.1046 0.895431 26 2 26H4C5.10457 26 6 25.1046 6 24V2C6 0.895431 5.10457 0 4 0H2ZM14 0C12.8954 0 12 0.895431 12 2V24C12 25.1046 12.8954 26 14 26H16C17.1046 26 18 25.1046 18 24V2C18 0.895431 17.1046 0 16 0H14Z"
        fill="currentColor"
      />
    </svg>
  );
}
