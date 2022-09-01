# Level 1

## Targets per month

You are task to implement a procedure call to retrieve the targets for a given month.

### Example

```bash
curl --request GET \
  --url http://localhost:2021/trpc/targets.perMonth?input=%7B%22month%22:2,%22year%22:2022%7D
```

```json
{
  "month": 2,
  "year": 2022,
  "recurringRevenue": 110000,
  "churnRate": 0.01,
  "downgradeRate": 0.03,
  "upgradeRate": 0.02
}
```

### Requirements

- Inputs must be valid (e.g. month `13` is impossible)
- Rates must be formatted as floats (e.g. `1` => `0.01`)
- Months without data returns an empty object
