export type ArrowDownProps = React.SVGAttributes<SVGElement>;

export default function ArrowDown({ ...props }: ArrowDownProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      {...props}
    >
      <path
        d="M9.73205 12C8.96225 13.3333 7.03775 13.3333 6.26795 12L1.0718 3C0.301997 1.66667 1.26425 -1.46309e-06 2.80385 -1.32849e-06L13.1962 -4.19966e-07C14.7358 -2.8537e-07 15.698 1.66667 14.9282 3L9.73205 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
