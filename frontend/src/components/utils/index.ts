import { getTranslation } from "../i18n";
import { ValueType } from "../types";

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const percent = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const number = new Intl.NumberFormat("en-US", {
  style: "decimal",
});

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "short",
});

export function displayValue(
  value: string | number | Date,
  valueType: ValueType
) {
  switch (valueType) {
    case ValueType.Currency:
      return currency.format(value as number);
    case ValueType.Number:
      return number.format(value as number);
    case ValueType.Percentage:
      return percent.format(value as number);
    case ValueType.Date:
      return dateFormatter.format(value as Date);
    case ValueType.Copy:
      return getTranslation(value as string);
    default:
      return value;
  }
}
