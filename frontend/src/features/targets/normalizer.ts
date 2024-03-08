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

export function updateTargetsTableData(
  monthlyTargets: MonthlyTargetMap,
  rowId: string,
  cellIndex: string,
  value: string,
  callbackFn: (updatedMap: MonthlyTargetMap) => void
) {
  const newTargetsMap = new Map(monthlyTargets);
  const newTargetsMapRow = newTargetsMap.get(
    rowId as MonthlyTargetKeysFiltered
  );

  if (newTargetsMapRow) {
    newTargetsMapRow[Number(cellIndex)]["value"] = Number(value);
    callbackFn(newTargetsMap);
  }
}
