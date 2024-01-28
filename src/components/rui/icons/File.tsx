export type FileProps = React.SVGAttributes<SVGElement>;

export default function File({ ...props }: FileProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="50"
      viewBox="0 0 39 50"
      fill="none"
      {...props}
    >
      <path
        d="M0 6.625C0 3.24668 2.91484 0.5 6.5 0.5H22.75V12.75C22.75 14.4439 24.2023 15.8125 26 15.8125H39V43.375C39 46.7533 36.0852 49.5 32.5 49.5H6.5C2.91484 49.5 0 46.7533 0 43.375V6.625ZM39 12.75H26V0.5L39 12.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
