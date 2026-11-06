class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()

        negation_flag = 1
        numbers_flag = 0
        sign_flag = 0
        result = []

        temp = [str(i) for i in range(10)]

        for index in range(len(s)):

            if s[index] in ["-", "+"] and numbers_flag == 0:

                if sign_flag == 1: # if got sign second time
                    return 0

                sign_flag = 1 ##set already got sign first time

                if s[index] == "-":
                    negation_flag = -1

            elif numbers_flag == 0:
                if s[index] in temp:
                    result.append(s[index])
                    numbers_flag = 1
                else:
                    break

            elif numbers_flag == 1:
                if s[index] not in temp:
                    break
                else:
                    result.append(s[index])

        if not result:
            return 0

        # String to integer without multi-character int()
        s = "".join(result)
        result = 0

        for ele in s:
            result = result * 10 + temp.index(ele)

        result = negation_flag * result

        min_value = -(2**31)
        max_value = (2**31) - 1

        if result > max_value:
            return max_value
        elif result < min_value:
            return min_value

        return result
