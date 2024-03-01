import { PropsWithChildren } from "react";
import ErrorAlert from "./ErrorAlert";
import Loader from "./Loader";

export interface FetchLoaderProps<T> {
  data?: T;
  loading?: boolean;
  error?: unknown;
}

/**
 * A component that shows a loader while data is being fetched, and an error alert if an error occurs.
 * If no error occurs, the children are rendered.
 */
export default function FetchLoader<T = unknown>({
  loading,
  error,
  children,
}: PropsWithChildren<FetchLoaderProps<T>>) {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  return <>{children}</>;
}
