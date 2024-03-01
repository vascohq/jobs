import React from "react";
import FetchLoader from "../components/FetchLoader";
import * as formatter from "../formatter";
import { useFetch } from "../hooks/use-fetch";
import {
  editableCell,
  tableOverflowContainer,
  tableTargets,
} from "./OrganizationTargetsPage.module.css";

export default function OrganizationTargetsPage() {
  const { data, ...query } = useFetch<MonthlyTarget[]>("monthlyTargets.json");
  // Just making sure - I am not assuming the API is great.
  data?.sort(monthYearSorter);

  return (
    <FetchLoader {...query}>
      <div className={tableOverflowContainer}>
        <table className={tableTargets}>
          <caption>
            <div>Targets</div>
          </caption>
          <thead>
            <tr>
              <th></th>
              {data?.map((monthlyTarget) => (
                <th key={`${monthlyTarget.month}-${monthlyTarget.year}`}>
                  {formatter.monthYear(monthlyTarget)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableRow
              rowHeader="Beginning MRR"
              data={data}
              cell={(monthlyTarget) =>
                formatter.money(monthlyTarget.beginningMRR)
              }
            />
            <TableRow
              rowHeader="New Business MRR"
              data={data}
              cell={(monthlyTarget) =>
                formatter.money(monthlyTarget.newBusinessMRR)
              }
              editable
            />
            <TableRow
              rowHeader="Churn Rate"
              data={data}
              cell={(monthlyTarget) =>
                formatter.percent(monthlyTarget.churnRate / 100)
              }
            />
            <TableRow
              rowHeader="Expansion Rate"
              data={data}
              cell={(monthlyTarget) =>
                formatter.percent(monthlyTarget.expansionRate / 100)
              }
            />
            <TableRow
              rowHeader="Ending MRR"
              data={data}
              cell={(monthlyTarget) => formatter.money(monthlyTarget.endingMRR)}
            />
          </tbody>
        </table>
      </div>
    </FetchLoader>
  );
}

function TableRow({
  rowHeader,
  data,
  cell,
  editable,
}: {
  rowHeader: React.ReactNode;
  data: MonthlyTarget[] | undefined;
  cell: (monthlyTarget: MonthlyTarget) => React.ReactNode;
  editable?: boolean;
}) {
  return (
    <tr>
      <th>{rowHeader}</th>
      {data?.map((monthlyTarget) => (
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

/**
 * Sorter function for the monthly targets by year and month.
 */
function monthYearSorter(
  a: { month: number; year: number },
  b: { month: number; year: number },
) {
  return a.year - b.year || a.month - b.month;
}

export interface MonthlyTarget {
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
