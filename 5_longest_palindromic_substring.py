# fixed sized window, using brute force, checking from largest to smallest array, with first answer as result
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if s == s[::-1]:
            return s

        for i in range(len(s) - 1, 0, -1):
            for j in range(0, len(s) - i):
                temp = s[j:j + i + 1]
                if temp == temp[::-1]:
                    return temp

        return s[0] if s else ""
