import {  test, expect } from "bun:test";
import { Logger } from "./index";

test("shouldPrintOne", () => {
  const logger = new Logger();
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(false);
});

test("shouldPrintTwo", () => {
  const logger = new Logger();
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(false);
  expect(logger.shouldPrint("hello", 32)).toBe(true);
});

test("shouldPrintTwo", () => {
  const logger = new Logger();
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(true);
  expect(logger.shouldPrint("hello", 1)).toBe(false);
  expect(logger.shouldPrint("world", 10)).toBe(true);
  expect(logger.shouldPrint("hello", 32)).toBe(true);
});
  