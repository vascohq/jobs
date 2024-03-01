import React from "react";
import monthlyData from "../../data/monthlyTargets.json";
import * as formatter from "../formatter";
import {
  editableCell,
  tableOverflowContainer,
  tableTargets,
} from "./OrganizationTargetsPage.module.css";

export default function OrganizationTargetsPage() {
  return (
    <div className={tableOverflowContainer}>
      <table className={tableTargets}>
        <caption>
          <div>Targets</div>
        </caption>
        <thead>
          <tr>
            <th></th>
            {monthlyData.map((monthlyTarget) => (
              <th key={`${monthlyTarget.month}-${monthlyTarget.year}`}>
                {formatter.monthYear(monthlyTarget)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow
            rowHeader="Beginning MRR"
            data={monthlyData}
            cell={(monthlyTarget) =>
              formatter.money(monthlyTarget.beginningMRR)
            }
          />
          <TableRow
            rowHeader="New Business MRR"
            data={monthlyData}
            cell={(monthlyTarget) =>
              formatter.money(monthlyTarget.newBusinessMRR)
            }
            editable
          />
          <TableRow
            rowHeader="Churn Rate"
            data={monthlyData}
            cell={(monthlyTarget) =>
              formatter.percent(monthlyTarget.churnRate / 100)
            }
          />
          <TableRow
            rowHeader="Expansion Rate"
            data={monthlyData}
            cell={(monthlyTarget) =>
              formatter.percent(monthlyTarget.expansionRate / 100)
            }
          />
          <TableRow
            rowHeader="Ending MRR"
            data={monthlyData}
            cell={(monthlyTarget) => formatter.money(monthlyTarget.endingMRR)}
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
}: {
  rowHeader: React.ReactNode;
  data: typeof monthlyData;
  cell: (monthlyTarget: (typeof monthlyData)[number]) => React.ReactNode;
  editable?: boolean;
}) {
  return (
    <tr>
      <th>{rowHeader}</th>
      {data.map((monthlyTarget) => (
        <td
          key={`${monthlyTarget.month}-${monthlyTarget.year}`}
          className={editable ? editableCell : undefined}
        >
          {cell(monthlyTarget)}
        </td>
      ))}
    </tr>
  );
}
