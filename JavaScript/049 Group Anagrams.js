// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.


// anagram 字母异位词 指字母相同，但排列不同的字符串
// 如"ate","eat","tea"是一组字母异位词
// 解题思路1
// 将字符串依照英文字母顺序排列,储存到哈希表
// 解题思路2
// 创建一个包含26个不同素数的列表,与26个字母相对应
// 将字符串中所有字母对应的素数相乘,储存到哈希表

// 附录
// 由算术基本定理可知, 任何大于1的整数均可被表示成一串"唯一"素数之乘积
// https://zh.wikipedia.org/zh-cn/%E7%B4%A0%E6%95%B0

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let counter = 0;
        for (let j = 0; j < str.length; j++) {
            counter += 1 << (str[j].codePointAt() - 97);
        }
        counter = String(counter);
        if (!map[counter]) {
            map[counter] = [str];
        } else {
            map[counter].push(str);
        }
        console.log(str, counter)
    }
    return Object.values(map);
};

// test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));