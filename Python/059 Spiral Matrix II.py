# Given a positive integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

# Example:

# Input: 3
# Output:
# [
#  [ 1, 2, 3 ],
#  [ 8, 9, 4 ],
#  [ 7, 6, 5 ]
# ]


class Solution(object):
    def generateMatrix(self, n):
        """
        :type n: int
        :rtype: List[List[int]]
        """
        matrix = [[0] * n for i in range(0, n)]

        num = 0
        for i in range(0, (n - 1) // 2 + 1):
            x, y = i, i
            while x < n - i:
                num += 1
                matrix[y][x] = num
                x += 1
            x -= 1
            y += 1
            while y < n - i:
                num += 1
                matrix[y][x] = num
                y += 1
            y -= 1
            x -= 1
            while x >= i:
                num += 1
                matrix[y][x] = num
                x -= 1
            x += 1
            y -= 1
            while y > i:
                num += 1
                matrix[y][x] = num
                y -= 1
        return matrix

# test
s = Solution()
print(s.generateMatrix(4))
