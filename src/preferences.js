/**
 * Job Notification Tracker — Preferences storage
 */

const PREFERENCES_KEY = "jobTrackerPreferences";

const DEFAULT_PREFERENCES = {
  roleKeywords: "",
  preferredLocations: [],
  preferredMode: [],
  experienceLevel: "",
  skills: "",
  minMatchScore: 40,
};

export function getPreferences() {
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PREFERENCES, ...parsed };
  } catch {
    return null;
  }
}

export function savePreferences(prefs) {
  const safe = {
    roleKeywords: String(prefs.roleKeywords ?? "").trim(),
    preferredLocations: Array.isArray(prefs.preferredLocations)
      ? prefs.preferredLocations.filter(Boolean)
      : [],
    preferredMode: Array.isArray(prefs.preferredMode)
      ? prefs.preferredMode.filter(Boolean)
      : [],
    experienceLevel: String(prefs.experienceLevel ?? "").trim() || "",
    skills: String(prefs.skills ?? "").trim(),
    minMatchScore: Math.min(100, Math.max(0, Number(prefs.minMatchScore) || 40)),
  };
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(safe));
  return safe;
}

export function hasPreferences() {
  const p = getPreferences();
  if (!p) return false;
  return (
    p.roleKeywords ||
    p.preferredLocations?.length > 0 ||
    p.preferredMode?.length > 0 ||
    p.experienceLevel ||
    p.skills
  );
}

export { DEFAULT_PREFERENCES };
