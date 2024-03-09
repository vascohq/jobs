import {
  type CellData,
  type MonthlyTargetMap,
  MonthlyTargetKeysFiltered,
  ValueType,
  PeriodType,
} from "../../types";

// Get endingMRR
export function getEndingMRR(
  beginningMRR: number,
  newBusinessMRR: number,
  grossChurnedMRR: number,
  expansionMRR: number
) {
  return beginningMRR + newBusinessMRR + grossChurnedMRR + expansionMRR;
}

// Get grossChurnedMRR
export function getChurnedMRR(beginningMRR: number, churnRate: number) {
  return beginningMRR * churnRate * -1;
}

// Get churn rate from grossChurnedMRR
export function getChurnRate(beginningMRR: number, grossChurnedMRR: number) {
  return -grossChurnedMRR / beginningMRR;
}

// Get expansionMRR
export function getExpansionMRR(beginningMRR: number, expansionRate: number) {
  return beginningMRR * expansionRate;
}

// Get expansion rate from expansionMRR
export function getExpansionRate(beginningMRR: number, expansionMRR: number) {
  return expansionMRR / beginningMRR;
}

// Get a specific cell
function getCellFromMap(
  newTargetsMap: MonthlyTargetMap,
  key: MonthlyTargetKeysFiltered,
  monthIndex: number
) {
  const cellData = newTargetsMap.get(key) as CellData[];
  return cellData[Number(monthIndex)];
}

// Get value from a specific cell
function getValueFromMap(
  newTargetsMap: MonthlyTargetMap,
  key: MonthlyTargetKeysFiltered,
  monthIndex: number
) {
  return getCellFromMap(newTargetsMap, key, monthIndex).value as number;
}

// Update value in a cell in the Map
function updateValueInMap(
  newTargetsMap: MonthlyTargetMap,
  key: MonthlyTargetKeysFiltered,
  monthIndex: number,
  value: number
) {
  const cellData = newTargetsMap.get(key);
  if (cellData) return (cellData[Number(monthIndex)].value = value);
}

function updateMapFromNewEndingMRR(
  targetsMap: MonthlyTargetMap,
  endingMRRValue: number,
  monthIndex: number
) {
  // Create a new Map to work it
  const newTargetsMap = new Map(targetsMap);

  // Update endingMRR in Map
  updateValueInMap(newTargetsMap, "endingMRR", monthIndex, endingMRRValue);

  // Need to update the other values, derived from endingMRR update
  // First the beginningMRR for the next month
  // If next month available, update accordingly
  let nextIndex = monthIndex + 1;
  let nextMonthBeginningMRRCell = getCellFromMap(
    newTargetsMap,
    "beginningMRR",
    nextIndex
  );

  // If next month is is quarterly, skip.
  if (nextMonthBeginningMRRCell.periodType === PeriodType.Quarterly) {
    nextIndex++;
    nextMonthBeginningMRRCell = getCellFromMap(
      newTargetsMap,
      "beginningMRR",
      nextIndex
    );
  }

  if (nextMonthBeginningMRRCell) {
    // Is there a next month?
    // Update the beginningMRR
    nextMonthBeginningMRRCell.value = endingMRRValue;

    // Update churnRate in Map
    const grossChurnedMRR = getValueFromMap(
      newTargetsMap,
      "grossChurnedMRR",
      nextIndex
    );
    const churnRate = getChurnRate(endingMRRValue, grossChurnedMRR);
    updateValueInMap(newTargetsMap, "churnRate", nextIndex, churnRate);

    // Update expansionRate in Map
    const expansionMRR = getValueFromMap(
      newTargetsMap,
      "expansionMRR",
      nextIndex
    );
    const expansionRate = getExpansionRate(endingMRRValue, expansionMRR);
    updateValueInMap(newTargetsMap, "expansionRate", nextIndex, expansionRate);

    // Update the nexts months recursively
    const endingMRR = getCurrentEndingMRR(newTargetsMap, nextIndex);
    return updateMapFromNewEndingMRR(newTargetsMap, endingMRR, nextIndex);
  }

  // Return updated Map
  return newTargetsMap;
}

// Get endingMRR derived from newBunessMRR
function getEndingMRRFromNewBunessMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndex: number,
  value: number
) {
  const endingMRRValue = getEndingMRR(
    getValueFromMap(monthlyTargets, "beginningMRR", monthIndex),
    value,
    getValueFromMap(monthlyTargets, "grossChurnedMRR", monthIndex),
    getValueFromMap(monthlyTargets, "expansionMRR", monthIndex)
  );

  return endingMRRValue;
}

