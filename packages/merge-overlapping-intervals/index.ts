// sort the intervals by start (lower index)
// iterate through the intervals
// if the current interval is overlapping with the previous one, merge them
// if the current interval is not overlapping with the previous one, start a new interval
// return the final merged intervals

// o n log n + o n

export function mergeIntervals(intervals: number[][]) {
  // sort the intervals by start (lower index)
  intervals.sort((first, second) => first[0] - second[0]);
  const mergedIntervals: number[][] = [];
  let currentInterval = intervals[0];
  mergedIntervals.push(currentInterval);
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const lastInterval = mergedIntervals[mergedIntervals.length - 1];
    if (interval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    } else {
      mergedIntervals.push(interval);
    }
  }
  return mergedIntervals;
}