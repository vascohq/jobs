import { useEffect, useMemo, useRef } from "react";
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
} from "../../components/table";
import { normalizeMonthlyTargets } from "./normalizer";
import { ValueType } from "../../types";
import { displayValue } from "../../utils";
import { useMonthyTargets } from "../../client";

export function Targets() {
  const divRef = useRef<HTMLDivElement>(null);

  // Fetching data from server
  const { data: monthlyTargets } = useMonthyTargets();

  // Memoize results from normalization function
  // TODO: Revisit this approach when implementing cell editing
  const normalizedMonthlyTargets = useMemo(() => {
    if (monthlyTargets) {
      return Array.from(normalizeMonthlyTargets(monthlyTargets));
    }
    return [];
  }, [monthlyTargets]);

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log("event.target", event);
    if (event.key === "Enter" && event.target instanceof HTMLElement) {
      console.log("---");
      const cell = event.target.closest("td");
      if (cell) {
        console.log({ cell });
      }
    }
  };

  useEffect(() => {
    const currentRef = divRef.current;
    console.log({ currentRef });
    if (currentRef) {
      currentRef.addEventListener("keydown", handleKeyDown as EventListener);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener(
          "keydown",
          handleKeyDown as EventListener
        );
      }
    };
  }, [divRef]);

  console.log("monthly targets", normalizedMonthlyTargets);

  // Blocking the entire UI until
  // data is received from server.
  if (!normalizedMonthlyTargets.length) {
    // Could be a spinner or skeletons that would also rely
    // on the client state (from swr)
    return null;
  }
  // Need to extract the first cells of the first row
  // in order to use the months as th cells
  const [monthRow, ...remainingRows] = normalizedMonthlyTargets;
  const [monthCellId, monthCells] = monthRow;

  // Went with a table with two headers
  // https://www.w3.org/WAI/tutorials/tables/two-headers/
  return (
    <VascoTableContainer ref={divRef}>
      <VascoTable>
        <VascoThead>
          <VascoTr>
            <VascoThMain>{displayValue("targets", ValueType.Copy)}</VascoThMain>
          </VascoTr>
          <VascoTr>
            <VascoTh scope="col" bgColor="gray.50">
              {/*
                For the first cell of the first row, text
                should be visually hidden but remain accessible
                to screen readers
              */}
              <VisuallyHidden>
                {displayValue(monthCellId, ValueType.Copy)}
              </VisuallyHidden>
            </VascoTh>
            {monthCells.map((cell) => {
              const { id: cellId, value, valueType } = cell;
              return (
                <VascoTh
                  key={cellId}
                  scope="col"
                  bgColor="gray.50"
                  fontWeight="bold"
                  textAlign="end"
                >
                  {displayValue(value, valueType)}
                </VascoTh>
              );
            })}
            {/*
              The last cell exists only for styling
              purposes, can't tab into it and it is aria-hidden
            */}
            <VascoTh tabIndex={-1} aria-hidden={true} />
          </VascoTr>
        </VascoThead>
        <VascoTbody>
          {remainingRows.map((row) => {
            // We know all ids are unique because our array is
            // derived from a Map.
            const [rowId, cells] = row;
            return (
              <VascoTr key={rowId}>
                <VascoTh scope="row">
                  {displayValue(rowId, ValueType.Copy)}
                </VascoTh>
                {cells.map(({ id, value, valueType }) => {
                  const isHighlightedCell = rowId === "newBusinessMRR";
                  return (
                    <VascoTd
                      key={id}
                      highlight={isHighlightedCell}
                      textAlign="end"
                    >
                      {displayValue(value, valueType)}
                    </VascoTd>
                  );
                })}
                {/*
                  Again, last cell exists only for styling
                  purposes, can't tab into it and it is aria-hidden
                */}
                <VascoTd tabIndex={-1} aria-hidden={true} />
              </VascoTr>
            );
          })}
        </VascoTbody>
      </VascoTable>
    </VascoTableContainer>
  );
}
