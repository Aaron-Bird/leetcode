# The gray code is a binary numeral system where two successive values differ in only one bit.

# Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

# Example 1:

# Input: 2
# Output: [0,1,3,2]
# Explanation:
# 00 - 0
# 01 - 1
# 11 - 3
# 10 - 2

# For a given n, a gray code sequence may not be uniquely defined.
# For example, [0,2,3,1] is also a valid gray code sequence.

# 00 - 0
# 10 - 2
# 11 - 3
# 01 - 1
# Example 2:

# Input: 0
# Output: [0]
# Explanation: We define the gray code sequence to begin with 0.
#              A gray code sequence of n has size = 2^n, which for n = 0 the size is 2^0 = 1.
#              Therefore, for n = 0 the gray code sequence is [0].


class Solution(object):
    def grayCode(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        if n == 0:
            return [0]

        nums, grays = [0], [[0]]
        i = 0
        while True:
            num = grays[i]
            length = len(num)
            if i % 2 == 0:
                num[length - 1] ^= 1
            else:
                j = length - 1
                while num[j] != 1 and j >= 0:
                    j -= 1
                j -= 1
                if j < 0:
                    if length + 1 > n:
                        return nums
                    num = [1] + num
                else:
                    num[j] ^= 1

            grays.append(num)
            nums.append(int(''.join([str(j) for j in num]), 2))
            i += 1
        return nums

# test
s = Solution()
print(s.grayCode(3))
