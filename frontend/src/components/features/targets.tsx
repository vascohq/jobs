import { useMemo } from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "../ui/table";
import monthlyTargets from "../../../data/monthlyTargets.json";
import { VisuallyHidden } from "@chakra-ui/react";

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
  // TODO: Revisit this approach when implementing cell editing
  const normalizedMonthlyTargets = useMemo(
    () => normalizeMonthlyTargets(monthlyTargets),
    [monthlyTargets]
  );

  return (
    <TableContainer
      bgColor="surface.light"
      border="1px"
      borderColor="gray.200"
      borderRadius={5}
    >
      <Table
        style={{
          borderCollapse: "separate",
          borderSpacing: 0,
        }}
      >
        <Thead>
          <Tr>
            <Th
              position="sticky"
              top={0}
              left={0}
              border={0}
              padding="16px"
              fontSize="lg"
              fontWeight="bold"
              textTransform="capitalize"
            >
              Targets
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from(normalizedMonthlyTargets).map((row, rowIndex) => {
            const isFirstRow = rowIndex === 0;
            // We know all ids are unique because our array is
            // derived from a Map.
            const [rowId, cells] = row;
            return (
              <Tr
                key={rowId}
                _first={{
                  bgColor: "gray.50",
                }}
              >
                {/* TODO transform rowId into a proper "copy" string */}
                <Td
                  key={rowId}
                  _first={{
                    bgColor: isFirstRow ? "gray.50" : "surface.light",
                    borderRight: "1px",
                    borderColor: "gray.200",
                    minWidth: "220px",
                  }}
                  position="sticky"
                  left={0}
                  borderTop="1px"
                  borderBottom={0}
                  borderColor="gray.200"
                  boxShadow="5px 10px 15px 0px rgba(184,184,184,0.25)"
                  padding="8px 10px"
                >
                  {/*
                    For the first cell of the first row, text
                    should be hidden but remain accessible to screen readers
                  */}
                  {isFirstRow ? (
                    <VisuallyHidden>{rowId}</VisuallyHidden>
                  ) : (
                    rowId
                  )}
                </Td>
                {cells.map(({ id, value }) => {
                  return (
                    <Td
                      key={id}
                      borderTop="1px"
                      borderBottom={0}
                      borderColor="gray.200"
                      textAlign="end"
                      padding="8px 20px 8px 60px"
                    >
                      {value}
                    </Td>
                  );
                })}
                <Td
                  borderTop="1px"
                  borderBottom={0}
                  borderColor="gray.200"
                  position="sticky"
                  right={0}
                  tabIndex={-1}
                  padding="0"
                  boxShadow="0px 10px 15px 5px rgba(184,184,184,0.25)"
                />
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
