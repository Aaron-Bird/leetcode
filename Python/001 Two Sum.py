# -*-coding:utf-8 -*-

class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        counter = 0 
        for i in nums:
            counter += 1
            another_num = target - i
            if another_num in nums[counter:]:
                return [counter - 1, nums[counter:].index(another_num) + counter]


s =Solution()
print s.twoSum([2,5,5,11],10)