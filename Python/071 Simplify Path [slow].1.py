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
        i = 0
        for j in range(0, len(path)):
            if path[j] == '' or path[j] == '.':
                continue
            if path[j] == '..':
                if i > 0:
                    i -= 1
                continue
            path[i] = path[j]
            i += 1
        return '/' + '/'.join(path[0: i])

# test
s = Solution()
print(s.simplifyPath('/home/'))
print(s.simplifyPath('/a/./b/../../c/'))
print(s.simplifyPath('/../'))
print(s.simplifyPath('/home/../../..'))
print(s.simplifyPath('/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///'))
print(s.simplifyPath('/abc/...'))
