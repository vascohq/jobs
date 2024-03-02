import { useReducer } from "react";

/**
 * The set of data for an organization's targets.
 * These can be monthly or quarterly targets.
 */
export type OrganizationMMRTargets = Array<MonthlyOrQuarterMMRTargets>;

export type MonthlyOrQuarterMMRTargets = MonthlyMMRTargets | QuarterMMRTargets;

/**
 * A monthly target for an organization.
 */
export interface MonthlyMMRTargets extends MMRTargets {
  month: number;
  year: number;
}

/**
 * A quarter target for an organization.
 */
export interface QuarterMMRTargets extends MMRTargets {
  quarter: number;
  year: number;
}

/**
 * MMR targets for a specific period.
 */
export interface MMRTargets {
  beginningMRR: number;
  newBusinessMRR: number;
  churnRate: number;
  expansionRate: number;
  expansionMRR: number;
  endingMRR: number;
}

export function isMonthlyTarget(
  target: MonthlyOrQuarterMMRTargets,
): target is MonthlyMMRTargets {
  return "month" in target;
}

/**
 * A unique key for a target.
 */
export function targetKey(target: MonthlyOrQuarterMMRTargets) {
  return isMonthlyTarget(target)
    ? `${target.year}-M${target.month}`
    : `${target.year}-Q${target.quarter}`;
}

/**
 * Sorter function for monthly targets.
 */
export function monthlyTargetSorter(
  a: { month: number; year: number },
  b: { month: number; year: number },
) {
  return a.year - b.year || a.month - b.month;
}

/**
 * Possible actions that can be dispatched to the useTargetsComputationReducer.
 */
export type UseTargetsComputationActions = UpdateNewBusinessMRRAction;

/**
 * Action to update the new business MRR for a specific month and year.
 */
export interface UpdateNewBusinessMRRAction {
  type: "updateNewBusinessMRR";
  month: number;
  year: number;
  value: number;
}

/**
 * Reducer hook that takes the initial data loaded from the server and computes the targets.
 * Dispatching actions of type UseTargetsComputationActions allows to set overrides and recompute the targets.
 */
export function useTargetsComputationReducer(
  initialData: OrganizationMMRTargets,
) {
  return useReducer(
    (state: OrganizationMMRTargets, action: UseTargetsComputationActions) => {
      switch (action.type) {
        case "updateNewBusinessMRR": {
          const updatedMonthlyTargets = state
            .filter(isMonthlyTarget)
            .map((target) => ({
              ...target,
              newBusinessMRR:
                target.month === action.month && target.year === action.year
                  ? action.value
                  : target.newBusinessMRR,
            }));
          return computeTargets(updatedMonthlyTargets);
        }
        default:
          throw new Error(`Invalid action type: ${action.type}`);
      }
    },
    computeTargets(
      initialData.filter(isMonthlyTarget).sort(monthlyTargetSorter),
    ),
  );
}

/**
 * Recomputes a set of targets from monthly targets.
 * Monthly targets are assumed to be sorted by month and year.
 * A new set of targets is returned with the numbers updated to reflect the correct values,
 * as well as quarterly targets included if possible.
 */
export function computeTargets(
  monthlyTargets: MonthlyMMRTargets[],
): OrganizationMMRTargets {
  if (monthlyTargets.length === 0) {
    return [];
  }

  const result: OrganizationMMRTargets = [];
  let beginningMRR = monthlyTargets[0].beginningMRR;
  const cumulativeMonthlyTargets: MonthlyMMRTargets[] = [];
  for (const monthlyTarget of monthlyTargets) {
    const updatedMonthlyTarget = computeMonthlyTargets({
      ...monthlyTarget,
      beginningMRR,
    });
    beginningMRR = updatedMonthlyTarget.endingMRR;
    result.push(updatedMonthlyTarget);
    cumulativeMonthlyTargets.push(updatedMonthlyTarget);

    if ([3, 6, 9, 12].includes(monthlyTarget.month)) {
      const quarterTarget = computeQuarterlyTargets(
        cumulativeMonthlyTargets,
        monthlyTarget.month / 3,
        monthlyTarget.year,
      );
      if (quarterTarget !== undefined) result.push(quarterTarget);
      cumulativeMonthlyTargets.length = 0;
    }
  }
  return result;
}

/**
 * Compute an updated set of targets for a specific month using current parameters + new begin MRR.
 */
function computeMonthlyTargets(
  monthlyTarget: MonthlyMMRTargets,
): MonthlyMMRTargets {
  const churnedMMR =
    monthlyTarget.beginningMRR * (monthlyTarget.churnRate / 100) * -1;
  const expansionMRR =
    monthlyTarget.beginningMRR * (monthlyTarget.expansionRate / 100);
  return {
    ...monthlyTarget,
    endingMRR: round(
      monthlyTarget.beginningMRR +
        monthlyTarget.newBusinessMRR +
        churnedMMR +
        expansionMRR,
    ),
    expansionMRR: round(expansionMRR),
  };
}

/**
 * Compute quarterly targets from a set of monthly targets.
 * Monthly targets are assumed to be sorted by month and year.
 */
function computeQuarterlyTargets(
  cumulativeMonthlyTargets: MonthlyMMRTargets[],
  quarter: number,
  year: number,
): QuarterMMRTargets | undefined {
  if (cumulativeMonthlyTargets.length !== 3) {
    console.warn(
      `Not enough data to compute quarterly targets for Q${quarter} ${year}`,
    );
    return undefined;
  }

  const churnedMRR = cumulativeMonthlyTargets.reduce(
    (acc, target) => acc + target.beginningMRR * (target.churnRate / 100),
    0,
  );
  const averageBeginningMRR =
    cumulativeMonthlyTargets.reduce(
      (acc, target) => acc + target.beginningMRR,
      0,
    ) / 3;
  // TODO: Confirm with stakeholders if this is the correct behavior
  // That's what the spec says, but it seems wrong.
  // *-1
  const expansionMRR = cumulativeMonthlyTargets.reduce(
    (acc, target) => acc + target.beginningMRR * (target.expansionRate / 100),
    0,
  );

  return {
    quarter,
    year,
    beginningMRR: cumulativeMonthlyTargets[0].beginningMRR,
    newBusinessMRR: cumulativeMonthlyTargets.reduce(
      (acc, target) => acc + target.newBusinessMRR,
      0,
    ),
    churnRate: round((churnedMRR / averageBeginningMRR) * 100),
    expansionRate: round((expansionMRR / averageBeginningMRR) * 100),
    expansionMRR: round(expansionMRR),
    endingMRR: cumulativeMonthlyTargets.at(-1)!.endingMRR,
  };
}

/**
 * This function rounds results to the nearest whole number.
 */
function round(value: number) {
  // I am taking this shortcut right now - I cannot figure out the rule used in the existing data.
  const result = Math.round(value);
  // Javascript has a weird behavior with -0, so we should to convert it to 0 (?)
  return Object.is(result, -0) ? 0 : result;
}
