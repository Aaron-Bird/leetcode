# Given a 2D board and a word, find if the word exists in the grid.

# The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

# Example:

# board =
# [
#   ['A','B','C','E'],
#   ['S','F','C','S'],
#   ['A','D','E','E']
# ]

# Given word = "ABCCED", return true.
# Given word = "SEE", return true.
# Given word = "ABCB", return false.


class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        def callback(i, x, y):
            if i == len(word):
                return True
            if x < 0 or x >= len(board[0]) or y < 0 or y >= len(board) or word[i] != board[y][x]:
                return False
            board[y][x] = '#'
            result = callback(i + 1, x - 1, y) \
                or callback(i + 1, x, y - 1)   \
                or callback(i + 1, x + 1, y)   \
                or callback(i + 1, x, y + 1)
            board[y][x] = word[i]
            return result

        for y in range(0, len(board)):
            for x in range(0, len(board[0])):
                if callback(0, x, y):
                    return True
        return False

# test
board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
s = Solution()
print(s.exist(board, 'ABCC'))
print(s.exist(board, 'SEE'))
print(s.exist(board, 'ABCB'))
