# Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.
# Example 1:

# Input:
# matrix = [
#   [1,   3,  5,  7],
#   [10, 11, 16, 20],
#   [23, 30, 34, 50]
# ]
# target = 3
# Output: true
# Example 2:

# Input:
# matrix = [
#   [1,   3,  5,  7],
#   [10, 11, 16, 20],
#   [23, 30, 34, 50]
# ]
# target = 13
# Output: false


class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        if not matrix or not matrix[0]:
            return False
        rowLen, columnLen = len(matrix[0]), len(matrix)
        if target < matrix[0][0] or target > matrix[columnLen - 1][rowLen - 1]:
            return False
        i, j = 0, columnLen - 1
        while i <= j:
            mid = i + (j - i) // 2
            if matrix[mid][0] == target:
                return True
            elif matrix[mid][0] < target:
                i = mid + 1
            else:
                j = mid - 1

        if matrix[j][rowLen - 1] == target:
            return True
        elif matrix[j][rowLen - 1] < target:
            return False

        l, r = 0, rowLen - 1
        while l <= r:
            print(l, r)
            mid = l + (r - l) // 2
            if matrix[j][mid] == target:
                return True
            elif matrix[j][mid] < target:
                l = mid + 1
            else:
                r = mid - 1
        return False

# test
s = Solution()
matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
print(s.searchMatrix(matrix, 3))
matrix = [[1, 3]]
print(s.searchMatrix(matrix, 2))
