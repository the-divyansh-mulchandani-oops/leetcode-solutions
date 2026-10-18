#sliding window
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == len(set(s)):
            return len(s)

        left = 0
        max_length = 0

        for i in range(len(s)):
            temp = s[left:i + 1]

            if len(temp) == len(set(temp)):
                max_length = max(max_length, len(temp))
            else:
                left += 1

        return max_length
