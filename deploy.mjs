import { privateKeyToAccount } from "viem/accounts";
import { readFileSync, statSync } from "fs";
import { join, relative } from "path";
import { randomUUID } from "crypto";

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";
const BASE_URL = "https://mpp-createos.nodeops.network";
const UNIQUE_NAME = "test-saurabh-demo";
const DISPLAY_NAME = "Saurabh Portfolio";

const account = privateKeyToAccount(PRIVATE_KEY);
const wallet = account.address;

function getAuthHeaders() {
  const timestamp = Date.now().toString();
  const nonce = randomUUID();
  const message = `${wallet}:${timestamp}:${nonce}`;
  return account.signMessage({ message }).then((signature) => ({
    "X-Wallet-Address": wallet,
    "X-Signature": signature,
    "X-Timestamp": timestamp,
    "X-Nonce": nonce,
    "Content-Type": "application/json",
  }));
}

// Collect source files
import { readdirSync } from "fs";

const ROOT = process.cwd();
const EXCLUDE = ["node_modules", ".next", ".git", ".DS_Store", "deploy.mjs", ".env"];

function shouldExclude(filePath) {
  return EXCLUDE.some((ex) => filePath.includes(ex));
}

function collectFiles(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    const rel = relative(ROOT, full);
    if (shouldExclude(rel)) continue;
    if (entry.isDirectory()) {
      collectFiles(full, files);
    } else {
      // Skip large files (>5MB)
      const stat = statSync(full);
      if (stat.size > 5 * 1024 * 1024) continue;
      const content = readFileSync(full);
      files.push({ path: rel, content: content.toString("base64") });
    }
  }
  return files;
}

async function deploy() {
  console.log(`Collecting files from ${ROOT}...`);
  const files = collectFiles(ROOT);
  console.log(`Collected ${files.length} files`);

  const body = {
    uniqueName: UNIQUE_NAME,
    displayName: DISPLAY_NAME,
    upload: { type: "files", files },
  };

  // Step 1: Deploy with existing credits
  console.log(`\nDeploying "${UNIQUE_NAME}" with existing credits...`);
  const headers = await getAuthHeaders();
  headers["X-Use-Existing-Credits"] = "true";

  const res = await fetch(`${BASE_URL}/agent/deploy`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const data = await res.json();
  console.log(`Response ${res.status}:`, JSON.stringify(data, null, 2));

  if (res.status === 402) {
    console.error("\nDeployment requires payment. Details above.");
    process.exit(1);
  }

  if (!res.ok) {
    console.error("\nDeployment failed:", data);
    process.exit(1);
  }

  const { projectId, deploymentId } = data;
  console.log(`\nProject: ${projectId}`);
  console.log(`Deployment: ${deploymentId}`);

  // Step 2: Poll status
  console.log("\nPolling deployment status...");
  while (true) {
    await new Promise((r) => setTimeout(r, 5000));
    const pollHeaders = await getAuthHeaders();
    const statusRes = await fetch(
      `${BASE_URL}/agent/deploy/${projectId}/${deploymentId}/status`,
      { headers: pollHeaders }
    );
    const statusData = await statusRes.json();
    const status = statusData.deployment_status || statusData.status;
    console.log(`Status: ${status}`);

    if (status === "ready" || statusData.endpoint || statusData.url) {
      const url = statusData.endpoint || statusData.url;
      console.log(`\n✅ Deployed successfully!`);
      console.log(`🔗 ${url}`);
      break;
    }
    if (status === "failed") {
      console.error(`\n❌ Deployment failed:`, statusData.reason || "unknown");
      process.exit(1);
    }
  }
}

deploy().catch((e) => {
  console.error(e);
  process.exit(1);
});
