# Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

# Note: You may not slant the container and n is at least 2.


class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        i, j = 0, len(height) - 1
        maxArea = 0
        while i < j:
            area = min(height[i], height[j]) * (j - i)
            if area > maxArea:
                maxArea = area
            
            if height[i] < height[j]:
                i += 1
            else:
                j -= 1
        return maxArea

# test
s = Solution()
print(s.maxArea([1, 1]))
print(s.maxArea([1, 2]))
print(s.maxArea([1, 2, 1]))
