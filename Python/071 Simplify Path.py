# Given an absolute path for a file (Unix-style), simplify it.

# For example,
# path = "/home/", => "/home"
# path = "/a/./b/../../c/", => "/c"

# Corner Cases:

# Did you consider the case where path = "/../"?
# In this case, you should return "/".
# Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
# In this case, you should ignore redundant slashes and return "/home/foo".


class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        path = path.split('/')
        result = []
        for i in path:
            if i == '' or i == '.':
                continue
            if i == '..':
                if result:
                    result.pop()
                continue
            result.append(i)
        return '/' + '/'.join(result)

# test
s = Solution()
print(s.simplifyPath('/home/'))
print(s.simplifyPath('/a/./b/../../c/'))
print(s.simplifyPath('/../'))
print(s.simplifyPath('/home/../../..'))
print(s.simplifyPath('/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///'))
print(s.simplifyPath('/abc/...'))
print(s.simplifyPath('/..'))
