import { useMemo } from "react";
import {
  VascoTable,
  VascoTbody,
  VascoTd,
  VascoTh,
  VascoThead,
  VascoTr,
  VascoTableContainer,
  VascoThMain,
} from "../ui/table";
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
    () => Array.from(normalizeMonthlyTargets(monthlyTargets)),
    [monthlyTargets]
  );

  // Need to extract the first cells of the first row
  // in order to use the months as th cells
  const [monthRow, ...remainingRows] = normalizedMonthlyTargets;
  const [monthCellId, monthCells] = monthRow;

  return (
    <VascoTableContainer>
      <VascoTable>
        <VascoThead>
          <VascoTr>
            <VascoThMain>Targets</VascoThMain>
          </VascoTr>
          <VascoTr>
            <VascoTh>
              {/*
                For the first cell of the first row, text
                should be hidden but remain accessible to screen readers
              */}
              <VisuallyHidden>{monthCellId}</VisuallyHidden>
            </VascoTh>
            {monthCells.map((cell) => {
              const { id: cellId, value } = cell;
              return <VascoTh key={cellId}>{value}</VascoTh>;
            })}
            {/*
              The last cell exists only for styling
              purposes, can't tab into it and it is aria-hidden
            */}
            <VascoTh />
          </VascoTr>
        </VascoThead>
        <VascoTbody>
          {remainingRows.map((row, rowIndex) => {
            // We know all ids are unique because our array is
            // derived from a Map.
            const [rowId, cells] = row;
            return (
              <VascoTr key={rowId}>
                {/* TODO transform rowId into a proper "copy" string */}
                <VascoTd>{rowId}</VascoTd>
                {cells.map(({ id, value }) => {
                  const isHighlightedCell = rowId === "newBusinessMRR";
                  return (
                    <VascoTd key={id} highlight={isHighlightedCell}>
                      {value}
                    </VascoTd>
                  );
                })}
                {/*
                  Again, last cell exists only for styling
                  purposes, can't tab into it and it is aria-hidden
                */}
                <VascoTd />
              </VascoTr>
            );
          })}
        </VascoTbody>
      </VascoTable>
    </VascoTableContainer>
  );
}
