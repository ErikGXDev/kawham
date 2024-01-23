export type BackwardsIconProps = React.SVGAttributes<SVGElement>;

export default function BackwardsIcon({ ...props }: BackwardsIconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 6.26796C0.166666 7.03776 0.166668 8.96226 1.5 9.73206L10.5 14.9282C11.8333 15.698 13.5 14.7358 13.5 13.1962V12.0415L18.5 14.9282C19.8333 15.698 21.5 14.7358 21.5 13.1962V2.80386C21.5 1.26426 19.8333 0.302006 18.5 1.07181L13.5 3.95856V2.80386C13.5 1.26426 11.8333 0.302006 10.5 1.07181L1.5 6.26796Z"
        fill="currentColor"
      />
    </svg>
  );
}
