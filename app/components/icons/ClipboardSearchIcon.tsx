import { SVGProps } from "react";

export default function ClipboardSearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="5"
        width="12"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 3h2a2 2 0 0 1 2 2H7a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="14.5"
        cy="14.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17 17L20 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}