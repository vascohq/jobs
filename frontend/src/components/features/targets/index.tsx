import { useMemo } from "react";
import { VisuallyHidden } from "@chakra-ui/react";
import {
  VascoTable,
  VascoTbody,
  VascoTd,
  VascoTh,
  VascoThead,
  VascoTr,
  VascoTableContainer,
  VascoThMain,
} from "../../ui/table";
import monthlyTargets from "../../../../data/monthlyTargets.json";
import { Display } from "../../ui/display";
import { normalizeMonthlyTargets } from "./normalizer";

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
              const { id: cellId, value, valueType } = cell;
              return (
                <VascoTh key={cellId}>
                  <Display value={value} valueType={valueType} />
                </VascoTh>
              );
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
                {cells.map(({ id, value, valueType }) => {
                  const isHighlightedCell = rowId === "newBusinessMRR";
                  return (
                    <VascoTd key={id} highlight={isHighlightedCell}>
                      <Display value={value} valueType={valueType} />
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
