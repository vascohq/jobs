import useSWR, { type Fetcher } from "swr";
import { MonthlyTarget } from "../types";

const fetcher: Fetcher<MonthlyTarget[]> = (url: string) => {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("An error occurred while fetching the data.");
    }
    return res.json();
  });
};

export function useMonthyTargets() {
  return useSWR<MonthlyTarget[]>(
    "https://vasco-fe-challenge-gablabelle-level-2.vercel.app/api/targets",
    fetcher
  );
}
