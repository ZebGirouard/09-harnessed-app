const issueList = document.querySelector("#issue-list");
const form = document.querySelector("#issue-form");
const message = document.querySelector("#message");

function renderIssues(issues) {
  issueList.innerHTML = issues
    .map(
      (issue) =>
        `<li><strong>${issue.title}</strong> <span>${issue.status}</span></li>`
    )
    .join("");
}

async function loadIssues() {
  const response = await fetch("/api/issues");
  const issues = await response.json();
  renderIssues(issues);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const payload = {
    title: formData.get("title"),
    status: formData.get("status")
  };

  const response = await fetch("/api/issues", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = await response.json();
    message.textContent = error.error;
    return;
  }

  message.textContent = "Issue created.";
  form.reset();
  await loadIssues();
});

loadIssues();
