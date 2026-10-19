class Solution:
    def targetIndices(self, nums: list[int], target: int) -> list[int]:
        nums.sort() ### tim-sort O(nlog(n)), can use merge or quick sort
        result=[]

        if target>nums[-1] or target < nums[0] or nums==[] or nums==None:
            return []
        #O(1)
        
        for i,ele in enumerate(nums):
            if ele==target:
                result.append(i)
            elif ele>target:
                break
        ##O(n for above for loop)
        return result
