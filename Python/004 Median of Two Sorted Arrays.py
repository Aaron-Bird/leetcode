# There are two sorted arrays nums1 and nums2 of size m and n respectively.

# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

# Example 1:
# nums1 = [1, 3]
# nums2 = [2]

# The median is 2.0
# Example 2:
# nums1 = [1, 2]
# nums2 = [3, 4]

# The median is (2 + 3)/2 = 2.5


class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        len1 = len(nums1)
        len2 = len(nums2)
        # 判断数组长度.如果nums1比nums1长,互换二者位置
        if len1 > len2:
            return self.findMedianSortedArrays(nums2, nums1)
        # 两个数组总长度的一半
        half_len = (len1 + len2 + 1) / 2
        # 随便在nums1切一刀,这里取中间值
        i = len1 / 2
        while 0 <= i <= len1: 
            # j: 数组2所切位置
            # nums1左侧 + nums2左侧元素个数为两个数组元素个数和的一半
            j = half_len - i
            # 如果nums1的右侧最小元素小于nums2左侧最大元素,则将i向右移动
            if i < len1 and nums1[i] < nums2[j - 1]:
                i += 1
            # 如果nums1左侧最大元素大于nums2右侧最小元素,则将i向右移动
            elif i > 0 and nums1[i - 1] > nums2[j]:
                i -= 1
            # 两数组左侧最大元素都小于右侧最小元素
            else:
                # nums1中的所有数都比nums2大,左侧最大数在nums2中
                if i == 0:
                    max_of_left = nums2[j - 1]
                # nums2中的所有元素都比nums1大,左侧最大数在nums1中
                elif j == 0:
                    max_of_left = nums1[i - 1]
                else: 
                    # 两数组左侧最大值
                    max_of_left = max(nums1[i - 1], nums2[j - 1])
                
                # 如果两数组元素个数总和为奇数,则左侧最大值就是中位数
                if (len1 + len2) % 2 == 1:
                    return max_of_left
                
                # 如果两数组元素个数总和为偶数
                # nums1中的所有元素都小于nums2,右侧最小元素在数组2中
                if i == len1:
                    min_of_right = nums2[j]
                # nums2中的所有元素都小于nums1,右侧最小元素在数组1中
                elif j == len2:
                    min_of_right = nums1[i]
                else: 
                    # 两数组右侧最小值
                    min_of_right = min(nums1[i], nums2[j])
                return (max_of_left + min_of_right) / 2.0
                
# test
s = Solution()
print(s.findMedianSortedArrays([1, 3], [2]))
print(s.findMedianSortedArrays([1, 2], [3, 4]))