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
  Q1: "Q1",
  Q2: "Q2",
  Q3: "Q3",
  Q4: "Q4",
};

export function getTranslation(key: string) {
  return translations[key] || "";
}
