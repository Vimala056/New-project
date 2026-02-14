/**
 * Job Notification Tracker — Daily Digest Engine
 * Persists per day: jobTrackerDigest_{YYYY-MM-DD}
 */

import { JOBS } from "./data/jobs.js";
import { getPreferences, hasPreferences } from "./preferences.js";
import { computeMatchScore } from "./matchScore.js";

export function getDigestKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `jobTrackerDigest_${y}-${m}-${d}`;
}

export function getTodayDigest() {
  const key = getDigestKey();
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function generateDigest() {
  if (!hasPreferences()) return null;

  const key = getDigestKey();
  const existing = getTodayDigest();
  if (existing) return existing;

  const prefs = getPreferences();
  const jobsWithScore = JOBS.map((j) => ({
    ...j,
    matchScore: computeMatchScore(j, prefs),
  }));

  const sorted = [...jobsWithScore].sort((a, b) => {
    const scoreDiff = (b.matchScore ?? 0) - (a.matchScore ?? 0);
    if (scoreDiff !== 0) return scoreDiff;
    return (a.postedDaysAgo ?? 999) - (b.postedDaysAgo ?? 999);
  });

  const top10 = sorted.slice(0, 10);
  const digest = {
    date: new Date().toISOString().slice(0, 10),
    generatedAt: new Date().toISOString(),
    jobs: top10,
  };

  localStorage.setItem(key, JSON.stringify(digest));
  return digest;
}

export function formatDigestPlainText(digest) {
  if (!digest || !digest.jobs?.length) return "";

  const lines = [
    "Top 10 Jobs For You — 9AM Digest",
    digest.date,
    "",
    ...digest.jobs.map((j, i) => {
      return [
        `${i + 1}. ${j.title}`,
        `   Company: ${j.company}`,
        `   Location: ${j.location} | Experience: ${j.experience} | Match: ${j.matchScore ?? 0}%`,
        `   Apply: ${j.applyUrl}`,
        "",
      ].join("\n");
    }),
    "This digest was generated based on your preferences.",
  ];

  return lines.join("\n");
}
