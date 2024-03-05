import { useMemo } from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "../ui/table";
import monthlyTargets from "../../../data/monthlyTargets.json";

interface MonthlyTarget {
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

// TODO Avoid as many loops as possible,
// and keep it readable.
function normalizeMonthlyTargets(data: MonthlyTarget[]) {
  // Using a Map to guarantee the iteration order when mapping in JSX.
  const normalizedData = new Map<
    keyof Omit<MonthlyTarget, "year">,
    { id: string; value: number | string }[]
  >();

  data.forEach((monthlyTarget, index) => {
    // Create an array of keys from the object
    const keys = Object.keys(monthlyTarget) as Array<keyof MonthlyTarget>;

    // We need to transform the shape of
    // our data to be suitable for our table
    keys.forEach((key) => {
      const isFirstItem = index === 0;
      const isYear = key === "year";
      const isMonth = key === "month";

      // Create the keys in the Map
      if (isFirstItem && !isYear) {
        normalizedData.set(key, []);
      }

      // Feed the map with the data, as per the above typing,
      // we omit the year row in the normalizedData Map
      if (!isYear) {
        const value = monthlyTarget[key];
        // Need to create unique IDs I can use when mapping
        // the data in JSX.
        // Using underscore here because some values
        // are negative numbers.

        // For the month row, we'll use the IDs as values
        const cellData = {
          id: `${key}-${monthlyTarget["year"]}-${monthlyTarget["month"]}`,
          value: isMonth ? `${monthlyTarget["year"]}-${value}` : value,
        };
        normalizedData.get(key)?.push(cellData);
      }
    });
  });

  return normalizedData;
}

export function Targets() {
  // Memoize results from normalization function
  const normalizedMonthlyTargets = useMemo(
    () => normalizeMonthlyTargets(monthlyTargets),
    [monthlyTargets]
  );

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th colSpan={3}>Targets</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from(normalizedMonthlyTargets).map((row, index) => {
            const isFirstItem = index === 0;
            const [rowId, cells] = row;
            console.log({ rowId, cells });
            // We know all ids are unique because our array is
            // derived from a Map.
            return (
              <Tr key={rowId}>
                {/* TODO transform rowId into a proper "copy" string */}
                <Td key={rowId}>{isFirstItem ? "" : rowId}</Td>
                {cells.map((cell) => {
                  const { id, value } = cell;
                  console.log("cell", { id, value });
                  const key = isFirstItem ? value : id;
                  return <Td key={key}>{value}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
