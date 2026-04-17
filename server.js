import express from "express";
import { seedIssues } from "./seed-data.js";

const app = express();
const port = process.env.PORT || 3002;
let issues = [...seedIssues];

app.use(express.json());
app.use(express.static("public"));

app.get("/api/issues", (request, response) => {
  response.json(issues);
});

app.post("/api/issues", (request, response) => {
  const { title, status } = request.body;

  if (!title || !title.trim()) {
    response.status(400).json({ error: "title is required" });
    return;
  }

  const issue = {
    id: issues.length + 1,
    title: title.trim(),
    status: status || "todo"
  };

  issues = [...issues, issue];
  response.status(201).json(issue);
});

app.listen(port, () => {
  console.log(`Harnessed app listening on http://localhost:${port}`);
});
