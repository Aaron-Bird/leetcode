# Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

# Example 1:

# Input:
# [
#   [1,1,1],
#   [1,0,1],
#   [1,1,1]
# ]
# Output:
# [
#   [1,0,1],
#   [0,0,0],
#   [1,0,1]
# ]
# Example 2:

# Input:
# [
#   [0,1,2,0],
#   [3,4,5,2],
#   [1,3,1,5]
# ]
# Output:
# [
#   [0,0,0,0],
#   [0,4,5,0],
#   [0,3,1,0]
# ]
# Follow up:

# A straight forward solution using O(mn) space is probably a bad idea.
# A simple improvement uses O(m + n) space, but still not the best solution.
# Could you devise a constant space solution?


class Solution(object):
    def setZeroes(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.
        """
        rowLen, columnLen = len(matrix[0]), len(matrix)
        row0, column0 = False, False
        for i in matrix[0]:
            if i == 0:
                row0 = True
                break
        for j in matrix:
            if j[0] == 0:
                column0 = True
                break

        for j in range(0, columnLen):
            for i in range(0, rowLen):
                if matrix[j][i] == 0:
                    matrix[j][0] = True
                    matrix[0][i] = True
        for i in range(1, rowLen):
            if matrix[0][i] and isinstance(matrix[0][i], bool):
                for j in range(0, columnLen):
                    matrix[j][i] = 0
        for j in range(1, columnLen):
            if matrix[j][0] and isinstance(matrix[j][0], bool):
                for i in range(0, rowLen):
                    matrix[j][i] = 0

        if row0 == True:
            for i in range(0, rowLen):
                matrix[0][i] = 0
        if column0 == True:
            for j in range(0, columnLen):
                matrix[j][0] = 0

#  test
s = Solution()
matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
s.setZeroes(matrix)
print(matrix)
matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]
s.setZeroes(matrix)
print(matrix)
matrix = [
    [0, 0, 0, 5],
    [4, 3, 1, 4],
    [0, 1, 1, 4],
    [1, 2, 1, 3],
    [0, 0, 1, 1]
]
s.setZeroes(matrix)
print(matrix)
matrix = [
    [1, 1, 1],
    [0, 1, 2]
]
s.setZeroes(matrix)
print(matrix)
