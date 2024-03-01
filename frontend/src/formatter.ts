/**
 * Take a month number and year and return a formatted string with current locale (e.g. Jan 23).
 */
export function monthYear(value: { month: number; year: number }) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    year: "2-digit",
  }).format(new Date(value.year, value.month - 1));
}

/**
 * Take a number and return a formatted string with current locale (e.g. $1,234.56).
 */
export function money(value: number) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format a number as a percentage with current locale (e.g. 12%).
 */
export function percent(value: number) {
  return new Intl.NumberFormat(undefined, {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value);
}
