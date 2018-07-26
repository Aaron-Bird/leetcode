# Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

# Example 1:

# Input:
# [
#  [ 1, 2, 3 ],
#  [ 4, 5, 6 ],
#  [ 7, 8, 9 ]
# ]
# Output: [1,2,3,6,9,8,7,4,5]
# Example 2:

# Input:
# [
#   [1, 2, 3, 4],
#   [5, 6, 7, 8],
#   [9,10,11,12]
# ]
# Output: [1,2,3,4,8,12,11,10,9,5,6,7]


class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        result = []
        columnLen = len(matrix)
        if columnLen == 0:
            return result
        rowLen = len(matrix[0])
        for s in range(0, (min(columnLen, rowLen) - 1) // 2 + 1):
            j = s
            for i in range(s, rowLen - s):
                result.append(matrix[j][i])
            i = rowLen - s - 1
            for j in range(s + 1, columnLen - s):
                result.append(matrix[j][i])
            j = columnLen - s - 1
            if j != s:
                for i in range(rowLen - s - 2, s - 1, -1):
                    result.append(matrix[j][i])
            i = s
            if i != rowLen - s - 1:
                for j in range(columnLen - s - 2, s, -1):
                    result.append(matrix[j][i])
        return result

# test
s = Solution()
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(s.spiralOrder(matrix))
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
print(s.spiralOrder(matrix))
matrix = [
    [7],
    [9],
    [6]
]
print(s.spiralOrder(matrix))
