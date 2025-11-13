# 🤖 Vasco AI Challenge

## Overview

In this challenge, you will implement new features for an AI assistant that provides information about a company's revenue.

The project already includes:

- An MCP (Model Context Protocol) server in TypeScript with one tool that returns raw data
- An ADK (Agent Development Kit) server in Python: a chatbot agent that uses the MCP server

## Getting Started

### Setup

#### 1. Set up the MCP Server

```zsh
cd mcp
npm install
```

To start the MCP server:
```zsh
npm run start
```

To start the MCP inspector (for debugging):
```zsh
npm run mcp-inspector
```

#### 2. Set up the ADK Server

**Requirements:**
- Python 3.9 or later
- `pip` for installing packages

```zsh
cd adk
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp ./main/.env.example ./main/.env
```

Create a free tier Gemini API key at [https://aistudio.google.com/api-keys](https://aistudio.google.com/api-keys) and add it to the `.env` file:
```
GOOGLE_API_KEY=your_api_key_here
```

To start the ADK server:
```zsh
adk web --port 8000
```

### Testing

1. Open the [ADK playground](http://127.0.0.1:8000/dev-ui/)
2. Ask: "What is my revenue by channel for January 2025?"
3. The chatbot should respond with the revenue for January 2025 for all channels:

![ADK playground](./docs/adk-01.png)

### Use of AI Development Tools

You're encouraged to use AI tools like Claude Code or Cursor to move faster at home. At Vasco, we care about code quality, clarity, and reasoning — not how you get there.

> Use AI to accelerate your work, but ensure the result reflects your own understanding and craftsmanship. We'll test that live.

Be ready to explain your choices and adapt your code **without AI** in the live session.

**Optional:** We’re curious how you used AI while working on this challenge — what helped, what didn’t. If you’d like, keep your prompts or spec files so we can discuss them during the live interview.

## Your Tasks

You need to implement three capabilities for the AI assistant:

### Capability 1: Understand and Compute ARR from New MRR

When asked "What is my current ARR?", the assistant should recognize that the provided dataset represents new MRR each month.

**Requirements:**

- Accumulate monthly MRR starting from $0 ARR
- Multiply the cumulative MRR by 12 to produce ARR
- Present a concise, natural-language explanation alongside the result

**Example:** Using all 2024 + 2025 data up to December 2025, the correct logic would yield:

```math
ARR = 12 × ∑(monthly MRR)
```

### Capability 2: Fiscal-Year Awareness with User Input and Persistence

The assistant must correctly answer fiscal-period questions such as "What was my ARR in Q2 2024?".

**Requirements:**

- Do not rely on a constant or hard-coded fiscal-year start month
- If the fiscal-year start month is unknown, ask the user directly (e.g., "Which month does your fiscal year start? 1 = January … 12 = December")
- Once provided, remember and persist that preference for subsequent interactions and new conversations
- Using the provided month, translate fiscal quarters to the correct calendar ranges (for example, if the fiscal year starts in April → Q2 FY2025 = July–September 2024, see note below)
- Compute ARR at the **end of that fiscal period** using the same cumulative logic as Capability 1. (E.g. ARR for Q2 2024 is the ARR at the end of Q2 2024.)

> [!NOTE]  
> Fiscal years are numbered according to the year they *end*. So if FY starts in January, FY2024 is Jan to Dec 2024. But if it starts in February, then FY2024 is Feb 2023 to Jan 2024.

### Capability 3: Generate a Reasoned Executive Report with Voice and Judgment

When asked "Write me an executive report on my best channel — which one I should double down on and which I should divest, and why", the assistant should:

**Requirements:**

- Analyze the dataset to identify:
  - The best-performing channel (highest or fastest-growing)
  - The least-performing channel (lowest or stagnating)
- Provide a short, coherent narrative that:
  - Explains the comparison quantitatively (totals, trends, growth)
  - Offers qualitative insight on where to invest or reduce effort
- Deliver the report in the tone and cadence of Morgan Freeman — calm, reflective, cinematic, and persuasive

---

*In the end, it’s not the lines of code that matter, but the story they tell. — Morgan Freeman*
