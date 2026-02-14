/**
 * Job Notification Tracker — Deterministic match score engine
 *
 * Rules (exact specification):
 * +25 if any roleKeyword appears in job.title (case-insensitive)
 * +15 if any roleKeyword appears in job.description
 * +15 if job.location matches preferredLocations
 * +10 if job.mode matches preferredMode
 * +10 if job.experience matches experienceLevel
 * +15 if overlap between job.skills and user.skills (any match)
 * +5 if postedDaysAgo <= 2
 * +5 if source is LinkedIn
 * Cap at 100.
 */

export function computeMatchScore(job, prefs) {
  if (!prefs) return 0;

  let score = 0;

  const roleKeywords = parseCommaList(prefs.roleKeywords);
  const userSkills = parseCommaList(prefs.skills);

  // +25 if any roleKeyword appears in job.title (case-insensitive)
  if (roleKeywords.length > 0 && job.title) {
    const titleLower = job.title.toLowerCase();
    if (roleKeywords.some((kw) => titleLower.includes(kw.toLowerCase().trim()))) {
      score += 25;
    }
  }

  // +15 if any roleKeyword appears in job.description
  if (roleKeywords.length > 0 && job.description) {
    const descLower = job.description.toLowerCase();
    if (roleKeywords.some((kw) => descLower.includes(kw.toLowerCase().trim()))) {
      score += 15;
    }
  }

  // +15 if job.location matches preferredLocations
  const locs = prefs.preferredLocations || [];
  if (locs.length > 0 && job.location && locs.includes(job.location)) {
    score += 15;
  }

  // +10 if job.mode matches preferredMode
  const modes = prefs.preferredMode || [];
  if (modes.length > 0 && job.mode && modes.includes(job.mode)) {
    score += 10;
  }

  // +10 if job.experience matches experienceLevel
  if (prefs.experienceLevel && job.experience && prefs.experienceLevel === job.experience) {
    score += 10;
  }

  // +15 if overlap between job.skills and user.skills (any match)
  if (userSkills.length > 0 && job.skills && Array.isArray(job.skills)) {
    const jobSkillsLower = job.skills.map((s) => String(s).toLowerCase());
    const hasOverlap = userSkills.some((us) => {
      const u = us.toLowerCase().trim();
      return jobSkillsLower.some((js) => js === u || js.includes(u) || u.includes(js));
    });
    if (hasOverlap) score += 15;
  }

  // +5 if postedDaysAgo <= 2
  if (typeof job.postedDaysAgo === "number" && job.postedDaysAgo <= 2) {
    score += 5;
  }

  // +5 if source is LinkedIn
  if (job.source === "LinkedIn") {
    score += 5;
  }

  return Math.min(100, score);
}

function parseCommaList(str) {
  if (!str || typeof str !== "string") return [];
  return str
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
