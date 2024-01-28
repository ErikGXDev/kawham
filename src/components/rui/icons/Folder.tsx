export type FolderProps = React.SVGAttributes<SVGElement>;

export default function Folder({ ...props }: FolderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="36"
      viewBox="0 0 51 36"
      fill="none"
      {...props}
    >
      <path
        d="M45.8125 6H27.0625L20.8125 0H5.1875C2.59961 0 0.5 2.01562 0.5 4.5V31.5C0.5 33.9844 2.59961 36 5.1875 36H45.8125C48.4004 36 50.5 33.9844 50.5 31.5V10.5C50.5 8.01562 48.4004 6 45.8125 6Z"
        fill="currentColor"
      />
    </svg>
  );
}
