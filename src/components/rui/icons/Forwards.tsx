export type ForwardsIconProps = React.SVGAttributes<SVGElement>;

export default function ForwardsIcon({ ...props }: ForwardsIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.5 12.0415L3.5 14.9282C2.16667 15.698 0.5 14.7358 0.5 13.1962V2.80386C0.5 1.26426 2.16667 0.302005 3.5 1.07181L8.5 3.95856V2.80386C8.5 1.26426 10.1667 0.302005 11.5 1.07181L20.5 6.26796C21.8333 7.03776 21.8333 8.96226 20.5 9.73206L11.5 14.9282C10.1667 15.698 8.5 14.7358 8.5 13.1962V12.0415Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
