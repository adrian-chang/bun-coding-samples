import { test, expect } from "bun:test";   
import { countTotalEventDigits } from "./index";

test('2 numbers with even digits', () => {
    const numbers = [12, 345, 2, 6, 7896];
    const result = countTotalEventDigits(numbers);
    expect(result).toBe(2);
});

test('1 number with even digits', () => {
    const numbers = [555, 901, 482, 1771];
    const result = countTotalEventDigits(numbers);
    expect(result).toBe(1);
});

test('0 numbers with even digits', () => {
    const numbers = [1, 3, 5, 722, 9];
    const result = countTotalEventDigits(numbers);
    expect(result).toBe(0);
});

test('5 number with even digits', () => {
    const numbers = [20, 40, 60, 80, 10];
    const result = countTotalEventDigits(numbers);
    expect(result).toBe(5);
});

