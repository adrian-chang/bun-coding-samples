# merge-overlapping-intervals

Problem: Merge Overlapping Intervals
Description:
You are given an array of intervals where each interval is represented as [start, end]. The intervals may overlap or be disjoint. Your task is to merge all overlapping intervals and return a new array of non-overlapping intervals that cover the entire range of the input intervals.

Two intervals [a, b] and [c, d] are considered overlapping if there exists at least one point in common between them (i.e., b >= c and a <= d).

```
Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
Explanation: The intervals [1, 3] and [2, 6] overlap, so they are merged to form [1, 6]. The intervals [8, 10] and [15, 18] do not overlap, so they are kept separate.
```

```
Input: intervals = [[1, 4], [4, 5]]
Output: [[1, 5]]
Explanation: The interval [1, 4] and [4, 5] overlap, so they are merged to form [1, 5].
```

```
Input: intervals = [[1, 4], [0, 4]]
Output: [[0, 4]]
Explanation: The interval [1, 4] and [0, 4] overlap, so they are merged to form [0, 4].
```

This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
