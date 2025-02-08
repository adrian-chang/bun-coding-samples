import { test, expect } from "bun:test";
import { mergeIntervals } from "./index.ts";

test("mergeIntervals1", () => {
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const result = mergeIntervals(intervals);
  expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
});

test("mergeIntervals2", () => {
  const intervals = [[1, 4], [4, 5]];
  const result = mergeIntervals(intervals);
  expect(result).toEqual([[1, 5]]);
});

test("mergeIntervals3", () => {
  const intervals = [[1, 4], [0, 4]];
  const result = mergeIntervals(intervals);
  expect(result).toEqual([[0, 4]]);
});