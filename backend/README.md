# ♟️ Vasco Backend Challenge

Welcome to Vasco's backend challenge. You are tasked to implement a few [tRPC](https://trpc.io/) procedures around Vasco's business requirements, although simplified. The API will be consumed in a revenue forecast UI similar to a Google Sheet.

## Instructions

First, clone this repo (do **not** fork it).

```zsh
git clone https://github.com/vascohq/jobs
cd backend
```

Then install all required dependencies:

```zsh
yarn install
```

Solve the levels in ascending order by writing code that makes each `level.test.ts` pass.

```zsh
yarn workspace level1 test
```

When you are done, see how to submit your challenge on the main [README](../README.md#sending-your-results).

## Pointers

The challenge is separated in levels and they become more complex over time, so you will probably have to re-use some code and adapt it to the new requirements.

- A good way to solve this is by writing [Clean Code](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29), adding new layers of abstraction when they become necessary and possibly write tests so you don't break what you have already done.
- Don't hesitate to write shameless code at first, and then refactor it in the next levels.
- For higher levels we are interested in seeing code that is clean, extensible and robust, so don't overlook edge cases, use exceptions where needed.
- Organize code and files as it was a big production application

## Use of AI Development Tools

You're encouraged to use AI tools like Claude Code or Cursor to move faster at home. At Vasco, we care about code quality, clarity, and reasoning — not how you get there.

> Use AI to accelerate your work, but ensure the result reflects your own understanding and craftsmanship. We'll test that live.

Be ready to explain your choices and adapt your code **without AI** in the live session.

**Optional:** We're curious how you used AI while working on this challenge — what helped, what didn't. If you'd like, keep your prompts or spec files so we can discuss them during the live interview.

## Data

All levels shares the same data: `data/targets.json`. Use it as you see fit to complete each level.
