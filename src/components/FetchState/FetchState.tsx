// FetchState.tsx
type FetchStateProps<T> = {
  data: T | undefined;
  loading: boolean;
  error: unknown;
  skeleton: React.ReactNode;
  children: (data: T) => React.ReactNode;
};

export function FetchState<T>({ data, loading, error, skeleton, children }: FetchStateProps<T>) {
  if (loading) return <>{skeleton}</>;
  if (error) return <p className="text-red-400">Failed to load. Please try again later.</p>;
  return <>{children(data!)}</>;
}
