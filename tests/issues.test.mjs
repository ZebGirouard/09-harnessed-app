const baseUrl = process.env.BASE_URL || "http://localhost:3002";

async function assertJson(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  return { response, data };
}

async function run() {
  const getResult = await assertJson(`${baseUrl}/api/issues`);

  if (!Array.isArray(getResult.data)) {
    throw new Error("GET /api/issues should return an array");
  }

  const postResult = await assertJson(`${baseUrl}/api/issues`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Test issue", status: "todo" })
  });

  if (postResult.response.status !== 201) {
    throw new Error("POST /api/issues should return 201");
  }

  if (!postResult.data.title) {
    throw new Error("POST /api/issues should return the created issue");
  }

  console.log("Issue harness checks passed.");
}

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
