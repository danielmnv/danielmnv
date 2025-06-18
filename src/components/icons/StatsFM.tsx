import classNames from 'classnames';

export function StatsFM({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={classNames(className)}
      aria-hidden="true"
    >
      <rect
        width="7.68"
        height="34.586"
        x="20.16"
        y="6.707"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="2.327"
        strokeWidth="1"
      />
      <rect
        width="7.68"
        height="15.244"
        x="33.821"
        y="26.049"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="2.327"
        strokeWidth="1"
      />
      <rect
        width="7.68"
        height="24.721"
        x="6.5"
        y="16.572"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="2.327"
        strokeWidth="1"
      />
    </svg>
  );
}
