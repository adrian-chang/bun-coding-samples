import { test, expect } from "bun:test";
import { onesGridSize } from "./index";

test("grid1", () => {
  const grid = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
  ];
  const result = onesGridSize(grid);
  expect(result).toEqual(4);
});
test("grid2", () => {
  const grid = [
    [0, 1],
    [1, 0]
  ];
  const result = onesGridSize(grid);
  expect(result).toEqual(1);
});
test("grid3", () => {
  const grid = [
    [0, 0],
    [0, 0]
  ];
  const result = onesGridSize(grid);
  expect(result).toEqual(0);
});