// Get current endingMRR
function getCurrentEndingMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndex: number
) {
  const endingMRRValue = getEndingMRR(
    getValueFromMap(monthlyTargets, "beginningMRR", monthIndex),
    getValueFromMap(monthlyTargets, "newBusinessMRR", monthIndex),
    getValueFromMap(monthlyTargets, "grossChurnedMRR", monthIndex),
    getValueFromMap(monthlyTargets, "expansionMRR", monthIndex)
  );

  return endingMRRValue;
}

// Update Map derived from newBunessMRR
function updateMapFromNewBunisessMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndex: number,
  value: number
) {
  // Update newBusinessMRR
  updateValueInMap(monthlyTargets, "newBusinessMRR", monthIndex, value);

  // Get updated endingMRR first, derived from newBusinessMRR edits
  const endingMRRValue = getEndingMRRFromNewBunessMRR(
    monthlyTargets,
    monthIndex,
    value
  );

  // Get updated map, derived from new updated endingMRR
  const newTargetsMap = updateMapFromNewEndingMRR(
    monthlyTargets,
    endingMRRValue,
    monthIndex
  );

  return newTargetsMap;
}

// Quartely data related methods

const quarterMapping = {
  0: "Q1",
  3: "Q2",
  6: "Q3",
  9: "Q4",
};

export type QuarterKeys = keyof typeof quarterMapping;

export const quarterBeginningIndexes: QuarterKeys[] = [0, 3, 6, 9];

export function getQuarterIndexesMapping(
  monthIndex: keyof typeof quarterMapping
) {
  return quarterMapping[monthIndex];
}

// Get month indexes for the quarter
export function getQuarterlyMonthIndexes(
  startIndex: number
): [number, number, number] {
  let monthIndexes = [];

  for (
    let monthIndex = startIndex;
    monthIndex <= startIndex + 2;
    monthIndex++
  ) {
    monthIndexes.push(monthIndex);
  }

  return monthIndexes as [number, number, number];
}

// Get quarterly beginningMRR
export function getQuarterlyBeginningMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndex: number
) {
  return getValueFromMap(monthlyTargets, "beginningMRR", monthIndex);
}

// Get quarterly newBusinessMRR
export function getQuarterlyNewBusinessMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndexes: [number, number, number]
) {
  const quarterlyNewBusinessMRR = monthIndexes.reduce((acc, monthIndex) => {
    return acc + getValueFromMap(monthlyTargets, "newBusinessMRR", monthIndex);
  }, 0);

  return quarterlyNewBusinessMRR;
}

// Get quarterly churn rate
export function getQuarterlyChurnRate(
  monthlyTargets: MonthlyTargetMap,
  monthIndexes: [number, number, number]
) {
  const quarterlyChurnRate =
    (getQuarterlyGrossChurnedMRR(monthlyTargets, monthIndexes) /
      getQuarterlyAverageBeginningMRR(monthlyTargets, monthIndexes)) *
    -1;

  return quarterlyChurnRate;
}

// Get quarterlyGrossChurnedMRR
export function getQuarterlyGrossChurnedMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndexes: [number, number, number]
) {
  const quarterlyGrossChurnedMRR = monthIndexes.reduce((acc, monthIndex) => {
    const value =
      getValueFromMap(monthlyTargets, "beginningMRR", monthIndex) *
      getValueFromMap(monthlyTargets, "churnRate", monthIndex);

    return acc + value;
  }, 0);

  return quarterlyGrossChurnedMRR * -1;
}

// Get quarterlyExpansionMRR
export function getQuarterlyExpansionMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndexes: [number, number, number]
) {
  const quarterlyExpansionMRR = monthIndexes.reduce((acc, monthIndex) => {
    const value =
      getValueFromMap(monthlyTargets, "beginningMRR", monthIndex) *
      getValueFromMap(monthlyTargets, "expansionRate", monthIndex);
    return acc + value;
  }, 0);

  return quarterlyExpansionMRR;
}

// get quarterlyAverageBeginningMRR
export function getQuarterlyAverageBeginningMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndexes: [number, number, number]
) {
  const totalBeginningMRR = monthIndexes.reduce((acc, monthIndex) => {
    return acc + getValueFromMap(monthlyTargets, "beginningMRR", monthIndex);
  }, 0);

  const quarterlyAverageBeginningMRR = totalBeginningMRR / monthIndexes.length; // README says * -1, could this be wrong?

  return quarterlyAverageBeginningMRR;
}

// get quarterlyExpansionRate
export function getQuarterlyExpansionRate(
  monthlyTargets: MonthlyTargetMap,
  monthIndexes: [number, number, number]
) {
  const quarterlyExpansionMRR = getQuarterlyExpansionMRR(
    monthlyTargets,
    monthIndexes
  );
  const quarterlyAverageBeginningMRR = getQuarterlyAverageBeginningMRR(
    monthlyTargets,
    monthIndexes
  );
  const quarterlyExpansionRate =
    quarterlyExpansionMRR / quarterlyAverageBeginningMRR;

  return quarterlyExpansionRate;
}

