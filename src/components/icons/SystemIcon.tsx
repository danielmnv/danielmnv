export function SystemIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
