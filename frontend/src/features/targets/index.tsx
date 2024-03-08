import { useMemo } from "react";
import {
  normalizeMonthlyTargets,
  normalizeQuarterlyTargets,
} from "./targets-normalizer";
import { useMonthyTargets } from "../../client";
import { TargetsTable } from "./targets-table";

export function Targets() {
  // Fetching data from server
  const { data: monthlyTargets } = useMonthyTargets();

  // Memoize results from normalization function
  // TODO: Revisit this approach when implementing cell editing
  const normalizedMonthlyTargets = useMemo(() => {
    if (monthlyTargets) {
      return normalizeQuarterlyTargets(normalizeMonthlyTargets(monthlyTargets));
    }
    return null;
  }, [monthlyTargets]);

  if (normalizedMonthlyTargets) {
    return <TargetsTable normalizedMonthlyTargets={normalizedMonthlyTargets} />;
  }

  return null;
}
