# Data Schema

This document describes the data schema used in the Vasco Data Engineer Challenge.

## Tables

### `deals`

The main table containing deal information.

| Column | Type | Mode | Description |
|--------|------|------|-------------|
| `id` | STRING | REQUIRED | Unique deal identifier |
| `name` | STRING | REQUIRED | Deal name |
| `status` | STRING | NULLABLE | Deal status: `'won'`, `'lost'`, or `NULL` (active) |
| `created_at` | TIMESTAMP | REQUIRED | When the deal was created |
| `updated_at` | TIMESTAMP | REQUIRED | When the deal was last updated |
| `last_activity_at` | TIMESTAMP | REQUIRED | When the last activity occurred on this deal |
| `won_at` | TIMESTAMP | NULLABLE | When the deal was won (NULL if not won) |
| `lost_at` | TIMESTAMP | NULLABLE | When the deal was lost (NULL if not lost) |

#### Status Values

- `'won'` - Deal has been won
- `'lost'` - Deal has been lost
- `NULL` - Deal is still active (not yet won or lost)

#### Sample Data Summary

The seed data includes:

- **17 won deals** - Various dates throughout 2024 and early 2025
- **12 lost deals** - Various dates throughout 2024 and early 2025
- **10 active deals** (status = NULL):
  - 5 with recent activity (January 2025)
  - 5 with old activity (suitable for testing "stalled" concept)

### `config`

A key-value configuration table.

| Column | Type | Mode | Description |
|--------|------|------|-------------|
| `key` | STRING | REQUIRED | Configuration key |
| `value` | STRING | REQUIRED | Configuration value |

#### Expected Configuration Keys

- `stall_threshold` - Number of days after which a deal with no activity is considered "stalled"

## Data File

The `deals.json` file contains the same data that is seeded into BigQuery via Terraform. It can be used for:

- Reference during development
- Local testing
- Understanding the data structure

## Querying the Data

### Count deals by status (all time)

```sql
SELECT
  COUNTIF(status = 'won') as won,
  COUNTIF(status = 'lost') as lost,
  COUNTIF(status IS NULL) as active
FROM `your-project.deals_dataset.deals`
```

