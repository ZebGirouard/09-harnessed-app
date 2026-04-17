# 09 Harnessed App

## Goal
Build a small full-stack issue tracker and learn that the harness matters as much as the code.

## Start Here
1. Run `npm install`.
2. Run `npm run dev`.
3. Read the task, acceptance criteria, and definition of done before touching code.

This repo is intentionally structured so a human or an AI agent can work inside the same constraints.

## Task
Finish the issue tracker flow so the UI loads seed issues, creates a new issue, and shows the updated list without a full page refresh.

## Acceptance Criteria
- The page loads the seed issues from the API on first render.
- Submitting the form creates a new issue with a title and status.
- The new issue appears in the list immediately after a successful save.
- Empty titles are rejected with a useful error.

## Definition Of Done
- The acceptance criteria pass.
- `npm test` passes.
- The README examples still match the actual API.

## Seed Data
```json
[
  { "id": 1, "title": "Hook up GET /issues", "status": "todo" },
  { "id": 2, "title": "Wire the form submit", "status": "in-progress" }
]
```

## Example Prompts
- Explain the current request/response flow and tell me what is missing.
- Add the smallest possible implementation that satisfies the acceptance criteria.
- Write a failing test first for creating a new issue, then implement the fix.

## Stretch Goals
- Add status filters.
- Persist to a JSON file.
- Add a delete button.
