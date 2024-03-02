import clsx from "clsx";
import { PropsWithChildren, ReactNode, useState } from "react";
import FetchLoader from "../components/FetchLoader";
import * as formatter from "../formatter";
import { useFetch } from "../hooks/use-fetch";
import {
  cellCurrentlyEdited,
  editableCell,
  tableOverflowContainer,
  tableTargets,
} from "./OrganizationTargetsPage.module.css";
import {
  MonthlyTarget,
  OrganizationTargets,
  targetKey,
  useTargetsComputationReducer,
} from "./organization-targets";

export default function OrganizationTargetsPage() {
  const query = useFetch<OrganizationTargets>("monthlyTargets.json");

  return (
    <FetchLoader {...query}>
      <OrganizationTargetsTable data={query.data!} />
    </FetchLoader>
  );
}

function OrganizationTargetsTable(props: { data: OrganizationTargets }) {
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
              <th key={targetKey(target)}>{formatter.monthYear(target)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow
            rowHeader="Beginning MRR"
            data={data}
            cell={(target) => formatter.money(target.beginningMRR)}
          />
          <TableRow
            rowHeader="New Business MRR"
            data={data}
            cell={(target) => formatter.money(target.newBusinessMRR)}
            editable
            onCellChange={(target, value) =>
              dispatch({
                type: "updateNewBusinessMRR",
                month: target.month,
                year: target.year,
                value: value == undefined ? 0 : parseEditableCellNumber(value),
              })
            }
          />
          <TableRow
            rowHeader="Churn Rate"
            data={data}
            cell={(target) => formatter.percent(target.churnRate / 100)}
          />
          <TableRow
            rowHeader="Expansion Rate"
            data={data}
            cell={(target) => formatter.percent(target.expansionRate / 100)}
          />
          <TableRow
            rowHeader="Ending MRR"
            data={data}
            cell={(target) => formatter.money(target.endingMRR)}
          />
        </tbody>
      </table>
    </div>
  );
}

function TableRow({
  rowHeader,
  data,
  cell,
  editable,
  onCellChange,
}: {
  rowHeader: ReactNode;
  data: OrganizationTargets;
  cell: (target: MonthlyTarget) => ReactNode;
  editable?: boolean;
  onCellChange?: (target: MonthlyTarget, value: string | undefined) => unknown;
}) {
  return (
    <tr>
      <th>{rowHeader}</th>
      {data?.map((target) => (
        <TableCell
          key={targetKey(target)}
          editable={editable}
          onChange={(value) => onCellChange?.(target, value)}
        >
          {cell(target)}
        </TableCell>
      ))}
    </tr>
  );
}

function TableCell({
  editable,
  onChange,
  children,
}: PropsWithChildren<{
  editable?: boolean;
  onChange?: (value: string | undefined) => unknown;
}>) {
  const [currentlyEdited, setCurrentlyEdited] = useState(false);
  return (
    /** I chose a contenteditable here for simplicity, but ideally which should have a better component with an overlay input number */
    <td
      className={clsx({
        [editableCell]: editable,
        [cellCurrentlyEdited]: currentlyEdited,
      })}
      contentEditable={editable}
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
