//3551. Minimum Swaps to Sort by Digit Sum
let countter = 0;

function sum_of_numbers(num: number): number {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

async function merge(
    arr1: number[],
    arr2: number[]
): Promise<number[]> {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        const sum1 = sum_of_numbers(arr1[i]);
        const sum2 = sum_of_numbers(arr2[j]);

        if (sum1 < sum2 || (sum1 === sum2 && arr1[i] <= arr2[j])) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }

    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);

    return result;
}

function merge_sort(
    nums: { value: number; index: number; digitSum: number }[]
): { value: number; index: number; digitSum: number }[] {
    const n = nums.length;
    if (n <= 1) return nums;

    let src = nums;
    let dst = new Array(n);

    for (let width = 1; width < n; width *= 2) {
        for (let left = 0; left < n; left += width * 2) {
            const mid = Math.min(left + width, n);
            const right = Math.min(left + width * 2, n);

            let i = left;
            let j = mid;
            let k = left;

            while (i < mid && j < right) {
                const a = src[i];
                const b = src[j];

                if (
                    a.digitSum < b.digitSum ||
                    (a.digitSum === b.digitSum && a.value <= b.value)
                ) {
                    dst[k++] = src[i++];
                } else {
                    dst[k++] = src[j++];
                }
            }

            while (i < mid) dst[k++] = src[i++];
            while (j < right) dst[k++] = src[j++];
        }

        [src, dst] = [dst, src];
    }

    return src;
}

function minSwaps(nums: number[]): number {
    countter = 0;

    const n = nums.length;
    if (n <= 1) return 0;

    const decorated = nums.map((value, index) => ({
        value,
        index,
        digitSum: sum_of_numbers(value)
    }));

    const sorted = merge_sort(decorated);
    const visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (visited[i] || sorted[i].index === i) continue;

        let j = i;
        let cycleLength = 0;

        while (!visited[j]) {
            visited[j] = true;
            j = sorted[j].index;
            cycleLength++;
        }

        countter += cycleLength - 1;
    }

    return countter;
}

console.log(minSwaps([22, 14, 33, 7])); // 0
console.log(minSwaps([37, 100]));       // 1
console.log(minSwaps([18, 43, 34, 16])); // 2
// Contributed, improvised, and optimized by: Divyansh Mulchandani
