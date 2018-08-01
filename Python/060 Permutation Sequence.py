# The set [1,2,3,...,n] contains a total of n! unique permutations.

# By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

# "123"
# "132"
# "213"
# "231"
# "312"
# "321"
# Given n and k, return the kth permutation sequence.

# Note:

# Given n will be between 1 and 9 inclusive.
# Given k will be between 1 and n! inclusive.
# Example 1:

# Input: n = 3, k = 3
# Output: "213"
# Example 2:

# Input: n = 4, k = 9
# Output: "2314"


class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        factorial = [1]
        for i in range(1, n):
            factorial.append(i * factorial[i - 1])
        succession = [str(i) for i in range(1, 10)]

        k -= 1
        result = ''
        for i in range(n, 0, -1):
            j = k // factorial[i - 1]
            k %= factorial[i - 1]
            result += succession[j]
            del succession[j]
        return result
        
# test
s = Solution()
print(s.getPermutation(3, 3))