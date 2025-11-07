# Level 2

## Task

Implement a tRPC procedure to retrieve revenue targets for a given quarter.

### Example

```bash
curl --request GET \
  --url http://localhost:2021/trpc/targets.perQuarter?input=%7B%22quarter%22:2,%22year%22:2022%7D
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

- All requirements from Level 1 apply
- The `recurringRevenue` should equal the recurring revenue of the last month in the quarter
- All rates should be calculated using the following formulas:

```math
churnQuarterlyRate = churnQuarterlyAmount / averageQuarterlyRecurringRevenue
```

```math
churnQuarterlyAmount = recurringRevenue(m1-1) * churnRate(m1) + recurringRevenue(m2-1) * churnRate(m2) + recurringRevenue(m3-1) * churnRate(m3)
```

```math
averageQuarterlyRecurringRevenue = (recurringRevenue(m1) + recurringRevenue(m2) + recurringRevenue(m3)) / 3
```

> **Note:** `(m1 - 1)` refers to the month before the first month of the quarter.

- **Assumption:** The recurring revenue for December 2021 is `100000`
