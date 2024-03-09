import { useMemo } from "react";
import { normalizeMonthlyTargets } from "./targets-normalizer";
import { useMonthyTargets } from "../../client";
import { TargetsTable } from "./targets-table";
import { updateQuarterlyTargets } from "./targets-rules";

export function Targets() {
  // Fetching data from server
  const { data: monthlyTargets } = useMonthyTargets();

  // Memoize results from normalization function
  // TODO: Revisit this approach when implementing cell editing
  const normalizedMonthlyTargets = useMemo(() => {
    if (monthlyTargets) {
      return updateQuarterlyTargets(
        normalizeMonthlyTargets(monthlyTargets),
        true
      );
    }
    return null;
  }, [monthlyTargets]);

  if (normalizedMonthlyTargets) {
    return <TargetsTable normalizedMonthlyTargets={normalizedMonthlyTargets} />;
  }

  return null;
}
