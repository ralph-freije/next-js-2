import { SVGProps } from "react";

export default function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 18V9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8.5 12.5L12 9L15.5 12.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 14.5C5.55 13.55 5 12.23 5 10.83C5 8.02 7.24 5.75 10 5.75C10.59 5.75 11.15 5.85 11.68 6.04C12.43 4.81 13.78 4 15.32 4C17.67 4 19.58 5.91 19.58 8.27C19.58 8.45 19.57 8.62 19.54 8.79C20.72 9.49 21.5 10.78 21.5 12.25C21.5 14.46 19.71 16.25 17.5 16.25H16.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}