# Level 2

## Targets per quarter

You are task to implement another procedure call to provide targets now per quarter.

### Example

```bash
curl --request GET \
  --url http://localhost:2021/trpc/targets.perQuarter?input=%7B%quarter%22:2,%22year%22:2022%7D
```

```json
{
  "quarter": 2,
  "year": 2022,
  "recurringRevenue": 145000,
  "churnRate": 0.028,
  "downgradeRate": 0.085,
  "upgradeRate": 0.056
}
```

### Requirements

- All the requirements of previous levels
- The `recurringRevenue` should be equal to the last month of the quarter
- All rates should be calculated like so:

```math
churnQuarterlyRate = churnQuarterlyAmount / averageQuarterlyRecurringRevenue
```

```math
churnQuarterlyAmount = recurringRevenue(m1-1) * churnRate(m1) + recurringRevenue(m2-1) * churnRate(m2) + recurringRevenue(m3-1) * churnRate(m3)
```

```math
averageQuarterlyRecurringRevenue = (recurringRevenue(m1) + recurringRevenue(m2) + recurringRevenue(m3)) / 3
```

> `(m1 - 1)` means the month previous to the first month of the quarter

- Assume that the recurring revenue of December 2021 is `100000`
