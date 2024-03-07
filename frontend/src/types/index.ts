// Will need runtime access so using enum
// instead of const enum
export enum ValueType {
  Copy = "copy",
  Currency = "currency",
  Date = "date",
  Number = "number",
  Percentage = "percentage",
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

export type CellDataCurrency = {
  id: string;
  value: number;
  valueType: ValueType.Currency;
};

export type CellDataPercentage = {
  id: string;
  value: number;
  valueType: ValueType.Percentage;
};

export type CellDataNumber = {
  id: string;
  value: number;
  valueType: ValueType.Number;
};

export type CellDataDate = {
  id: string;
  value: Date;
  valueType: ValueType.Date;
};

export type CellDataCopy = {
  id: string;
  value: string;
  valueType: ValueType.Copy;
};

export type CellData =
  | CellDataCurrency
  | CellDataPercentage
  | CellDataNumber
  | CellDataDate
  | CellDataCopy;
