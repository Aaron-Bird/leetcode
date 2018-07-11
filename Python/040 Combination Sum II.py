# Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

# Each number in candidates may only be used once in the combination.

# Note:

# All numbers (including target) will be positive integers.
# The solution set must not contain duplicate combinations.
# Example 1:

# Input: candidates = [10,1,2,7,6,1,5], target = 8,
# A solution set is:
# [
#   [1, 7],
#   [1, 2, 5],
#   [2, 6],
#   [1, 1, 6]
# ]
# Example 2:

# Input: candidates = [2,5,2,1,2], target = 5,
# A solution set is:
# [
#   [1,2,2],
#   [5]
# ]


class Solution(object):
    def combinationSum2(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """

        length = len(candidates)
        result = []

        def callback(i, set, target):
            if target == 0:
                result.append(set[:])
            elif target > 0:
                for j in range(i + 1, length):
                    if j > i + 1 and candidates[j] == candidates[j - 1]:
                        continue
                    set.append(candidates[j])
                    callback(j, set, target - candidates[j])
                    set.pop()
        candidates.sort()
        for i in range(0, length):
            if i > 0 and candidates[i] == candidates[i - 1]:
                continue
            callback(i, [candidates[i]], target - candidates[i])
        return result

# test
s = Solution()
print(s.combinationSum2([1], 1))
print(s.combinationSum2([1, 2], 3))
print(s.combinationSum2([1, 2, 3], 3))
print(s.combinationSum2([1, 2, 7], 8))
print(s.combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
print(s.combinationSum2([1, 2, 2, 2, 5], 5))
