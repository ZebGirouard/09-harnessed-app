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
  // Which route should the page call to load the starter issues?
  // Once you get that data back, which function already knows how to draw it?
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const payload = {
    title: formData.get("title"),
    status: formData.get("status")
  };

  // Which route should receive this payload?
  // What should the page show when the request fails?
  // What should the page do next when the request succeeds?
});

loadIssues();
