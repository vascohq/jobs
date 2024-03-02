import clsx from "clsx";
import { PropsWithChildren, ReactNode, useState } from "react";
import FetchLoader from "../components/FetchLoader";
import * as formatter from "../formatter";
import { useFetch } from "../hooks/use-fetch";
import {
  cellCurrentlyEdited,
  editableCell,
  summaryCell,
  tableOverflowContainer,
  tableTargets,
} from "./OrganizationTargetsPage.module.css";
import {
  MonthlyMMRTargets,
  MonthlyOrQuarterMMRTargets,
  OrganizationMMRTargets,
  isMonthlyTarget,
  targetKey,
  useTargetsComputationReducer,
} from "./organization-targets";

export default function OrganizationTargetsPage() {
  const query = useFetch<MonthlyMMRTargets[]>("monthlyTargets.json");

  return (
    <FetchLoader {...query}>
      <OrganizationTargetsTable data={query.data!} />
    </FetchLoader>
  );
}

function OrganizationTargetsTable(props: { data: MonthlyMMRTargets[] }) {
  const [data, dispatch] = useTargetsComputationReducer(props.data);

  return (
    <div className={tableOverflowContainer}>
      <table className={tableTargets}>
        <caption>
          <div>Targets</div>
        </caption>
        <thead>
          <tr>
            <th></th>
            {data.map((target) => (
              <th
                key={targetKey(target)}
                className={clsx({ [summaryCell]: !isMonthlyTarget(target) })}
              >
                {isMonthlyTarget(target)
                  ? formatter.monthYear(target)
                  : `Q${target.quarter}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow
            rowHeader="Beginning MRR"
            data={data}
            cell={(target) => formatter.money(target.beginningMRR)}
            cellMode={(target) =>
              isMonthlyTarget(target) ? "standard" : "summary"
            }
          />
          <TableRow
            rowHeader="New Business MRR"
            data={data}
            cell={(target) => formatter.money(target.newBusinessMRR)}
            cellMode={(target) =>
              isMonthlyTarget(target) ? "editable" : "summary"
            }
            onCellChange={(target, value) => {
              if (!isMonthlyTarget(target)) return;
              dispatch({
                type: "updateNewBusinessMRR",
                month: target.month,
                year: target.year,
                value: value == undefined ? 0 : parseEditableCellNumber(value),
              });
            }}
          />
          <TableRow
            rowHeader="Churn Rate"
            data={data}
            cell={(target) => formatter.percent(target.churnRate / 100)}
            cellMode={(target) =>
              isMonthlyTarget(target) ? "standard" : "summary"
            }
          />
          <TableRow
            rowHeader="Expansion Rate"
            data={data}
            cell={(target) => formatter.percent(target.expansionRate / 100)}
            cellMode={(target) =>
              isMonthlyTarget(target) ? "standard" : "summary"
            }
          />
          <TableRow
            rowHeader="Ending MRR"
            data={data}
            cell={(target) => formatter.money(target.endingMRR)}
            cellMode={(target) =>
              isMonthlyTarget(target) ? "standard" : "summary"
            }
          />
        </tbody>
      </table>
    </div>
  );
}

type CellMode = "standard" | "editable" | "summary";

function TableRow({
  rowHeader,
  data,
  cell,
  cellMode,
  onCellChange,
}: {
  rowHeader: ReactNode;
  data: OrganizationMMRTargets;
  cell: (target: MonthlyOrQuarterMMRTargets) => ReactNode;
  cellMode?: (target: MonthlyOrQuarterMMRTargets) => CellMode;
  onCellChange?: (
    target: MonthlyOrQuarterMMRTargets,
    value: string | undefined,
  ) => unknown;
}) {
  return (
    <tr>
      <th>{rowHeader}</th>
      {data?.map((target) => (
        <TableCell
          key={targetKey(target)}
          cellMode={cellMode?.(target) ?? "standard"}
          onChange={(value) => onCellChange?.(target, value)}
        >
          {cell(target)}
        </TableCell>
      ))}
    </tr>
  );
}

function TableCell({
  cellMode,
  onChange,
  children,
}: PropsWithChildren<{
  cellMode: CellMode;
  onChange?: (value: string | undefined) => unknown;
}>) {
  const [currentlyEdited, setCurrentlyEdited] = useState(false);
  return (
    /** I chose a contenteditable here for simplicity, but ideally which should have a better component with an overlay input number */
    <td
      className={clsx({
        [editableCell]: cellMode === "editable",
        [summaryCell]: cellMode === "summary",
        [cellCurrentlyEdited]: currentlyEdited,
      })}
      contentEditable={cellMode === "editable"}
      suppressContentEditableWarning
      onBlur={(e) => {
        onChange?.(e.currentTarget.textContent || undefined);
        setCurrentlyEdited(false);
      }}
      onInput={() => setCurrentlyEdited(true)}
    >
      {children}
    </td>
  );
}

function parseEditableCellNumber(value: string): number {
  const parsed = parseFloat(value.replace(/[^0-9.]/g, ""));
  return isNaN(parsed) ? 0 : parsed;
}
