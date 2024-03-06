import { ValueType } from "../types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const percent = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const number = new Intl.NumberFormat("en-US", {
  style: "decimal",
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "short",
});

type DisplayProps = { value: string | number | Date };

function DisplayCurrency({ value }: DisplayProps) {
  return <>{currency.format(Number(value))}</>;
}

function DisplayPercentage({ value }: DisplayProps) {
  return <>{percent.format(Number(value))}</>;
}

function DisplayNumber({ value }: DisplayProps) {
  return <>{number.format(Number(value))}</>;
}

function DisplayDate({ value }: { value: string | Date }) {
  const date = typeof value === "string" ? new Date(value) : value;
  return <>{dateFormatter.format(date)}</>;
}

export function Display({
  value,
  valueType,
}: DisplayProps & { valueType: ValueType }) {
  switch (valueType) {
    case ValueType.Currency:
      return <DisplayCurrency value={value} />;
    case ValueType.Percentage:
      return <DisplayPercentage value={value} />;
    case ValueType.Date:
      return <DisplayDate value={value as string | Date} />;
    case ValueType.Number:
    default:
      return <DisplayNumber value={value} />;
  }
}
