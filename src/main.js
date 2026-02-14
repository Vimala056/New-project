/**
 * Job Notification Tracker — Premium SaaS
 * Preferences, Match Scoring, Filters, Dashboard, Saved
 */

import { JOBS } from "./data/jobs.js";
import { getPreferences, savePreferences, hasPreferences } from "./preferences.js";
import { computeMatchScore } from "./matchScore.js";
import {
  getTodayDigest,
  generateDigest,
  formatDigestPlainText,
} from "./digest.js";
import { getJobStatus, setJobStatus, getRecentStatusUpdates, getStatusMap } from "./status.js";
import {
  TEST_ITEMS,
  isTestChecked,
  setTestChecked,
  getTestsPassedCount,
  areAllTestsPassed,
  resetTestStatus,
} from "./testChecklist.js";
import { getProof, setProofLink, isValidUrl, hasAllArtifacts } from "./proof.js";

const STORAGE_KEY = "job-tracker-saved";

const STATUS_OPTIONS = ["Not Applied", "Applied", "Rejected", "Selected"];

const ROUTES = [
  { path: "/", title: "Home" },
  { path: "/dashboard", title: "Dashboard" },
  { path: "/saved", title: "Saved" },
  { path: "/digest", title: "Digest" },
  { path: "/settings", title: "Settings" },
  { path: "/proof", title: "Proof" },
];

const LOCATIONS = getUniqueValues(JOBS, "location");
const MODES = ["Remote", "Hybrid", "Onsite"];
const EXPERIENCE_LEVELS = ["Fresher", "0-1", "1-3", "3-5"];

// ─── Saved Jobs ───

function getSavedIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveJob(id) {
  const ids = getSavedIds();
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }
}

