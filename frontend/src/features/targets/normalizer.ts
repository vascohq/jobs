import {
  type CellData,
  type MonthlyTarget,
  type MonthlyTargetMap,
  type MonthlyTargetKeys,
  ValueType,
  MonthlyTargetKeysFiltered,
} from "../../types";

function getValueType(key: string): ValueType {
  switch (key) {
    case "beginningMRR":
    case "newBusinessMRR":
    case "endingMRR":
    case "grossChurnedMRR":
    case "expansionMRR":
      return ValueType.Currency;
    case "churnRate":
    case "expansionRate":
      return ValueType.Percentage;
    case "month":
    case "year":
      return ValueType.Date;
    default:
      return ValueType.Number;
  }
}

export function normalizeMonthlyTargets(
  data: MonthlyTarget[]
): MonthlyTargetMap {
  // Using a Map to guarantee the iteration order when mapping in JSX.
  // We don't want track the year in our Map, so we'll omit it.
  const normalizedData = new Map<MonthlyTargetKeysFiltered, CellData[]>();

  data.forEach((monthlyTarget, index) => {
    // Create an array of keys from the object
    const keys = Object.keys(monthlyTarget) as Array<MonthlyTargetKeys>;
    const { year, month } = monthlyTarget;

    // We need to transform the shape of
    // our data to be suitable for our table
    keys.forEach((key) => {
      const isFirstItem = index === 0;
      const isYear = key === "year";

      // Create the keys in the Map, we don't want
      // to display a year row in our table so we skip it
      if (isFirstItem && !isYear) {
        normalizedData.set(key, []);
      }

      // Feed the map with the data, as per the above typing,
      // we omit the year row in the normalizedData Map
      if (!isYear) {
        const value = monthlyTarget[key];
        // Need to create unique IDs I can use when mapping
        // the data in JSX.
        const id = `${key}-${year}-${month}`;
        const valueType = getValueType(key);

        let cellData: CellData;

        // We need to help Typescript infer the type of value
        switch (valueType) {
          case ValueType.Currency:
          case ValueType.Number:
          case ValueType.Percentage:
            cellData = { id, value, valueType };
            break;
          case ValueType.Date:
            cellData = { id, value: new Date(year, month - 1), valueType };
            break;
          default:
            throw new Error(`Unsupported ValueType: ${valueType}`);
        }

        normalizedData.get(key)?.push(cellData);
      }
    });
  });

  return normalizedData;
}

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
  return beginningMRR * (churnRate / 100) * -1;
}

// Get expansionMRR
export function getExpansionMRR(beginningMRR: number, expansionRate: number) {
  return beginningMRR * (expansionRate / 100);
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
  const nextIndex = monthIndex + 1;
  const nextMonthBeginningMRRCell = getCellFromMap(
    newTargetsMap,
    "beginningMRR",
    nextIndex
  );

  // Is there a next month?
  if (nextMonthBeginningMRRCell) {
    // Update the beginningMRR
    nextMonthBeginningMRRCell.value = endingMRRValue;

    // Update the churnedMRR
    const nextMonthChurnedMRRValue = getChurnedMRR(
      nextMonthBeginningMRRCell.value,
      getValueFromMap(newTargetsMap, "churnRate", nextIndex)
    );

    updateValueInMap(
      newTargetsMap,
      "grossChurnedMRR",
      nextIndex,
      nextMonthChurnedMRRValue
    );

    // Update the expansionMRR
    const nextMonthExpansionMRRValue = getExpansionMRR(
      nextMonthBeginningMRRCell.value,
      getValueFromMap(newTargetsMap, "expansionRate", nextIndex)
    );

    updateValueInMap(
      newTargetsMap,
      "expansionMRR",
      nextIndex,
      nextMonthExpansionMRRValue
    );

    // Update the nexts months recursively
    const endingMRR = getCurrentEndingMRR(newTargetsMap, nextIndex);
    return updateMapFromNewEndingMRR(newTargetsMap, endingMRR, nextIndex);
  }

  // Return updated Map
  return newTargetsMap;
}

function getEndingMRRFromNewBunessMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndex: number,
  value: string
) {
  const endingMRRValue = getEndingMRR(
    getValueFromMap(monthlyTargets, "beginningMRR", monthIndex),
    Number(value),
    getValueFromMap(monthlyTargets, "grossChurnedMRR", monthIndex),
    getValueFromMap(monthlyTargets, "expansionMRR", monthIndex)
  );

  return endingMRRValue;
}

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

function updateMapFromNewBunisessMRR(
  monthlyTargets: MonthlyTargetMap,
  monthIndex: number,
  value: string
) {
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

export function updateTargetsMap(
  monthlyTargets: MonthlyTargetMap,
  rowId: MonthlyTargetKeysFiltered,
  cellIndex: string,
  value: string,
  callbackFn: (updatedMap: MonthlyTargetMap) => void
) {
  const monthIndex = Number(cellIndex);

  if (rowId === "newBusinessMRR") {
    const updatedMap = updateMapFromNewBunisessMRR(
      monthlyTargets,
      monthIndex,
      value
    );
    callbackFn(updatedMap);
  }
}
