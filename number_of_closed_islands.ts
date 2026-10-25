
function closedIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    function dfs(r: number, c: number): boolean {
        // Out of bounds means the island touches the boundary.
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return false;
        }

        // Water or already visited land.
        if (grid[r][c] === 1) {
            return true;
        }

        // Mark land as visited.
        grid[r][c] = 1;

        // Explore all four directions.
        const up = dfs(r - 1, c);
        const down = dfs(r + 1, c);
        const left = dfs(r, c - 1);
        const right = dfs(r, c + 1);

        return up && down && left && right;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                if (dfs(r, c)) {
                    count++;
                }
            }
        }
    }

    return count;
}
//DEpth for Searhc
