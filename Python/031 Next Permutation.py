# Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

# If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

# The replacement must be in-place and use only constant extra memory.

# Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

# 1,2,3 → 1,3,2
# 3,2,1 → 1,2,3
# 1,1,5 → 1,5,1


class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        i = length - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = i + 1
            while j <= length:
                if j == length or nums[i] >= nums[j]:
                    j -= 1
                    nums[i], nums[j] = nums[j], nums[i]
                    break
                j += 1
        i += 1
        j = length - 1
        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1

# test
s = Solution()
arr = [1, 2, 3]
s.nextPermutation(arr)
print(arr)

arr = [3, 2, 1]
s.nextPermutation(arr)
print(arr)

arr = [1, 1, 5]
s.nextPermutation(arr)
print(arr)

arr = [1, 3, 2]
s.nextPermutation(arr)
print(arr)
