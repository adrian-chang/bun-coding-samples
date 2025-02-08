# ones-grid

Problem: Find the Largest Square Submatrix with All 1s
Description:
You are given a binary matrix grid of size m x n, where each cell contains either 0 or 1. Your task is to find the largest square submatrix consisting entirely of 1s and return its area .

A square submatrix is defined as a submatrix where the number of rows equals the number of columns, and all elements in the submatrix are 1.

```
Input: grid = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
]
Output: 4
Explanation: The largest square submatrix of 1s has a size of 2x2, so the area is 2 * 2 = 4.
```

```
Input: grid = [
  [0, 1],
  [1, 0]
]
Output: 1
Explanation: The largest square submatrix of 1s has a size of 1x1, so the area is 1 * 1 = 1.
```

```
Input: grid = [
  [0, 0],
  [0, 0]
]
Output: 0
Explanation: There are no 1s in the matrix, so the area is 0.
```

This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
