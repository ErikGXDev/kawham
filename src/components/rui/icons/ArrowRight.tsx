export type ArrowRightProps = React.SVGAttributes<SVGElement>;

export default function ArrowRight({ ...props }: ArrowRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      {...props}
    >
      <path
        d="M12 5.76795C13.3333 6.53775 13.3333 8.46225 12 9.23205L3 14.4282C1.66667 15.198 0 14.2358 0 12.6962V2.30385C0 0.764249 1.66667 -0.198004 3 0.571796L12 5.76795Z"
        fill="currentColor"
      />
    </svg>
  );
}
