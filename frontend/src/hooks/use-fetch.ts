import { useEffect, useState } from "react";

/**
 * This hook fetches data from the server and returns it along with loading and error states.
 */
export function useFetch<T = unknown>(input: string): FetchResult<T> {
  const [result, setResult] = useState<FetchResult<T>>({
    loading: true,
  });

  useEffect(() => {
    const abortController = new AbortController();
    setResult((result) => ({ ...result, loading: true, error: undefined }));

    (async () => {
      try {
        const response = await fetch(`/api/${input}`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        if (abortController.signal.aborted) return;
        setResult({ data, loading: false, error: undefined });
      } catch (error) {
        if (abortController.signal.aborted) return;
        console.error(error);
        setResult((result) => ({ ...result, loading: false, error }));
      }
    })();

    return () => abortController.abort();
  }, [input]);

  return result;
}

export type FetchResult<T> =
  | { loading: true; data?: T; error?: undefined }
  | { loading: false; data: T; error?: undefined }
  | { loading: false; data?: T; error: unknown };
