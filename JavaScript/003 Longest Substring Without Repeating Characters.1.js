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
    let hashmap = {};
    let len = [];
    // 从左向右遍历字符串
    // j: 子字符串起始位置
    for (var i = 0, j = 0; i < s.length; i++) {
        let letter = s[i];
        // 判断当前字符是否重复(哈希表中的字符位置是否在j右侧)
        if (hashmap[letter] >= j) {
            // 储存子串长度
            len.push(i - j);
            // 修改j到哈希表重复字符的下一位
            j = hashmap[letter] + 1;
        }
        // 添加当前字符的指针位置到嘻哈表中
        hashmap[letter] = i;
    }
    // 遍历结束,储存最后一个子串长度
    len.push(i - j);
    // 返回最大长度
    return Math.max.apply(this, len);
};

// test
console.log(lengthOfLongestSubstring("abc"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("dvd"));
console.log(lengthOfLongestSubstring(""));