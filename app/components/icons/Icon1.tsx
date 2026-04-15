    type Props = {
  className?: string;
};
export default function Icon1({ className }: Props) {

  return (
 <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="6" fill="#10B981"/>
      <path d="M7 12h10M7 8h10M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}