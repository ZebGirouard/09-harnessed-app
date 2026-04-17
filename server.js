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

  // Reject empty titles with status 400.
  // Create and return the new issue with status 201.
});

app.listen(port, () => {
  console.log(`Harnessed app listening on http://localhost:${port}`);
});
