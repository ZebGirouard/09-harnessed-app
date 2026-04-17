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
  // Fetch `/api/issues` and render the result.
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const payload = {
    title: formData.get("title"),
    status: formData.get("status")
  };

  // POST the payload to `/api/issues`.
  // Show an error in #message when the request fails.
  // Reload the list when the request succeeds.
});

loadIssues();
