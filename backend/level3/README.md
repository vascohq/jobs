# Level 3

## Task

Extend the `perMonth` and `perQuarter` procedures to include team-specific targets. Our sales team is split into two groups: **Acquisition** and **Expansion**.

### Example

```bash
curl --request GET \
  --url http://localhost:2021/trpc/targets.perQuarter?input=%7B%22quarter%22:2,%22year%22:2022%7D
```

```diff
{
  "quarter": 2,
  "year": 2022,
  "recurringRevenue": 145000,
  "churnRate": 0.028,
  "downgradeRate": 0.085,
  "upgradeRate": 0.056
+ "acquisitionTarget": 5000.00,
+ "expansionTarget": 2000.00
}
```


### Requirements

- All requirements from previous levels apply
- Add team targets (`acquisitionTarget` and `expansionTarget`) to both `perMonth` and `perQuarter` procedures
- Use the following monthly formulas for each team:

```math
acquisitionTarget = recurringRevenue(m) - recurringRevenue(m-1)
```

```math
expansionTarget = recurringRevenue(m-1) * (1 - netRetentionRate)
```

```math
netRetentionRate =  1 - downgradeRate + upgradeRate - churnRate
```

> **Note:** `(m - 1)` refers to the previous month's value.

- **Quarterly calculation:** Quarterly values are the sum of the three months in the quarter
- **Assumption:** The recurring revenue for December 2021 is `100000`
