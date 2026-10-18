#permutations and combinations
from math import comb

MOD = 10**9 + 7

def count(arr):
    if len(arr) <= 2:
        return 1

    root = arr[0]
    left = [x for x in arr[1:] if x < root]
    right = [x for x in arr[1:] if x > root]

    ways = comb(len(left) + len(right), len(left))
    return ways * count(left) * count(right) 


class Solution:
    def numOfWays(self, nums: list[int]) -> int:
        return (count(nums) - 1) % MOD
