import { getTranslation } from "../i18n";
import { ValueType } from "../types";

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const percent = new Intl.NumberFormat("en-US", {
  style: "percent",
});

export const number = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
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
      return percent.format((value as number) / 100);
    case ValueType.Date:
      return dateFormatter.format(value as Date);
    case ValueType.Copy:
      return getTranslation(value as string);
    default:
      // We need to return something that JSX can render
      return value.toLocaleString();
  }
}

export function debounce(fn: (...args: any[]) => void, delay: number) {
  let setTimeoutId: NodeJS.Timeout | null = null;

  return function (this: ThisParameterType<typeof fn>, ...args: any[]) {
    if (setTimeoutId !== null) {
      clearTimeout(setTimeoutId);
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this, args);
      setTimeoutId = null;
    }, delay);
  };
}