// get quarterlyEndingMRR
export function getQuarterlyEndingMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndexes: [number, number, number]
) {
  const lastMonthIndex = monthIndexes[monthIndexes.length - 1];

  const quarterlyEndingMRR = getValueFromMap(
    monthlyTargets,
    "endingMRR",
    lastMonthIndex
  );

  return quarterlyEndingMRR;
}

export function getQuarterlyTargets(
  monthlyTargets: MonthlyTargetMap,
  initial?: boolean
) {
  // We need get the quarterly data, need to consider the
  // offset created by the insertion of the quarter columns
  return quarterBeginningIndexes.map((quarterIndex, offset) => {
    const startIndex = quarterIndex + (initial ? 0 : offset);
    const monthIndexes = getQuarterlyMonthIndexes(startIndex);

    const quarterlyBeginningMRR = getQuarterlyBeginningMRR(
      monthlyTargets,
      startIndex
    );
    const quarterlyNewBusinessMRR = getQuarterlyNewBusinessMRR(
      monthlyTargets,
      monthIndexes
    );
    const quarterlyChurnRate = getQuarterlyChurnRate(
      monthlyTargets,
      monthIndexes
    );
    const quarterlyExpansionRate = getQuarterlyExpansionRate(
      monthlyTargets,
      monthIndexes
    );
    const quarterlyEndingMRR = getQuarterlyEndingMRR(
      monthlyTargets,
      monthIndexes
    );
    const quarterlyGrossChurnedMRR = getQuarterlyGrossChurnedMRR(
      monthlyTargets,
      monthIndexes
    );
    const quarterlyExpansionMRR = getQuarterlyExpansionMRR(
      monthlyTargets,
      monthIndexes
    );
    const quarterlyAverageBeginningMRR = getQuarterlyAverageBeginningMRR(
      monthlyTargets,
      monthIndexes
    );
    const quarterlyTargets = {
      beginningMRR: quarterlyBeginningMRR,
      averageBeginningMRR: quarterlyAverageBeginningMRR,
      newBusinessMRR: quarterlyNewBusinessMRR,
      churnRate: quarterlyChurnRate,
      grossChurnedMRR: quarterlyGrossChurnedMRR,
      expansionRate: quarterlyExpansionRate,
      expansionMRR: quarterlyExpansionMRR,
      endingMRR: quarterlyEndingMRR,
    };
    return quarterlyTargets;
  });
}

// Main update functions

// Update monthly targets from edits
export function updateMonthlyTargetsMap(
  monthlyTargets: MonthlyTargetMap,
  rowId: MonthlyTargetKeysFiltered,
  cellIndex: string,
  value: string,
  callbackFn: (updatedMap: MonthlyTargetMap) => void
) {
  const monthIndex = Number(cellIndex);

  // If newBusinessMRR was edited update accordingly
  if (rowId === "newBusinessMRR") {
    const updatedMonthlyMap = updateMapFromNewBunisessMRR(
      monthlyTargets,
      monthIndex,
      Number(value)
    );

    const updatedMap = updateQuarterlyTargets(updatedMonthlyMap);

    callbackFn(updatedMap);
  }
}

export function updateQuarterlyTargets(
  monthlyTargets: MonthlyTargetMap,
  initial?: boolean
): MonthlyTargetMap {
  const newMonthlyTargetsMap = new Map(monthlyTargets);

  const quarterlyTargets = getQuarterlyTargets(newMonthlyTargetsMap, initial);

  quarterBeginningIndexes.forEach((monthIndex, quarterIndex) => {
    // To reach the end of the quarter we need to monthIndex + 3 + index
    // since we're adding items in row as we go
    const targetIndex = monthIndex + 3 + quarterIndex;

    newMonthlyTargetsMap.forEach((cellData, key) => {
      const quarterIndexValue = getQuarterIndexesMapping(monthIndex);
      const isNumber = key === "churnRate" || key === "expansionRate";
      if (key === "month") {
        cellData.splice(targetIndex, initial ? 0 : 1, {
          id: quarterIndexValue,
          value: quarterIndexValue,
          valueType: ValueType.Copy,
          periodType: PeriodType.Quarterly,
          isBenchmark: false,
        });
      } else {
        cellData.splice(targetIndex, initial ? 0 : 1, {
          id: `${key}-${quarterIndexValue}`,
          value: quarterlyTargets[quarterIndex][key],
          valueType: isNumber ? ValueType.Percentage : ValueType.Currency,
          periodType: PeriodType.Quarterly,
          isBenchmark: false,
        });
      }
    });
  });

  return newMonthlyTargetsMap;
}
