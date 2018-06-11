// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    let prefix = '',
        i = 0,
        firstStr = strs[0],
        firstStrLen = firstStr.length - 1;
    while (true) {
        let isCommonPrefix = strs.every(i => {
            return i.indexOf(prefix) === 0;
        });
        if (!isCommonPrefix) return prefix.slice(0, prefix.length - 1);

        if (i <= firstStrLen) {
            prefix += firstStr[i];
            i += 1;
        } else {
            return prefix;
        }

    }
};

// test
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['  ']));
console.log(longestCommonPrefix(['a']));