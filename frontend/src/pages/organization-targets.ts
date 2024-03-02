import { useReducer } from "react";

/**
 * The set of data for an organization's targets.
 */
export type OrganizationTargets = MonthlyTarget[];

/**
 * A monthly target for an organization.
 */
export interface MonthlyTarget {
  month: number;
  year: number;
  beginningMRR: number;
  newBusinessMRR: number;
  churnRate: number;
  grossChurnedMRR: number;
  expansionRate: number;
  expansionMRR: number;
  endingMRR: number;
}

/**
 * A unique key for a target.
 */
export function targetKey(target: MonthlyTarget) {
  return `${target.year}-${target.month}`;
}

/**
 * Sorter function for the targets.
 */
export function targetSorter(
  a: { month: number; year: number },
  b: { month: number; year: number },
) {
  return a.year - b.year || a.month - b.month;
}

/**
 * Possible actions that can be dispatched to the useTargetsComputation reducer.
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
 * Sending UseTargetsComputationActions allows to set overrides and recompute the targets.
 */
export function useTargetsComputationReducer(initialData: MonthlyTarget[]) {
  return useReducer(
    (state: OrganizationTargets, action: UseTargetsComputationActions) => {
      switch (action.type) {
        case "updateNewBusinessMRR": {
          const updatedMonthlyTargets = state.map((target) => ({
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
    computeTargets(initialData.sort(targetSorter)),
  );
}

/**
 * Recomputes a set of targets.
 * A new set of targets is returned with the beginningMRR, endingMRR and expansionMRR updated.
 */
export function computeTargets(
  targets: OrganizationTargets,
): OrganizationTargets {
  if (targets.length === 0) {
    return [];
  }

  const result: OrganizationTargets = [];
  let beginningMRR = targets[0].beginningMRR;
  for (const monthlyTarget of targets) {
    const churnedMMR = beginningMRR * (monthlyTarget.churnRate / 100) * -1;
    const expansionMRR = beginningMRR * (monthlyTarget.expansionRate / 100);
    const updatedMonthlyTarget: MonthlyTarget = {
      ...monthlyTarget,
      beginningMRR,
      endingMRR: round(
        beginningMRR + monthlyTarget.newBusinessMRR + churnedMMR + expansionMRR,
      ),
      expansionMRR: round(expansionMRR),
    };
    beginningMRR = updatedMonthlyTarget.endingMRR;
    result.push(updatedMonthlyTarget);
  }
  return result;
}

/**
 * This function rounds results to the nearest whole number.
 */
function round(value: number) {
  // I am taking this shortcut right now - I cannot figure out the rule used in the existing data.
  return Math.round(value);
}
