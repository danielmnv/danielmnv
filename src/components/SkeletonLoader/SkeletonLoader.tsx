import classNames from 'classnames';

export function SkeletonLoader({
  count = 3,
  height = 'h-24',
  className = '',
}: {
  count?: number;
  height?: string;
  className?: string;
}) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={classNames(
            'animate-pulse rounded-lg bg-slate-700/20 dark:bg-slate-500/20',
            height,
            className
          )}
        />
      ))}
    </div>
  );
}
