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
 * Internal helper to calculate difference in calendar days between two "YYYY-MM-DD" strings
 */
const getCalendarDayDiff = (dateStr1, dateStr2) => {
  if (!dateStr1 || !dateStr2) return Infinity;
  const [y1, m1, d1] = dateStr1.split('-').map(Number);
  const [y2, m2, d2] = dateStr2.split('-').map(Number);

  const utc1 = Date.UTC(y1, m1 - 1, d1);
  const utc2 = Date.UTC(y2, m2 - 1, d2);

  const diffMs = utc2 - utc1;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
};

/**
 * Generate clean zero-state for new visitors (starts at 0 days)
 */
const getInitialStreakSeed = () => {
  return {
    streakCount: 0,
    lastActiveDate: null,
    activityDates: [],
    freezeUsedOn: null,
    lastUpdated: new Date().toISOString()
  };
};

/**
 * Load streak data from localStorage, validating against current calendar date
 * Computes derived fields (isActiveToday) dynamically.
 */
export const loadStreakData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let data;

    if (raw) {
      data = JSON.parse(raw);
    } else {
      data = getInitialStreakSeed();
      saveStreakData(data);
    }

    if (!Array.isArray(data.activityDates)) {
      data.activityDates = [];
    }

    const todayStr = getTodayString();
    const yesterdayStr = getYesterdayString();

    // Check streak status against today and yesterday
    if (data.lastActiveDate) {
      if (data.lastActiveDate === todayStr) {
        // Active today
      } else if (data.lastActiveDate === yesterdayStr) {
        // Active yesterday, streak is currently valid waiting for today's action
      } else {
        // Missed at least 1 calendar day. Check difference in calendar days
        const daysSinceLastActive = getCalendarDayDiff(data.lastActiveDate, todayStr);

        // Streak freeze: if user missed exactly one calendar day (daysSinceLastActive === 2)
        // and has not used a freeze in the last 7 days, keep streak instead of resetting to 0.
        const canUseFreeze =
          data.streakCount > 0 &&
          daysSinceLastActive === 2 &&
          (!data.freezeUsedOn || getCalendarDayDiff(data.freezeUsedOn, todayStr) >= 7);

        if (canUseFreeze) {
          // Freeze applied for the missed day (yesterday)
          data.freezeUsedOn = yesterdayStr;
          saveStreakData(data);
        } else if (data.freezeUsedOn === yesterdayStr) {
          // Already frozen for yesterday during a previous load today; maintain streak
        } else {
          // Missed more than 1 day or freeze unavailable -> reset streak
          data.streakCount = 0;
          saveStreakData(data);
        }
      }
    } else {
      data.streakCount = 0;
    }

    // Derive isActiveToday dynamically on load (never persist it into localStorage)
    const isActiveToday = data.lastActiveDate === todayStr || data.activityDates.includes(todayStr);

    return {
      ...data,
      isActiveToday
    };
  } catch {
    return {
      ...getInitialStreakSeed(),
      isActiveToday: false
    };
  }
};

/**
 * Save streak data to localStorage without derived or transient fields
 */
export const saveStreakData = (streakData) => {
  try {
    // Exclude derived or transient fields (isActiveToday, wasIncremented, isNewDay, totalMastered)
    const {
      isActiveToday: _isActiveToday,
      wasIncremented: _wasIncremented,
      isNewDay: _isNewDay,
      totalMastered: _totalMastered,
      ...toSave
    } = streakData || {};
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...toSave,
      lastUpdated: new Date().toISOString()
    }));
  } catch {
    // Graceful fallback for storage quota issues
  }
};

/**
 * Record user activity ('study' or 'complete_topic')
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
  } else if (current.lastActiveDate === yesterdayStr || current.freezeUsedOn === yesterdayStr) {
    // Consecutive day activity (either active yesterday or yesterday protected by streak freeze)
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
    const isPast = dateStr < todayStr;

    if (isCompleted) {
      completedCount++;
    }

    // Strictly past days count towards elapsedCount.
    // Today only counts towards elapsedCount IF today has activity (isCompleted).
    // A user who hasn't studied yet today should not be penalised in consistency percentage.
    if (isPast || (isCurrent && isCompleted)) {
      elapsedCount++;
    }

    weekDays.push({
      day: dayNames[i],
      dateStr,
      completed: isCompleted,
      current: isCurrent,
      isPast
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