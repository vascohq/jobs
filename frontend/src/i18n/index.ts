// My super duper translation lib ;-)
const translations: Record<string, string> = {
  targets: "Targets",
  month: "Month",
  year: "Year",
  beginningMRR: "Beginning MRR",
  newBusinessMRR: "New Business MRR",
  churnRate: "Churn Rate",
  grossChurnedMRR: "Gross Churned MRR",
  expansionRate: "Expansion Rate",
  expansionMRR: "Expansion MRR",
  endingMRR: "Ending MRR",
};

export function getTranslation(key: string) {
  return translations[key] || "";
}
