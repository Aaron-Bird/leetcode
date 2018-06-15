// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    // 将字符串长度转为基数, 添加一个字符防止过界
    let oddStr = '$#';
    for (var i = 0; i < s.length; i++) {
        oddStr += s[i] + '#';
    }
    let paliLenList = [1],
        // 上一个右侧最远的回文中心点位置
        middle = 0,
        // 上一个右侧最远的回文右侧位置
        right = 0,
        // 最长回文中心位置
        maxIndex = 0,
        // 最长回文单侧长度
        maxLen = 0;
    // 从左向右依次遍历
    for (let i = 1; i < oddStr.length; i++) {
        // 如果在上一个回文范围内,修改当前回文单侧长度为已知回文最长范围
        paliLenList[i] = i < right ? Math.min(paliLenList[(middle * 2) - i], right - i) : 1;
        // 向两侧遍历,检测回文范围
        while (oddStr[i - paliLenList[i]] === oddStr[i + paliLenList[i]]) {
            paliLenList[i] += 1;
        }
        // 右侧范围超过上一个回文
        if (i + paliLenList[i] > right) {
            right = i + paliLenList[i];
            middle = i;
        }
        if (paliLenList[i] > maxLen) {
            maxLen = paliLenList[i];
            maxIndex = i;
        }
    }
    return s.substr((maxIndex - maxLen + 1) / 2, maxLen - 1);
};

// test
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('bananas'));
console.log(longestPalindrome('aaabaaaa'));