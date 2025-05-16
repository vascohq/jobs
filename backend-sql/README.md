## Activities playbook challenge

Data are at the center of the Vasco Solution, we use them to help our users on different aspects, such as diagnosis, execution, and plan.

One key aspect of a sales representative’s role is engaging with prospects through what we call "Activities".
These activities encompass every form of client interaction—meetings, calls, emails, and more.

There is a strong correlation between the number of activities performed over time and the successful conversion of prospects.

With that in mind, Vasco enables you to define a customized Activities Playbook that guides your sales reps on which actions to take and when—helping them stay consistent and effective throughout the sales process.

### Your challenge

We have compiled a list of activities carried out in January 2025 for a selected group of prospects, along with the corresponding reference playbook.

#### Activities

| column      | description                |
| ----------- | -------------------------- |
| id          | Unique ID                  |
| type        | meeting, email, call, demo |
| prospect_id | ID of the prospect         |
| date        | Date of the activity       |

#### Prospect

| column  | description                                |
| ------- | ------------------------------------------ |
| id      | Unique ID                                  |
| name    | Company name                               |
| date_in | Date the prospect entered the sales funnel |

#### Playbook checkpoints

| column           | description                                           |
| ---------------- | ----------------------------------------------------- |
| day              | Number of days a prospect spent in the funnel         |
| cumulated_target | Number of cumulated activities expected at that point |

1. Identify Daily Playbook Violations (January 2025)

   A prospect is considered in violation if they haven't received the required number of activities by a given day.

   However, if the shortfall is addressed later—for example, if the prospect was in violation on January 15 but receives sufficient attention before January 31—they are no longer considered in violation as of the end of the month.

   To keep things straightforward, the playbook has been structured with one checkpoint per day throughout the month of January.

2. Calculate the Daily Adherence Score

   To promote timely engagement, we introduce the concept of an Adherence Score.

   This score reflects how closely the sales rep's actions align with the playbook timeline.
   Prospects who experience delayed or insufficient activity are at greater risk of being lost.

   To quantify this risk and incentivize proper timing, each missed checkpoint results in a 5% penalty to the prospect’s adherence score.
   This encourages consistent, on-schedule follow-ups throughout the sales cycle.

Score formula for a single prospect: $\min\left(\frac{\text{cumulatedActuals}}{\text{cumulatedTarget}},\ 1\right) \cdot \left(1 - 0.05 \cdot \text{missedCheckpointCount}\right)$

For now we can use a simple average function to calculate the adherence score for all prospects in the funnel per day.

Expected results for **1/** and **2/**

| Date       | # Prospects in Violation | # Prospects in Funnel | Average Adherence Score |
| ---------- | ------------------------ | --------------------- | ----------------------- |
| 2025-01-01 | 1                        | 1                     | 0%                      |
| 2025-01-02 | 2                        | 2                     | 23%                     |
| 2025-01-03 | 3                        | 3                     | 14%                     |
| 2025-01-04 | 4                        | 4                     | 10%                     |
| 2025-01-05 | 5                        | 5                     | 27%                     |
| 2025-01-06 | 4                        | 6                     | 45%                     |
| 2025-01-07 | 2                        | 7                     | 65%                     |
| 2025-01-08 | 4                        | 8                     | 59%                     |
| 2025-01-09 | 4                        | 9                     | 61%                     |
| 2025-01-10 | 4                        | 10                    | 63%                     |
| 2025-01-11 | 4                        | 11                    | 60%                     |
| 2025-01-12 | 3                        | 12                    | 66%                     |
| 2025-01-13 | 4                        | 13                    | 63%                     |
| 2025-01-14 | 3                        | 14                    | 72%                     |
| 2025-01-15 | 5                        | 15                    | 67%                     |
| 2025-01-16 | 6                        | 16                    | 66%                     |
| 2025-01-17 | 8                        | 17                    | 63%                     |
| 2025-01-18 | 8                        | 18                    | 65%                     |
| 2025-01-19 | 7                        | 19                    | 69%                     |
| 2025-01-20 | 9                        | 20                    | 63%                     |
| 2025-01-21 | 9                        | 21                    | 64%                     |
| 2025-01-22 | 9                        | 22                    | 66%                     |
| 2025-01-23 | 10                       | 23                    | 61%                     |
| 2025-01-24 | 12                       | 24                    | 57%                     |
| 2025-01-25 | 13                       | 25                    | 57%                     |
| 2025-01-26 | 12                       | 26                    | 59%                     |
| 2025-01-27 | 11                       | 27                    | 59%                     |
| 2025-01-28 | 12                       | 28                    | 56%                     |
| 2025-01-29 | 10                       | 29                    | 57%                     |
| 2025-01-30 | 10                       | 30                    | 56%                     |
| 2025-01-31 | 10                       | 31                    | 58%                     |

#### Data

You need to load the DuckDB database [dataset.duckdb.db](./data) and write the required SQL to solve the challenge.

At Vasco, we move quickly and refine our solutions through multiple iterations. With that in mind, the solution you propose should be easy to maintain and adaptable for future improvements.

Adding unit tests to your solution would significantly enhance its accuracy and reliability.

> <small>**Note for reviewers**: the SQL solving this challenge can be found on 1Password</small>
