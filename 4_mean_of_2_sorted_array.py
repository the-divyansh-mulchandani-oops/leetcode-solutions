#same algo, which is used in merge sort's addition of list, in recursion. 
# alternative is extending list (nums1.extend(nums2)), and do timsort (similar to merge sort) using nums1.sort()
def mergee(nums1, nums2):
    results = []
    i = 0
    j = 0
    len1 = len(nums1)
    len2 = len(nums2)

    while True:
        if i >= len1 and j >= len2:
            break
        elif i >= len1:
            results.append(nums2[j])
            j += 1
        elif j >= len2:
            results.append(nums1[i])
            i += 1
        else:
            if nums1[i] >= nums2[j]:
                results.append(nums2[j])
                j += 1
            else:
                results.append(nums1[i])
                i += 1

    return results


class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        temp = mergee(nums1, nums2)
        n = len(temp)

        if n % 2 == 1:
            return temp[n // 2]

        return (temp[n // 2 - 1] + temp[n // 2]) / 2
