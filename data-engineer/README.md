# 🔧 Vasco Data Engineer Challenge

## Overview

In this challenge, you will build a TypeScript backend service that queries BigQuery to provide deal statistics. The challenge is designed to test your ability to work with cloud data warehouses, write efficient SQL queries, and build clean APIs.

This is a **live session challenge** (1.5 hours). You will receive this repository in advance to set up your environment and practice if you wish. During the live session, you will review existing code, debug issues, and implement new features.

## What You'll Build

A REST API that provides deal statistics from a BigQuery database:

### Level 1: All-Time Deal Statistics

Build an API that returns the count of deals by status (all time).

**Response format:**
```json
{
  "won": 42,
  "lost": 18,
  "active": 25
}
```

**Business logic:**
- `won`: Deals where `status = 'won'`
- `lost`: Deals where `status = 'lost'`
- `active`: Deals where `status IS NULL` (not yet won or lost)

### Level 2: Period-Based Statistics

Extend your API to accept time period parameters (month or quarter with year).

**Response format:**
```json
{
  "won": 12,
  "lost": 5,
  "active": 8
}
```

**Business logic:**
- For **won** deals: Count deals that were won during the specified period
- For **lost** deals: Count deals that were lost during the specified period
- For **active** deals: Count deals that were still open (not yet won or lost) at the end of the period

### Level 3: Stalled Deals (Mystery Level)

*This level will be revealed during the live session.*

### Level 4: Configuration API (Bonus)

*This level will be revealed during the live session if time permits.*

## Data Schema

### `deals` Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | STRING | Unique deal identifier |
| `name` | STRING | Deal name |
| `status` | STRING | Deal status: `'won'`, `'lost'`, or `NULL` (active) |
| `created_at` | TIMESTAMP | When the deal was created |
| `updated_at` | TIMESTAMP | When the deal was last updated |
| `last_activity_at` | TIMESTAMP | When the last activity occurred on this deal |
| `won_at` | TIMESTAMP | When the deal was won (NULL if not won) |
| `lost_at` | TIMESTAMP | When the deal was lost (NULL if not lost) |

### `config` Table

| Column | Type | Description |
|--------|------|-------------|
| `key` | STRING | Configuration key |
| `value` | STRING | Configuration value |

## Getting Started

### Prerequisites

- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
- [Terraform](https://developer.hashicorp.com/terraform/downloads) installed
- [Node.js](https://nodejs.org/) (v18 or later) installed
- A Google Cloud account (free tier is sufficient - no credit card required)

### 1. Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or use an existing one
3. Note your **Project ID** (you'll need it later)

> **Note:** BigQuery Sandbox is free and doesn't require a billing account. You get 10 GB of storage and 1 TB of query processing per month.

### 2. Authenticate with Google Cloud

```zsh
gcloud auth login
gcloud auth application-default login
gcloud config set project YOUR_PROJECT_ID
```

### 3. Deploy Infrastructure with Terraform

```zsh
cd terraform
terraform init
terraform plan -var="project_id=YOUR_PROJECT_ID"
terraform apply -var="project_id=YOUR_PROJECT_ID"
```

This will create:
- A BigQuery dataset called `deals_dataset`
- A `deals` table with sample data
- An empty `config` table

### 4. Set Up the Backend

```zsh
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set your Google Cloud Project ID:
```
GCP_PROJECT_ID=your-project-id
```

### 5. Start the Server

```zsh
npm run dev
```

### 6. Verify Setup

Test that your setup is working:

```zsh
curl http://localhost:3000/api/deals
```

You should see a list of deals from BigQuery. If this works, your setup is complete!

## Live Session Structure

During the 1.5-hour live session:

1. **Code Review (30 min)**: You'll review an existing implementation of Level 1 and provide feedback as if doing a code review
2. **Debugging (20 min)**: You'll find and fix a bug in the existing implementation
3. **Implementation (40 min)**: You'll implement Level 2 and Level 3 (mystery level)

### Rules for AI Usage

- **Code Review & Debugging**: Do NOT use AI to find issues or do the review
- **Implementation**: You MAY use AI to help implement features
- **Fixing bugs**: Once you've found a bug yourself, you MAY use AI to help fix it

## Use of AI Development Tools

You're encouraged to use AI tools like Claude Code or Cursor to move faster at home. At Vasco, we care about code quality, clarity, and reasoning — not how you get there.

> Use AI to accelerate your work, but ensure the result reflects your own understanding and craftsmanship. We'll test that live.

Be ready to explain your choices and adapt your code **without AI** in the live session.

**Optional:** We're curious how you used AI while working on this challenge — what helped, what didn't. If you'd like, keep your prompts or spec files so we can discuss them during the live interview.

## Tips

- You can practice implementing your own solution before the live session
- During the live session, you'll review an existing implementation of Level 1
- Focus on writing clean, maintainable code
- Consider edge cases in your SQL queries
- Think about error handling and input validation

---

*Good luck! We look forward to seeing your approach.*
