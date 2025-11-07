# Level 1

## Task

Implement a tRPC procedure to retrieve revenue targets for a given month.

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

- Input validation: month must be between 1-12 (e.g., month `13` is invalid)
- Rate formatting: rates must be formatted as floats (e.g., `1` in the data should be returned as `0.01`)
- Missing data: months without data should return an empty object `{}`
