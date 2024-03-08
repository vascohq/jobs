// Will need runtime access so using enum
// instead of const enum
export enum ValueType {
  Copy = "copy",
  Currency = "currency",
  Date = "date",
  Number = "number",
  Percentage = "percentage",
}

export enum PeriodType {
  Monthly = "monthly",
  Quarterly = "quarterly",
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
  isBenchmark: boolean;
  periodType: PeriodType;
};

export type CellDataPercentage = {
  id: string;
  value: number;
  valueType: ValueType.Percentage;
  isBenchmark: boolean;
  periodType: PeriodType;
};

export type CellDataNumber = {
  id: string;
  value: number;
  valueType: ValueType.Number;
  isBenchmark: boolean;
  periodType: PeriodType;
};

export type CellDataDate = {
  id: string;
  value: Date;
  valueType: ValueType.Date;
  isBenchmark: boolean;
  periodType: PeriodType;
};

export type CellDataCopy = {
  id: string;
  value: string;
  valueType: ValueType.Copy;
  isBenchmark: boolean;
  periodType: PeriodType;
};

export type CellData =
  | CellDataCurrency
  | CellDataPercentage
  | CellDataNumber
  | CellDataDate
  | CellDataCopy;

export type MonthlyTargetKeys = keyof MonthlyTarget;
export type MonthlyTargetKeysFiltered = keyof Omit<MonthlyTarget, "year">;
export type MonthlyTargetMap = Map<MonthlyTargetKeysFiltered, CellData[]>;
