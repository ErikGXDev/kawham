export type ChevronDownProps = React.SVGAttributes<SVGElement>;

export default function ChevronDown({ ...props }: ChevronDownProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <path
        d="M13.6758 23.8242C14.4082 24.5566 15.5977 24.5566 16.3301 23.8242L27.5801 12.5742C28.3125 11.8418 28.3125 10.6523 27.5801 9.91992C26.8477 9.1875 25.6582 9.1875 24.9258 9.91992L15 19.8457L5.07422 9.92578C4.3418 9.19336 3.15234 9.19336 2.41992 9.92578C1.6875 10.6582 1.6875 11.8477 2.41992 12.5801L13.6699 23.8301L13.6758 23.8242Z"
        fill="currentColor"
      />
    </svg>
  );
}
