// Will need runtime access so using enum
// instead of const enum
export enum ValueType {
  Currency = "currency",
  Percentage = "percentage",
  Date = "date",
  Number = "number",
}

export type MonthlyTarget = {
  month: number;
  year: number;
  beginningMRR: number;
  newBusinessMRR: number;
  churnRate: number;
  grossChurnedMRR: number;
  expansionRate: number;
  expansionMRR: number;
  endingMRR: number;
};

export type CellData = {
  id: string;
  value: number | string | Date;
  valueType: ValueType;
};
