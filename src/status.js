/**
 * Job Notification Tracker — Job status tracking
 * Persists: jobTrackerStatus { [jobId]: status }
 * Status updates history: jobTrackerStatusUpdates [ { jobId, title, company, status, dateChanged } ]
 */

const STATUS_KEY = "jobTrackerStatus";
const UPDATES_KEY = "jobTrackerStatusUpdates";

const DEFAULT_STATUS = "Not Applied";

export function getStatusMap() {
  try {
    const raw = localStorage.getItem(STATUS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getJobStatus(jobId) {
  const map = getStatusMap();
  return map[jobId] ?? DEFAULT_STATUS;
}

export function setJobStatus(jobId, status, job = null) {
  const map = getStatusMap();
  map[jobId] = status;
  localStorage.setItem(STATUS_KEY, JSON.stringify(map));

  if (status !== DEFAULT_STATUS && (status === "Applied" || status === "Rejected" || status === "Selected")) {
    const updates = getStatusUpdates();
    updates.unshift({
      jobId,
      title: job?.title ?? "",
      company: job?.company ?? "",
      status,
      dateChanged: new Date().toISOString(),
    });
    localStorage.setItem(UPDATES_KEY, JSON.stringify(updates.slice(0, 50)));
  }
}

function getStatusUpdates() {
  try {
    const raw = localStorage.getItem(UPDATES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getRecentStatusUpdates(jobsById = {}) {
  const updates = getStatusUpdates();
  return updates.map((u) => ({
    ...u,
    title: u.title || jobsById[u.jobId]?.title,
    company: u.company || jobsById[u.jobId]?.company,
  }));
}
