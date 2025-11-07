# ♟️ Vasco Backend Challenge

Welcome to Vasco's backend challenge. You are tasked to implement a few [tRPC](https://trpc.io/) procedures around Vasco's business requirements, although simplified. The API will be consumed in a revenue forecast UI similar to a Google Sheet.

## Getting Started

### Setup

1. Clone this repository (do **not** fork it):
   ```zsh
   git clone https://github.com/vascohq/jobs
   cd backend
   ```

2. Install all required dependencies:
   ```zsh
   yarn install
   ```

### Solving the Challenge

The challenge is divided into three levels that increase in complexity. Solve them in ascending order by writing code that makes each `level.test.ts` pass.

To test a level:
```zsh
yarn workspace level1 test
yarn workspace level2 test
yarn workspace level3 test
```

When you are done, see how to submit your solution in the main [README](../README.md#submitting-your-solution).

## Tips

The challenge is separated into levels that become more complex over time. You'll likely need to reuse and adapt code from previous levels to meet new requirements.

- Write [Clean Code](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29), adding new layers of abstraction when they become necessary. Consider writing tests to ensure you don't break existing functionality.
- Don't hesitate to write quick, working code at first, then refactor it in subsequent levels.
- For higher levels, we're interested in seeing code that is clean, extensible, and robust. Don't overlook edge cases—use exceptions where needed.
- Organize your code and files as if this were a production application.

## Use of AI Development Tools

You're encouraged to use AI tools like Claude Code or Cursor to move faster at home. At Vasco, we care about code quality, clarity, and reasoning — not how you get there.

> Use AI to accelerate your work, but ensure the result reflects your own understanding and craftsmanship. We'll test that live.

Be ready to explain your choices and adapt your code **without AI** in the live session.

**Optional:** We're curious how you used AI while working on this challenge — what helped, what didn't. If you'd like, keep your prompts or spec files so we can discuss them during the live interview.

## Data

All levels share the same data file: `data/targets.json`. Use it as you see fit to complete each level.
