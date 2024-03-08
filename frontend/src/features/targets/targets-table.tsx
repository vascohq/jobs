import { ChangeEvent, useState } from "react";
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
  VascoTdInput,
} from "../../components/table";
import { ValueType, MonthlyTargetMap } from "../../types";
import { debounce, displayValue } from "../../utils";
import { updateTargetsMap } from "./normalizer";

const update = debounce(updateTargetsMap, 1000);

export function TargetsTable({
  normalizedMonthlyTargets,
}: {
  normalizedMonthlyTargets: MonthlyTargetMap;
}) {
  const [monthlyTargets, setMonthlyTargets] = useState(
    normalizedMonthlyTargets
  );

  const handleEditCell = (event: ChangeEvent<HTMLInputElement>) => {
    const { dataset, value } = event.target;
    const { rowId, cellIndex } = dataset;
    update(monthlyTargets, rowId, cellIndex, value, setMonthlyTargets);
  };

  const targets = Array.from(monthlyTargets);

  // console.log("monthly targets", targets);

  // Need to extract the first cells of the first row
  // in order to use the months as th cells
  const [monthRow, ...remainingRows] = targets;
  const [monthCellId, monthCells] = monthRow;

  // Went with a table with two headers
  // https://www.w3.org/WAI/tutorials/tables/two-headers/
  return (
    <VascoTableContainer>
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
                {cells.map(({ id, value, valueType }, index) => {
                  const isEditable =
                    rowId === "newBusinessMRR" && typeof value !== "object";
                  const isNumber =
                    valueType === ValueType.Currency ||
                    valueType === ValueType.Number;
                  return (
                    <VascoTd key={id} isEditable={isEditable} textAlign="end">
                      {isEditable ? (
                        <VascoTdInput
                          data-row-id={rowId}
                          data-cell-index={index.toString()}
                          defaultValue={value}
                          onChange={handleEditCell}
                          {...(isNumber ? { type: "number" } : {})}
                        />
                      ) : (
                        displayValue(value, valueType)
                      )}
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
