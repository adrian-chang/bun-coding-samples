// find a 1 in the grid
// if found, check the size of the 1s grid
// start with + 1 column and + 1 row and check if it's a 2x2
// then check with +2 columns and +2 rows, check if it's a 3x3
// ...
// max is the largest grid size
// return the size of the largest 1s grid

export function onesGridSize(grid: number[][]) {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxSize = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
            const size = checkGridSize(grid, i, j);
            maxSize = Math.max(maxSize, size);
        }
    }
  }
  return maxSize ** 2;
}

function checkGridSize(grid: number[][], i: number, j: number) {
  const rows = grid.length;
  const cols = grid[0].length;
  let size = 1;
  while (i + size < rows && j + size < cols) {
    // columns
    for (let k = 0; k < size; k++) {
      if (grid[i + size][j + k] !== 1 || grid[i + k][j + size] !== 1) {
        return size - 1;
      }
    } 
    size++;
  }
  return size;
}
