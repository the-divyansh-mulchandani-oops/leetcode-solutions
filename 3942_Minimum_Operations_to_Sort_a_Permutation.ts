function minOperations(nums: number[]): number {
    const n = nums.length;
    let ans = Infinity;

    // Case 1: nums is a cyclic rotation of [0, 1, ..., n - 1].
    const k = nums[0];
    let ascending = true;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== (k + i) % n) {
            ascending = false;
            break;
        }
    }

    if (ascending) {
        // Rotate left directly, or reverse-rotate-reverse.
        ans = Math.min(ans, n - k === n ? 0 : n - k, k + 2);
    }

    // Case 2: nums is a cyclic rotation of [n - 1, ..., 1, 0].
    const r = (n - 1 - nums[0] + n) % n;
    let descending = true;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== n - 1 - ((r + i) % n)) {
            descending = false;
            break;
        }
    }

    if (descending) {
        // Rotate and reverse, choosing the shorter rotation direction.
        ans = Math.min(ans, Math.min(r, n - r) + 1);
    }

    return ans === Infinity ? -1 : ans;
}
//array rotation, and Permuation & Combination
