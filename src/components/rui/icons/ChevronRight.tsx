export type ChevronRightProps = React.SVGAttributes<SVGElement>;

export default function ChevronRight({ ...props }: ChevronRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="31"
      viewBox="0 0 18 31"
      fill="none"
      {...props}
    >
      <path
        d="M17.3537 13.9551C18.2131 14.8096 18.2131 16.1973 17.3537 17.0518L4.15374 30.1768C3.29437 31.0313 1.89874 31.0313 1.03937 30.1768C0.179993 29.3223 0.179993 27.9346 1.03937 27.0801L12.6856 15.5L1.04624 3.91992C0.186868 3.06543 0.186868 1.67773 1.04624 0.823242C1.90562 -0.03125 3.30124 -0.03125 4.16062 0.823242L17.3606 13.9482L17.3537 13.9551Z"
        fill="currentColor"
      />
    </svg>
  );
}
