<img src="README.jpg" alt="README" />

# 🧩 Vasco Frontend Challenge

Welcome to Vasco's frontend challenge. You are tasked with visualizing an organization's revenue targets per month and quarter. The challenge is divided into multiple levels, increasing in complexity. You can install any library you see fit.

## Getting Started

### Setup

1. Navigate to the frontend directory:
   ```zsh
   cd frontend
   ```

2. Install dependencies:
   ```zsh
   yarn install
   ```

3. Start the development server:
   ```zsh
   yarn dev
   ```

## Level 1

Build a static version of the table shown in the image (months only, no quarters). 

**Requirements:**
- The first column should be sticky (fixed position)
- The table should be horizontally scrollable
- **Bonus:** Respect our design system and adapt to different screen sizes

> **Note:** Be mindful of time—we want to see Level 4 completed.

## Level 2

Fetch the table data from an API. The data files are available in the `data` folder:
- `monthlyTargets.json`
- `quarterlyTargets.json`
- `yearlyTargets.json`

## Level 3

Make the blue cells editable. When edited, all dependent cells should recalculate automatically using the following formulas:

```math
beginningMRR = endingMRR(m-1)
```

```math
endingMRR = beginningMRR + newBusinessMRR + churnedMRR + expansionMRR
```

```math
churnedMRR = beginningMRR * churnRate
```

```math
expansionMRR = beginningMRR * expansionRate
```

### Notes

- The first month's `beginningMRR` is always taken from the API (i.e., $80,000)
- The notation `m-1` refers to the previous month

## Level 4

Add quarter columns to the table. Calculate quarterly values using the following formulas:

```math
quarterlyBeginningMRR = beginningMRR(m1)
```

```math
quarterlyNewBusinessMRR = SUM(newBusinessMRR)
```

```math
quarterlyChurnRate = quarterlyChurnedMRR / quarterlyAverageBeginningMRR
```

```math
quarterlyExpansionRate = quarterlyExpansionMRR / quarterlyAverageBeginningMRR
```

```math
quarterlyEndingMRR = endingMRR(m3)
```

---

```math
quarterlyChurnedMRR = beginningMRR(m1) * churnRate(m1) + beginningMRR(m2) * churnRate(m2) + beginningMRR(m3) * churnRate(m3)
```

```math
quarterlyExpansionMRR = beginningMRR(m1) * expansionRate(m1) + beginningMRR(m2) * expansionRate(m2) + beginningMRR(m3) * expansionRate(m3)
```

```math
quarterlyAverageBeginningMRR = (beginningMRR(m1) + beginningMRR(m2) + beginningMRR(m3)) / 3
```

### Notes

- The notation `m1` refers to the first month of the quarter, `m2` to the second month, and `m3` to the third month.

## Level 5 (Optional)

If you have extra time, write an RFC (Request for Comments) to technically design a solution for making formula calculations reusable across both frontend and backend.

**Context:** The backend should be able to use the same formulas as the frontend. For example, if the backend needs to calculate the Churn Rate, it should use identical logic.

**Your RFC should include:**

- A proposed solution for isomorphic formulas (shared between frontend and backend)
- How to add new formulas over time
- How developers would use the formulas
- Pseudo-code (not a full implementation)
- Pros and cons of your proposed solution

## Use of AI Development Tools

You're encouraged to use AI tools like Claude Code or Cursor to move faster at home. At Vasco, we care about code quality, clarity, and reasoning — not how you get there.

> Use AI to accelerate your work, but ensure the result reflects your own understanding and craftsmanship. We'll test that live.

Be ready to explain your choices and adapt your code **without AI** in the live session.

**Optional:** We're curious how you used AI while working on this challenge — what helped, what didn't. If you'd like, keep your prompts or spec files so we can discuss them during the live interview.
