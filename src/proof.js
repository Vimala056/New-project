/**
 * Job Notification Tracker — Proof & Submission
 * Persists: jobTrackerProof { lovableLink, githubLink, deployedLink }
 */

const PROOF_KEY = "jobTrackerProof";

const URL_REGEX = /^https?:\/\/.+/i;

export function isValidUrl(str) {
  if (!str || typeof str !== "string") return false;
  const trimmed = str.trim();
  if (!trimmed) return false;
  try {
    new URL(trimmed);
    return URL_REGEX.test(trimmed);
  } catch {
    return false;
  }
}

export function getProof() {
  try {
    const raw = localStorage.getItem(PROOF_KEY);
    return raw ? JSON.parse(raw) : { lovableLink: "", githubLink: "", deployedLink: "" };
  } catch {
    return { lovableLink: "", githubLink: "", deployedLink: "" };
  }
}

export function setProofLink(key, value) {
  const proof = getProof();
  proof[key] = (value || "").trim();
  localStorage.setItem(PROOF_KEY, JSON.stringify(proof));
}

export function hasAllArtifacts() {
  const p = getProof();
  return isValidUrl(p.lovableLink) && isValidUrl(p.githubLink) && isValidUrl(p.deployedLink);
}
