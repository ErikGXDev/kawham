export type CheckmarkProps = React.SVGAttributes<SVGElement>;

export default function Checkmark({ ...props }: CheckmarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      {...props}
    >
      <path
        d="M15.9224 1.0138C16.3688 1.52153 16.3688 2.34609 15.9224 2.85382L6.78058 13.2522C6.3342 13.7599 5.60928 13.7599 5.1629 13.2522L0.591986 8.05301C0.145607 7.54528 0.145607 6.72072 0.591986 6.21298C1.03836 5.70525 1.76328 5.70525 2.20966 6.21298L5.97353 10.4901L14.3083 1.0138C14.7547 0.506062 15.4796 0.506062 15.926 1.0138H15.9224Z"
        fill="currentColor"
      />
    </svg>
  );
}
