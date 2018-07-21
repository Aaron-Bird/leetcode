# Given a collection of numbers that might contain duplicates, return all possible unique permutations.

# Example:

# Input: [1,1,2]
# Output:
# [
#   [1,1,2],
#   [1,2,1],
#   [2,1,1]
# ]


class Solution(object):
    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        length = len(nums)
        result = []

        def callback(i, group):
            if len(group) == length:
                arr = [nums[i] for i in group]
                result.append(arr)
                return
            for j in range(0, length):

                if j in group:
                    continue
                if j > 0 and nums[j] == nums[j - 1] and j - 1 not in group:
                    continue
                group.append(j)
                callback(j, group)
                group.pop()

        for i in range(0, length):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            callback(i, [i])
        return result

# test
s = Solution()
print(s.permuteUnique([1, 1, 2]))
print(s.permuteUnique([3, 3, 0, 3]))
