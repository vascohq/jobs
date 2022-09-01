# Level 3

## Targets per teams

Our sales team is split in two group: Acquisition and Expansion.

You are task to add each team target to the `perMonth` and `perQuarter` procedures.

### Example

```bash
curl --request GET \
  --url http://localhost:2021/trpc/targets.perQuarter?input=%7B%quarter%22:2,%22year%22:2022%7D
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

- All the requirements of previous levels
- Add teams target to `perMonth` and `perQuarter` procedures
- Here are the monthly formulas for each team:

```math
acquisitionTarget = recurringRevenue(m) - recurringRevenue(m-1)
```

```math
expansionTarget = recurringRevenue(m-1) * (1 - netRetentionRate)
```

```math
netRetentionRate =  1 - downgradeRate + upgradeRate - churnRate
```

> `(m - 1)` means the previous month value

- Quarterly values are simply the sum of the quarter's months
- Assume that the recurring revenue of December 2021 is `100000`
