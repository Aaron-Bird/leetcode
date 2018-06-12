// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let tempStr = '',
        longestSubstrLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (tempStr.indexOf(s[i]) !== -1) {
            let tempLen = tempStr.length;
            if (tempLen > longestSubstrLen) longestSubstrLen = tempLen;

            tempStr = tempStr.slice(tempStr.indexOf(s[i]) + 1);
        }
        tempStr += s[i];
    }

    let tempLen = tempStr.length;
    if (tempLen > longestSubstrLen) longestSubstrLen = tempLen;

    return longestSubstrLen;
};

// test
console.log(lengthOfLongestSubstring("abc"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("dvdf"));