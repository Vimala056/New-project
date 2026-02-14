/**
 * Job Notification Tracker — Built-In Test Checklist
 * Persists: jobTrackerTestChecklist { [testId]: boolean }
 */

const CHECKLIST_KEY = "jobTrackerTestChecklist";

export const TEST_ITEMS = [
  { id: "t1", label: "Preferences persist after refresh", howTo: "Save preferences on Settings, refresh page, confirm fields are prefilled." },
  { id: "t2", label: "Match score calculates correctly", howTo: "Set role keywords and skills, check job cards show match badges." },
  { id: "t3", label: '"Show only matches" toggle works', howTo: "Enable toggle on Dashboard, confirm only jobs above threshold appear." },
  { id: "t4", label: "Save job persists after refresh", howTo: "Save a job on Dashboard, refresh, confirm it appears on Saved." },
  { id: "t5", label: "Apply opens in new tab", howTo: "Click Apply on any job card, confirm new tab opens." },
  { id: "t6", label: "Status update persists after refresh", howTo: "Change job status to Applied, refresh, confirm status remains." },
  { id: "t7", label: "Status filter works correctly", howTo: "Filter by Applied on Dashboard, confirm only Applied jobs show." },
  { id: "t8", label: "Digest generates top 10 by score", howTo: "Generate digest, confirm 10 jobs sorted by match score." },
  { id: "t9", label: "Digest persists for the day", howTo: "Generate digest, refresh page, confirm same digest loads." },
  { id: "t10", label: "No console errors on main pages", howTo: "Navigate Dashboard, Saved, Digest, Settings; check DevTools console." },
];

export function getTestChecklist() {
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setTestChecked(testId, checked) {
  const map = getTestChecklist();
  map[testId] = checked;
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(map));
}

export function isTestChecked(testId) {
  const map = getTestChecklist();
  return !!map[testId];
}

export function getTestsPassedCount() {
  return TEST_ITEMS.filter((t) => isTestChecked(t.id)).length;
}

export function areAllTestsPassed() {
  return getTestsPassedCount() === TEST_ITEMS.length;
}

export function resetTestStatus() {
  localStorage.removeItem(CHECKLIST_KEY);
}