function unsaveJob(id) {
  const ids = getSavedIds().filter((i) => i !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

// ─── Helpers ───

function formatPosted(days) {
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

function getUniqueValues(jobs, key) {
  const set = new Set(jobs.map((j) => j[key]).filter(Boolean));
  return [...set].sort();
}

function extractSalaryNumeric(salaryRange) {
  if (!salaryRange) return 0;
  const match = salaryRange.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

// ─── Filter & Sort (AND behavior) ───

function applyFilters(jobsWithScore, filters, prefs) {
  let result = [...jobsWithScore];

  if (filters.keyword) {
    const k = filters.keyword.toLowerCase();
    result = result.filter(
      (j) =>
        j.title.toLowerCase().includes(k) || j.company.toLowerCase().includes(k)
    );
  }
  if (filters.location)
    result = result.filter((j) => j.location === filters.location);
  if (filters.mode) result = result.filter((j) => j.mode === filters.mode);
  if (filters.experience)
    result = result.filter((j) => j.experience === filters.experience);
  if (filters.source)
    result = result.filter((j) => j.source === filters.source);

  if (filters.status) {
    const statusMap = {};
    result.forEach((j) => {
      statusMap[j.id] = getJobStatus(j.id);
    });
    result = result.filter((j) => statusMap[j.id] === filters.status);
  }

  if (filters.onlyMatches && prefs) {
    const threshold = prefs.minMatchScore ?? 40;
    result = result.filter((j) => (j.matchScore ?? 0) >= threshold);
  }

  const sort = filters.sort || "Latest";
  if (sort === "Latest") {
    result.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
  } else if (sort === "Oldest") {
    result.sort((a, b) => b.postedDaysAgo - a.postedDaysAgo);
  } else if (sort === "Match Score") {
    result.sort((a, b) => (b.matchScore ?? 0) - (a.matchScore ?? 0));
  } else if (sort === "Salary") {
    result.sort(
      (a, b) =>
        extractSalaryNumeric(b.salaryRange) - extractSalaryNumeric(a.salaryRange)
    );
  }

  return result;
}

// ─── Page Renderers ───

function renderLanding() {
  return `
    <div class="app-page app-page--landing">
      <h1 class="app-page__heading">Stop Missing The Right Jobs.</h1>
      <p class="app-page__subtext">Precision-matched job discovery delivered daily at 9AM.</p>
      <a href="/settings" class="kodnest-btn kodnest-btn--primary app-page__cta">Start Tracking</a>
    </div>
  `;
}

function renderSettings(prefs) {
  const p = prefs || {};
  const roleKeywords = escapeHtml(p.roleKeywords || "");
  const skills = escapeHtml(p.skills || "");
  const experienceLevel = p.experienceLevel || "";
  const minMatchScore = p.minMatchScore ?? 40;
  const preferredLocations = p.preferredLocations || [];
  const preferredMode = p.preferredMode || [];

  return `
    <div class="app-page app-page--settings">
      <h1 class="app-page__heading">Settings</h1>
      <p class="app-page__subtext">Configure your job preferences.</p>
      <div class="app-settings">
        <div class="app-settings__field">
          <label class="app-settings__label">Role keywords</label>
          <input type="text" class="kodnest-input app-settings__role-keywords" placeholder="e.g. React, Backend, SDE" value="${roleKeywords}">
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Preferred locations</label>
          <select multiple class="kodnest-input app-settings__locations" size="5">
            ${LOCATIONS.map(
              (l) =>
                `<option value="${escapeHtml(l)}" ${preferredLocations.includes(l) ? "selected" : ""}>${escapeHtml(l)}</option>`
            ).join("")}
          </select>
          <span class="app-settings__hint">Hold Ctrl/Cmd to select multiple</span>
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Preferred mode</label>
          <div class="app-settings__checkboxes">
            ${MODES.map(
              (m) => `
              <label class="app-settings__checkbox">
                <input type="checkbox" value="${m}" ${preferredMode.includes(m) ? "checked" : ""}>
                <span>${m}</span>
              </label>
            `
            ).join("")}
          </div>
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Experience level</label>
          <select class="kodnest-input app-settings__experience">
            <option value="">Select</option>
            ${EXPERIENCE_LEVELS.map(
              (e) =>
                `<option value="${e}" ${experienceLevel === e ? "selected" : ""}>${e}</option>`
            ).join("")}
          </select>
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Skills</label>
          <input type="text" class="kodnest-input app-settings__skills" placeholder="e.g. Java, Python, React" value="${skills}">
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label" id="min-match-label">Min match score (${minMatchScore})</label>
          <input type="range" class="app-settings__slider" min="0" max="100" value="${minMatchScore}">
        </div>
        <button type="button" class="kodnest-btn kodnest-btn--primary app-settings__save">Save Preferences</button>
      </div>
    </div>
  `;
}

function getMatchScoreClass(score) {
  if (score >= 80) return "match-score--high";
  if (score >= 60) return "match-score--medium";
  if (score >= 40) return "match-score--neutral";
  return "match-score--low";
}

function renderJobCard(job, isSaved, matchScore) {
  const score = matchScore ?? 0;
  const scoreClass = getMatchScoreClass(score);
  const scoreBadge =
    matchScore !== undefined
      ? `<span class="job-card__match ${scoreClass}">${score}% match</span>`
      : "";
  const status = getJobStatus(job.id);
  const statusClass = getStatusBadgeClass(status);

  return `
    <article class="job-card kodnest-card" data-job-id="${job.id}">
      <div class="job-card__header">
        <h3 class="job-card__title">${escapeHtml(job.title)}</h3>
        <div class="job-card__badges">
          ${scoreBadge}
          <span class="job-card__source">${escapeHtml(job.source)}</span>
        </div>
      </div>
      <p class="job-card__company">${escapeHtml(job.company)}</p>
      <p class="job-card__meta">
        ${escapeHtml(job.location)} · ${escapeHtml(job.mode)} · ${escapeHtml(job.experience)}
      </p>
      <p class="job-card__salary">${escapeHtml(job.salaryRange)}</p>
      <p class="job-card__posted">${formatPosted(job.postedDaysAgo)}</p>
      <div class="job-card__status">
        <label class="job-card__status-label">Status:</label>
        <select class="kodnest-input job-card__status-select ${statusClass}" data-status-for="${job.id}">
          ${STATUS_OPTIONS.map((s) => `<option value="${escapeHtml(s)}" ${status === s ? "selected" : ""}>${s}</option>`).join("")}
        </select>
      </div>
      <div class="job-card__actions">
        <button type="button" class="kodnest-btn kodnest-btn--secondary job-action" data-action="view" data-id="${job.id}">View</button>
        <button type="button" class="kodnest-btn kodnest-btn--secondary job-action" data-action="${isSaved ? "unsave" : "save"}" data-id="${job.id}">${isSaved ? "Unsave" : "Save"}</button>
        <a href="${escapeHtml(job.applyUrl)}" target="_blank" rel="noopener" class="kodnest-btn kodnest-btn--primary job-action job-action--apply">Apply</a>
      </div>
    </article>
  `;
}

function getStatusBadgeClass(status) {
  if (status === "Applied") return "status--applied";
  if (status === "Rejected") return "status--rejected";
  if (status === "Selected") return "status--selected";
  return "status--neutral";
}

function renderFilterBar(filters, options) {
  const locs = options.locations;
  const sources = ["LinkedIn", "Naukri", "Indeed"];

  return `
    <div class="filter-bar">
      <input type="text" class="kodnest-input filter-bar__search" placeholder="Search title or company" value="${escapeHtml(filters.keyword || "")}">
      <select class="kodnest-input filter-bar__select" data-filter="location">
        <option value="">All locations</option>
        ${locs.map((l) => `<option value="${escapeHtml(l)}" ${filters.location === l ? "selected" : ""}>${escapeHtml(l)}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="mode">
        <option value="">All modes</option>
        ${MODES.map((m) => `<option value="${m}" ${filters.mode === m ? "selected" : ""}>${m}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="experience">
        <option value="">All experience</option>
        ${EXPERIENCE_LEVELS.map((e) => `<option value="${e}" ${filters.experience === e ? "selected" : ""}>${e}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="source">
        <option value="">All sources</option>
        ${sources.map((s) => `<option value="${s}" ${filters.source === s ? "selected" : ""}>${s}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="status">
        <option value="">All</option>
        ${STATUS_OPTIONS.map((s) => `<option value="${s}" ${filters.status === s ? "selected" : ""}>${s}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="sort">
        <option value="Latest" ${filters.sort === "Latest" ? "selected" : ""}>Latest</option>
        <option value="Oldest" ${filters.sort === "Oldest" ? "selected" : ""}>Oldest</option>
        <option value="Match Score" ${filters.sort === "Match Score" ? "selected" : ""}>Match Score</option>
        <option value="Salary" ${filters.sort === "Salary" ? "selected" : ""}>Salary</option>
      </select>
    </div>
  `;
}

function renderDashboard(filters = {}) {
  const prefs = getPreferences();
  const savedIds = getSavedIds();
  const options = { locations: LOCATIONS };

  const jobsWithScore = JOBS.map((j) => ({
    ...j,
    matchScore: computeMatchScore(j, prefs),
  }));

  const filtered = applyFilters(
    jobsWithScore,
    { sort: "Latest", ...filters },
    prefs
  );

  const showBanner = !hasPreferences();
  const emptyMessage = filtered.length === 0
    ? "No roles match your criteria. Adjust filters or lower threshold."
    : null;

  return `
    <div class="app-page app-page--dashboard">
      <h1 class="app-page__heading">Dashboard</h1>
      ${showBanner ? '<div class="app-banner">Set your preferences to activate intelligent matching.</div>' : ""}
      ${renderFilterBar(filters, options)}
      <label class="app-toggle">
        <input type="checkbox" class="app-toggle__input" data-toggle="onlyMatches" ${filters.onlyMatches ? "checked" : ""}>
        <span class="app-toggle__label">Show only jobs above my threshold</span>
      </label>
      <div class="job-grid" id="job-grid">
        ${filtered.length
          ? filtered
              .map((j) => renderJobCard(j, savedIds.includes(j.id), j.matchScore))
              .join("")
          : `<div class="kodnest-empty"><p class="kodnest-empty__message">${emptyMessage || "No jobs match your filters."}</p></div>`}
      </div>
    </div>
  `;
}

function renderSaved() {
  const savedIds = getSavedIds();
  const savedJobs = JOBS.filter((j) => savedIds.includes(j.id));
  const prefs = getPreferences();

  return `
    <div class="app-page app-page--saved">
      <h1 class="app-page__heading">Saved</h1>
      ${
        savedJobs.length
          ? `<div class="job-grid">${savedJobs
              .map((j) =>
                renderJobCard(j, true, computeMatchScore(j, prefs))
              )
              .join("")}</div>`
          : `<div class="kodnest-empty"><p class="kodnest-empty__message">Saved jobs will appear here once you start tracking.</p></div>`
      }
    </div>
  `;
}

function formatDigestDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderDigest() {
  const prefsExist = hasPreferences();
  let digest = getTodayDigest();

  if (!prefsExist) {
    return `
      <div class="app-page app-page--digest">
        <h1 class="app-page__heading">Digest</h1>
        <div class="digest-block">
          <p class="digest-block__message">Set preferences to generate a personalized digest.</p>
          <a href="/settings" class="kodnest-btn kodnest-btn--primary">Go to Settings</a>
        </div>
      </div>
    `;
  }

  const showGenerateButton = !digest;
  const jobs = digest?.jobs ?? [];
  const noMatches = digest && jobs.length === 0;

  if (showGenerateButton) {
    const statusUpdates = getRecentStatusUpdates(buildJobsById());
    const statusUpdatesHtml = renderRecentStatusUpdates(statusUpdates);
    return `
      <div class="app-page app-page--digest">
        <h1 class="app-page__heading">Digest</h1>
        <p class="app-page__subtext">Generate your personalized daily job digest.</p>
        ${statusUpdatesHtml}
        <button type="button" class="kodnest-btn kodnest-btn--primary digest-generate">
          Generate Today's 9AM Digest (Simulated)
        </button>
        <p class="digest-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
      </div>
    `;
  }

  if (noMatches) {
    const statusUpdates = getRecentStatusUpdates(buildJobsById());
    const statusUpdatesHtml = renderRecentStatusUpdates(statusUpdates);
    return `
      <div class="app-page app-page--digest">
        <h1 class="app-page__heading">Digest</h1>
        ${statusUpdatesHtml}
        <div class="digest-card">
          <div class="digest-empty">
            <p class="digest-empty__message">No matching roles today. Check again tomorrow.</p>
          </div>
        </div>
        <p class="digest-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
      </div>
    `;
  }

  const todayFormatted = formatDigestDate(digest.date);
  const statusUpdates = getRecentStatusUpdates(buildJobsById());
  const statusUpdatesHtml = renderRecentStatusUpdates(statusUpdates);

  return `
    <div class="app-page app-page--digest">
      <h1 class="app-page__heading">Digest</h1>
      ${statusUpdatesHtml}
      <div class="digest-card">
        <header class="digest-header">
          <h2 class="digest-header__title">Top 10 Jobs For You — 9AM Digest</h2>
          <p class="digest-header__date">${escapeHtml(todayFormatted)}</p>
        </header>
        <div class="digest-jobs">
          ${jobs
            .map(
              (j) => `
            <div class="digest-job">
              <div class="digest-job__main">
                <h3 class="digest-job__title">${escapeHtml(j.title)}</h3>
                <p class="digest-job__company">${escapeHtml(j.company)}</p>
                <p class="digest-job__meta">${escapeHtml(j.location)} · ${escapeHtml(j.experience)}</p>
                <span class="digest-job__score match-score--${getMatchScoreTier(j.matchScore ?? 0)}">${j.matchScore ?? 0}% match</span>
              </div>
              <a href="${escapeHtml(j.applyUrl)}" target="_blank" rel="noopener" class="kodnest-btn kodnest-btn--primary digest-job__apply">Apply</a>
            </div>
          `
            )
            .join("")}
        </div>
        <footer class="digest-footer">
          This digest was generated based on your preferences.
        </footer>
      </div>
      <div class="digest-actions">
        <button type="button" class="kodnest-btn kodnest-btn--secondary digest-copy">Copy Digest to Clipboard</button>
        <a href="#" class="kodnest-btn kodnest-btn--secondary digest-email" data-digest-email>Create Email Draft</a>
      </div>
      <p class="digest-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
    </div>
  `;
}

function getMatchScoreTier(score) {
  if (score >= 80) return "high";
  if (score >= 60) return "medium";
  if (score >= 40) return "neutral";
  return "low";
}

function buildJobsById() {
  const map = {};
  JOBS.forEach((j) => {
    map[j.id] = j;
  });
  return map;
}

function formatStatusUpdateDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function renderRecentStatusUpdates(updates) {
  if (!updates || updates.length === 0) return "";

  return `
    <div class="digest-status-updates digest-card">
      <h3 class="digest-status-updates__title">Recent Status Updates</h3>
      <ul class="digest-status-updates__list">
        ${updates
          .slice(0, 10)
          .map(
            (u) => `
          <li class="digest-status-updates__item">
            <span class="digest-status-updates__job">${escapeHtml(u.title || "Job")} at ${escapeHtml(u.company || "")}</span>
            <span class="digest-status-updates__status status-badge status-badge--${getStatusBadgeClass(u.status)}">${escapeHtml(u.status)}</span>
            <span class="digest-status-updates__date">${escapeHtml(formatStatusUpdateDate(u.dateChanged))}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;
}

const PROOF_STEPS = [
  { id: "s1", label: "Preferences configured", check: () => hasPreferences() },
  { id: "s2", label: "Match score active", check: () => hasPreferences() },
  { id: "s3", label: "Jobs displayed", check: () => true },
  { id: "s4", label: "Save job works", check: () => getSavedIds().length > 0 },
  {
    id: "s5",
    label: "Status tracking",
    check: () => Object.values(getStatusMap()).some((s) => s !== "Not Applied"),
  },
  { id: "s6", label: "Digest generated", check: () => !!getTodayDigest() },
  { id: "s7", label: "Test checklist complete", check: () => areAllTestsPassed() },
  { id: "s8", label: "Artifacts submitted", check: () => hasAllArtifacts() },
];

function getProjectShipStatus() {
  const testsOk = areAllTestsPassed();
  const artifactsOk = hasAllArtifacts();
  if (testsOk && artifactsOk) return "Shipped";
  const proof = getProof();
  const hasAnyLink = !!(proof.lovableLink?.trim() || proof.githubLink?.trim() || proof.deployedLink?.trim());
  if (testsOk || artifactsOk || hasAnyLink) return "In Progress";
  return "Not Started";
}

function renderProof() {
  return `
    <div class="app-page app-page--proof">
      <h1 class="app-page__heading">Proof</h1>
      <p class="app-page__subtext">Placeholder for artifact collection.</p>
    </div>
  `;
}

function renderJtProof() {
  const proof = getProof();

  return `
    <div class="app-page app-page--jt-proof">
      <h1 class="app-page__heading">Project 1 — Job Notification Tracker</h1>

      <section class="proof-section digest-card">
        <h2 class="proof-section__title">A) Step Completion Summary</h2>
        <ul class="proof-steps">
          ${PROOF_STEPS.map(
            (s) => `
            <li class="proof-step">
              <span class="proof-step__status ${s.check() ? "proof-step__status--done" : ""}">${s.check() ? "Completed" : "Pending"}</span>
              <span class="proof-step__label">${escapeHtml(s.label)}</span>
            </li>
          `
          ).join("")}
        </ul>
      </section>

      <section class="proof-section digest-card">
        <h2 class="proof-section__title">B) Artifact Collection</h2>
        <div class="proof-artifacts">
          <div class="app-settings__field">
            <label class="app-settings__label">Lovable Project Link</label>
            <input type="url" class="kodnest-input proof-input ${proof.lovableLink && !isValidUrl(proof.lovableLink) ? "proof-input--invalid" : ""}" data-proof-key="lovableLink" placeholder="https://..." value="${escapeHtml(proof.lovableLink)}">
          </div>
          <div class="app-settings__field">
            <label class="app-settings__label">GitHub Repository Link</label>
            <input type="url" class="kodnest-input proof-input ${proof.githubLink && !isValidUrl(proof.githubLink) ? "proof-input--invalid" : ""}" data-proof-key="githubLink" placeholder="https://github.com/..." value="${escapeHtml(proof.githubLink)}">
          </div>
          <div class="app-settings__field">
            <label class="app-settings__label">Deployed URL (Vercel or equivalent)</label>
            <input type="url" class="kodnest-input proof-input ${proof.deployedLink && !isValidUrl(proof.deployedLink) ? "proof-input--invalid" : ""}" data-proof-key="deployedLink" placeholder="https://..." value="${escapeHtml(proof.deployedLink)}">
          </div>
        </div>
        <button type="button" class="kodnest-btn kodnest-btn--primary proof-copy-submission">Copy Final Submission</button>
      </section>
    </div>
  `;
}

function renderTestChecklist() {
  const passed = getTestsPassedCount();
  const total = TEST_ITEMS.length;
  const allPassed = passed === total;

  return `
    <div class="app-page app-page--test">
      <h1 class="app-page__heading">Built-In Test Checklist</h1>
      <div class="test-summary ${allPassed ? "" : "test-summary--warning"}">
        <span class="test-summary__count">Tests Passed: ${passed} / ${total}</span>
        ${!allPassed ? '<p class="test-summary__warning">Resolve all issues before shipping.</p>' : ""}
      </div>
      <button type="button" class="kodnest-btn kodnest-btn--secondary test-reset">Reset Test Status</button>
      <div class="test-checklist kodnest-card">
        ${TEST_ITEMS.map(
          (item) => `
          <label class="test-item">
            <input type="checkbox" class="test-item__checkbox" data-test-id="${item.id}" ${isTestChecked(item.id) ? "checked" : ""}>
            <span class="test-item__label">${escapeHtml(item.label)}</span>
            ${item.howTo ? `<span class="test-item__tooltip" title="${escapeHtml(item.howTo)}">?</span>` : ""}
          </label>
        `
        ).join("")}
      </div>
    </div>
  `;
}

function formatFinalSubmission() {
  const proof = getProof();
  return `------------------------------------------
Job Notification Tracker — Final Submission

Lovable Project:
${proof.lovableLink || ""}

GitHub Repository:
${proof.githubLink || ""}

Live Deployment:
${proof.deployedLink || ""}

Core Features:
- Intelligent match scoring
- Daily digest simulation
- Status tracking
- Test checklist enforced
------------------------------------------`;
}

function renderShip() {
  const status = getProjectShipStatus();
  const isShipped = status === "Shipped";
  const canUnlock = isShipped;

  if (!canUnlock) {
    const missing = [];
    if (!areAllTestsPassed()) missing.push("all 10 tests");
    if (!hasAllArtifacts()) missing.push("all 3 artifact links");
    const message = missing.length
      ? `Complete ${missing.join(" and ")} to unlock Ship.`
      : "Complete all 10 tests and provide all 3 artifact links to unlock Ship.";

    return `
      <div class="app-page app-page--ship">
        <h1 class="app-page__heading">Ship</h1>
        <div class="ship-status-badge ship-status-badge--${status.toLowerCase().replace(" ", "-")}">${status}</div>
        <div class="ship-locked digest-card">
          <p class="ship-locked__message">${escapeHtml(message)}</p>
          <a href="/jt/07-test" class="kodnest-btn kodnest-btn--secondary ship-locked__link">Test Checklist</a>
          <a href="/jt/proof" class="kodnest-btn kodnest-btn--primary ship-locked__link">Proof & Artifacts</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="app-page app-page--ship">
      <h1 class="app-page__heading">Ship</h1>
      <div class="ship-status-badge ship-status-badge--shipped">${status}</div>
      <div class="digest-card">
        <p class="ship-success">Project 1 Shipped Successfully.</p>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast--visible");
  }, 10);
  setTimeout(() => {
    toast.classList.remove("toast--visible");
    setTimeout(() => toast.remove(), 200);
  }, 2500);
}

// ─── Modal ───

function showModal(job) {
  const skills = job.skills ? job.skills.join(", ") : "";
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal__header">
        <h2 id="modal-title" class="modal__title">${escapeHtml(job.title)}</h2>
        <button type="button" class="modal__close" aria-label="Close">&times;</button>
      </div>
      <p class="modal__company">${escapeHtml(job.company)}</p>
      ${skills ? `<p class="modal__skills"><strong>Skills:</strong> ${escapeHtml(skills)}</p>` : ""}
      <div class="modal__description">${escapeHtml(job.description)}</div>
    </div>
  `;

  function close() {
    modal.remove();
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".modal__close")) close();
  });
  document.addEventListener("keydown", function onEsc(e) {
    if (e.key === "Escape") {
      close();
      document.removeEventListener("keydown", onEsc);
    }
  });

  document.body.style.overflow = "hidden";
  document.body.appendChild(modal);
}

// ─── Routing ───

const PAGE_RENDERERS = {
  "/": renderLanding,
  "/dashboard": renderDashboard,
  "/saved": renderSaved,
  "/digest": renderDigest,
  "/settings": () => renderSettings(getPreferences()),
  "/proof": renderProof,
  "/jt/07-test": renderTestChecklist,
  "/jt/08-ship": renderShip,
  "/jt/proof": renderJtProof,
};

let dashboardFilters = {};

function getPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function renderPage(path) {
  const main = document.getElementById("main-content");
  if (path === "/dashboard") {
    main.innerHTML = renderDashboard(dashboardFilters);
    attachDashboardListeners(main);
  } else if (path === "/settings") {
    main.innerHTML = renderSettings(getPreferences());
    attachSettingsListeners(main);
  } else {
    const renderer = PAGE_RENDERERS[path] || renderLanding;
    main.innerHTML = renderer();
    if (path === "/saved") attachSavedListeners(main);
    if (path === "/digest") attachDigestListeners(main);
    if (path === "/jt/07-test") attachTestChecklistListeners(main);
    if (path === "/jt/proof") attachJtProofListeners(main);
  }
}

function attachSettingsListeners(main) {
  const saveBtn = main.querySelector(".app-settings__save");
  if (!saveBtn) return;

  saveBtn.addEventListener("click", () => {
    const roleKeywords = main.querySelector(".app-settings__role-keywords")?.value ?? "";
    const skills = main.querySelector(".app-settings__skills")?.value ?? "";
    const experienceLevel = main.querySelector(".app-settings__experience")?.value ?? "";
    const slider = main.querySelector(".app-settings__slider");
    const minMatchScore = slider ? parseInt(slider.value, 10) : 40;

    const locationsEl = main.querySelector(".app-settings__locations");
    const preferredLocations = locationsEl
      ? [...locationsEl.selectedOptions].map((o) => o.value)
      : [];

    const preferredMode = [];
    main.querySelectorAll(".app-settings__checkbox input:checked").forEach((cb) => {
      preferredMode.push(cb.value);
    });

    savePreferences({
      roleKeywords,
      preferredLocations,
      preferredMode,
      experienceLevel,
      skills,
      minMatchScore,
    });

    saveBtn.textContent = "Saved";
    saveBtn.disabled = true;
    setTimeout(() => {
      saveBtn.textContent = "Save Preferences";
      saveBtn.disabled = false;
    }, 1500);
  });

  const slider = main.querySelector(".app-settings__slider");
  const sliderLabel = main.querySelector("#min-match-label");
  if (slider && sliderLabel) {
    slider.addEventListener("input", (e) => {
      sliderLabel.textContent = `Min match score (${e.target.value})`;
    });
  }
}

function attachDashboardListeners(main) {
  const debouncedSearch = debounce((value) => {
    dashboardFilters.keyword = value.trim() || undefined;
    renderPage("/dashboard");
  }, 300);
  main.querySelectorAll(".filter-bar__search").forEach((el) => {
    el.addEventListener("input", (e) => debouncedSearch(e.target.value));
  });
  main.querySelectorAll(".filter-bar__select").forEach((el) => {
    el.addEventListener("change", (e) => {
      const key = el.dataset.filter;
      dashboardFilters[key] = el.value || undefined;
      renderPage("/dashboard");
    });
  });

  main.querySelectorAll(".app-toggle__input").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      dashboardFilters.onlyMatches = e.target.checked;
      renderPage("/dashboard");
    });
  });

  main.querySelectorAll(".job-action[data-action='view']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const job = JOBS.find((j) => j.id === btn.dataset.id);
      if (job) showModal(job);
    });
  });
  main.querySelectorAll(".job-action[data-action='save'], .job-action[data-action='unsave']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if (btn.dataset.action === "save") saveJob(id);
      else unsaveJob(id);
      renderPage("/dashboard");
      attachDashboardListeners(document.getElementById("main-content"));
    });
  });

  main.querySelectorAll(".job-card__status-select").forEach((el) => {
    el.addEventListener("change", (e) => {
      const jobId = el.dataset.statusFor;
      const status = e.target.value;
      const job = JOBS.find((j) => j.id === jobId);
      setJobStatus(jobId, status, job);
      if (status === "Applied" || status === "Rejected" || status === "Selected") {
        showToast(`Status updated: ${status}`);
      }
      renderPage("/dashboard");
      attachDashboardListeners(document.getElementById("main-content"));
    });
  });
}

function attachDigestListeners(main) {
  const generateBtn = main.querySelector(".digest-generate");
  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      const digest = generateDigest();
      renderPage("/digest");
      attachDigestListeners(document.getElementById("main-content"));
    });
  }

  const copyBtn = main.querySelector(".digest-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const digest = getTodayDigest();
      const text = formatDigestPlainText(digest);
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied";
        setTimeout(() => {
          copyBtn.textContent = "Copy Digest to Clipboard";
        }, 2000);
      } catch {
        copyBtn.textContent = "Copy failed";
        setTimeout(() => {
          copyBtn.textContent = "Copy Digest to Clipboard";
        }, 2000);
      }
    });
  }

  const emailLink = main.querySelector("[data-digest-email]");
  if (emailLink) {
    const digest = getTodayDigest();
    const body = encodeURIComponent(formatDigestPlainText(digest));
    const subject = encodeURIComponent("My 9AM Job Digest");
    emailLink.href = `mailto:?subject=${subject}&body=${body}`;
  }
}

function attachJtProofListeners(main) {
  main.querySelectorAll(".proof-input").forEach((input) => {
    const key = input.dataset.proofKey;
    if (!key) return;
    input.addEventListener("blur", () => {
      setProofLink(key, input.value);
      renderPage("/jt/proof");
      attachJtProofListeners(document.getElementById("main-content"));
    });
  });

  const copyBtn = main.querySelector(".proof-copy-submission");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const text = formatFinalSubmission();
      try {
        await navigator.clipboard.writeText(text);
        showToast("Final submission copied to clipboard.");
      } catch {
        showToast("Copy failed.");
      }
    });
  }
}

function attachTestChecklistListeners(main) {
  main.querySelectorAll(".test-item__checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      setTestChecked(e.target.dataset.testId, e.target.checked);
      renderPage("/jt/07-test");
      attachTestChecklistListeners(document.getElementById("main-content"));
    });
  });

  const resetBtn = main.querySelector(".test-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetTestStatus();
      renderPage("/jt/07-test");
      attachTestChecklistListeners(document.getElementById("main-content"));
    });
  }
}

function attachSavedListeners(main) {
  main.querySelectorAll(".job-action[data-action='view']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const job = JOBS.find((j) => j.id === btn.dataset.id);
      if (job) showModal(job);
    });
  });
  main.querySelectorAll(".job-action[data-action='unsave']").forEach((btn) => {
    btn.addEventListener("click", () => {
      unsaveJob(btn.dataset.id);
      renderPage("/saved");
      attachSavedListeners(document.getElementById("main-content"));
    });
  });

  main.querySelectorAll(".job-card__status-select").forEach((el) => {
    el.addEventListener("change", (e) => {
      const jobId = el.dataset.statusFor;
      const status = e.target.value;
      const job = JOBS.find((j) => j.id === jobId);
      setJobStatus(jobId, status, job);
      if (status === "Applied" || status === "Rejected" || status === "Selected") {
        showToast(`Status updated: ${status}`);
      }
      renderPage("/saved");
      attachSavedListeners(document.getElementById("main-content"));
    });
  });
}

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

function updateNav(path) {
  document.querySelectorAll(".app-nav__link[data-route]").forEach((link) => {
    const linkPath = (link.getAttribute("data-route") || "/").replace(/\/$/, "") || "/";
    link.classList.toggle("active", linkPath === path);
  });
}

function navigate(path) {
  history.pushState({ path }, "", path || "/");
  renderPage(path);
  updateNav(path);
}

function handleNavClick(e) {
  const link = e.target.closest(".app-nav a[href^='/']");
  if (!link) return;
  e.preventDefault();
  let path = (link.getAttribute("href") || "/").replace(/\/$/, "") || "/";
  if (path === "/jt/08-ship" && getProjectShipStatus() !== "Shipped") {
    showToast("Complete all 10 tests and all 3 artifact links to unlock Ship.");
    return;
  }
  navigate(path);
  closeMobileMenu();
}

function closeMobileMenu() {
  const toggle = document.querySelector(".app-nav__toggle");
  const links = document.querySelector(".app-nav__links");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
  if (links) links.classList.remove("is-open");
}

function handleToggleClick() {
  const toggle = document.querySelector(".app-nav__toggle");
  const links = document.querySelector(".app-nav__links");
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !isOpen);
  links.classList.toggle("is-open", !isOpen);
}

function handleContentClick(e) {
  const link = e.target.closest("#main-content a[href^='/']");
  if (!link || link.classList.contains("job-action--apply")) return;
  e.preventDefault();
  let path = (link.getAttribute("href") || "/").replace(/\/$/, "") || "/";
  if (path === "/jt/08-ship" && getProjectShipStatus() !== "Shipped") {
    showToast("Complete all 10 tests and all 3 artifact links to unlock Ship.");
    return;
  }
  navigate(path);
}

function init() {
  const path = getPath();
  renderPage(path);
  updateNav(path);

  document.querySelector(".app-nav")?.addEventListener("click", handleNavClick);
  document.getElementById("main-content")?.addEventListener("click", handleContentClick);
  document.querySelector(".app-nav__toggle")?.addEventListener("click", handleToggleClick);

  window.addEventListener("popstate", (e) => {
    const path = e.state?.path ?? getPath();
    renderPage(path);
    updateNav(path);
  });
}

init();
