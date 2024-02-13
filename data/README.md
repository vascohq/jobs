# 💿 Vasco Data Engineering Challenge

Welcome to Vasco's data engineering challenge. Your task is to design and implement an ETL (Extract, Transform, Load) process that handles Vasco's revenue data, simulating a real-world data pipeline scenario. 

## Instructions

First, clone this repo (do **not** fork it).

```zsh
git clone https://github.com/vascohq/jobs
cd data
```

Then set up your environment in the language of your choice (Python, SQL, Java, etc.) and install any necessary dependencies.

Solve the challenge by creating an ETL process that extracts data from `targets.json`, transforms it according to the requirements, and loads it into two new datasets: one for monthly targets and one for quarterly targets.

## Pointers

- Focus on creating a robust, efficient, and clean ETL pipeline.
- Make sure your code is well-organized and documented, as if it were part of a larger system.
- You may use any libraries or frameworks that you find appropriate for this task.
- Percentage values should be represented as floats (e.g., `0.1` for 10%).

## Data

Your primary data source is `targets.json`. This JSON file contains revenue targets and rates for different months and quarters.

## Challenge

Your ETL process should create two new datasets:

### Monthly Targets Dataset

- Extract data for each month from `targets.json`.
- Transform the data to calculate the targets per month.
- Load the transformed data into a new dataset, ensuring it's structured and formatted correctly.

### Quarterly Targets Dataset

- Calculate quarterly metrics based on the monthly dataset.
- Transform the data to calculate targets per quarter.
- Use the formulas provided below.
- Load the transformed data into another new dataset, formatted and structured appropriately.

### Additional Requirements

- Validate inputs (e.g., month and quarter values).
- Ensure all rates are formatted as floats.

### Formulas

#### Quarterly Rates Calculation

```math
churnQuarterlyRate = churnQuarterlyAmount / averageQuarterlyRecurringRevenue
```

```math
churnQuarterlyAmount = recurringRevenue(m1-1) *
churnRate(m1) + recurringRevenue(m2-1) * churnRate(m2) + recurringRevenue(m3-1) * churnRate(m3)
```

```math
averageQuarterlyRecurringRevenue = (recurringRevenue(m1) + recurringRevenue(m2) + recurringRevenue(m3)) / 3
```

> (m1 - 1) means the month previous to the first month of the quarter

#### Team Targets Calculation

```math
acquisitionTarget = recurringRevenue(m) - recurringRevenue(m-1)
```

```math
expansionTarget = recurringRevenue(m-1) * (1 - netRetentionRate)
```

```math
netRetentionRate = 1 - downgradeRate + upgradeRate - churnRate
```

> (m - 1) means the previous month value

### Schemas

#### Monthly Targets Dataset Schema

| Field               | Data Type | Description                                     |
| ------------------- | --------- | ----------------------------------------------- |
| `year`              | Integer   | The year of the target                          |
| `month`             | Integer   | The month of the target (1-12)                  |
| `recurringRevenue`  | Float     | The recurring revenue target for the month      |
| `churnRate`         | Float     | The churn rate for the month (as a decimal)     |
| `downgradeRate`     | Float     | The downgrade rate for the month (as a decimal) |
| `upgradeRate`       | Float     | The upgrade rate for the month (as a decimal)   |
| `acquisitionTarget` | Float     | The acquisition target for the month            |
| `expansionTarget`   | Float     | The expansion target for the month              |

#### Quarterly Targets Dataset Schema

| Field               | Data Type | Description                                       |
| ------------------- | --------- | ------------------------------------------------- |
| `year`              | Integer   | The year of the target                            |
| `quarter`           | Integer   | The quarter of the target (1-4)                   |
| `recurringRevenue`  | Float     | The recurring revenue target for the quarter      |
| `churnRate`         | Float     | The churn rate for the quarter (as a decimal)     |
| `downgradeRate`     | Float     | The downgrade rate for the quarter (as a decimal) |
| `upgradeRate`       | Float     | The upgrade rate for the quarter (as a decimal)   |
| `acquisitionTarget` | Float     | The total acquisition target for the quarter      |
| `expansionTarget`   | Float     | The total expansion target for the quarter        |

### Submission

When you are done, see how to submit your challenge on the main [README](../README.md#sending-your-results).
