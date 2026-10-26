// Centralized Daily Streak Management & Calendar Tracking
// Handles local-date calculations, streak persistence, and weekly consistency tracking

const STORAGE_KEY = 'psychegrow_streak_data';

/**
 * Format Date object to local "YYYY-MM-DD" string (avoids UTC timezone shift)
 */
export const formatLocalDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Get string representation for today and yesterday in local timezone
 */
export const getTodayString = () => formatLocalDate(new Date());

export const getYesterdayString = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return formatLocalDate(d);
};

/**
 * Calculate difference in calendar days between two "YYYY-MM-DD" strings
 */
export const getDayDifference = (dateStr1, dateStr2) => {
  if (!dateStr1 || !dateStr2) return Infinity;
  const [y1, m1, d1] = dateStr1.split('-').map(Number);
  const [y2, m2, d2] = dateStr2.split('-').map(Number);

  const utc1 = Date.UTC(y1, m1 - 1, d1);
  const utc2 = Date.UTC(y2, m2 - 1, d2);

  const diffMs = Math.abs(utc2 - utc1);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

/**
 * Generate clean zero-state for new visitors (starts at 0 days)
 */
const getInitialStreakSeed = () => {
  return {
    streakCount: 0,
    lastActiveDate: null,
    activityDates: [],
    totalMastered: 0,
    lastUpdated: new Date().toISOString()
  };
};

/**
 * Load streak data from localStorage, validating against current calendar date
 */
export const loadStreakData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let data;

    if (raw) {
      data = JSON.parse(raw);
    } else {
      data = getInitialStreakSeed();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    const todayStr = getTodayString();
    const yesterdayStr = getYesterdayString();

    // Check streak status against today and yesterday
    if (data.lastActiveDate) {
      if (data.lastActiveDate === todayStr) {
        // Already active today, streak is valid
        data.isActiveToday = true;
      } else if (data.lastActiveDate === yesterdayStr) {
        // Active yesterday, streak is currently valid and waiting for today's action
        data.isActiveToday = false;
      } else {
        // Missed at least 1 calendar day -> streak reset to 0 until an action is recorded
        data.streakCount = 0;
        data.isActiveToday = false;
        saveStreakData(data);
      }
    } else {
      data.streakCount = 0;
      data.isActiveToday = false;
    }

    return data;
  } catch {
    return getInitialStreakSeed();
  }
};

/**
 * Save streak data to localStorage
 */
export const saveStreakData = (streakData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...streakData,
      lastUpdated: new Date().toISOString()
    }));
  } catch {
    // Graceful fallback for storage quota issues
  }
};

/**
 * Record user activity (e.g. completing a module, finishing quiz, or reviewing a topic)
 * Accurately increments or maintains streak based on calendar date
 */
export const recordStreakActivity = (actionType = 'complete_topic') => {
  const current = loadStreakData();
  const todayStr = getTodayString();
  const yesterdayStr = getYesterdayString();

  let newStreakCount = current.streakCount || 0;
  let wasIncremented = false;
  let isNewDay = false;

  const activityDates = Array.isArray(current.activityDates) ? [...current.activityDates] : [];

  if (!activityDates.includes(todayStr)) {
    activityDates.push(todayStr);
  }

  if (current.lastActiveDate === todayStr) {
    // Already recorded activity today! Maintain streak
    wasIncremented = false;
    isNewDay = false;
  } else if (current.lastActiveDate === yesterdayStr) {
    // Consecutive day activity! Increment streak counter
    newStreakCount += 1;
    wasIncremented = true;
    isNewDay = true;
  } else {
    // Starting a new streak (after a lapse or brand new)
    newStreakCount = 1;
    wasIncremented = true;
    isNewDay = true;
  }

  const updatedData = {
    ...current,
    streakCount: newStreakCount,
    lastActiveDate: todayStr,
    activityDates,
    isActiveToday: true,
    totalMastered: actionType === 'complete_topic'
      ? (current.totalMastered || 0) + 1
      : (current.totalMastered || 0),
    lastAction: actionType,
    lastUpdated: new Date().toISOString()
  };

  saveStreakData(updatedData);

  return {
    ...updatedData,
    wasIncremented,
    isNewDay
  };
};

/**
 * Calculate weekly Monday-Sunday calendar track for the current week
 */
export const getWeeklyActivity = (activityDates = []) => {
  const today = new Date();
  const todayStr = formatLocalDate(today);

  // Find Monday of current week (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const dayOfWeek = today.getDay();
  const distToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const monday = new Date(today);
  monday.setDate(today.getDate() - distToMonday);

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekDays = [];
  let completedCount = 0;
  let elapsedCount = 0;

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dateStr = formatLocalDate(d);

    const isCurrent = dateStr === todayStr;
    const isCompleted = activityDates.includes(dateStr);
    const isPast = d <= today;

    if (isCompleted) completedCount++;
    if (isPast) elapsedCount++;

    weekDays.push({
      day: dayNames[i],
      dateStr,
      completed: isCompleted,
      current: isCurrent,
      isPast,
      xp: i === 6 ? '+75 XP (Bonus)' : '+50 XP'
    });
  }

  const consistencyRate = elapsedCount > 0
    ? Math.round((completedCount / elapsedCount) * 100)
    : 100;

  return {
    weekDays,
    completedCount,
    elapsedCount,
    consistencyRate: Math.min(100, Math.max(0, consistencyRate))
  };
};