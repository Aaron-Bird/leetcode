// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    if (haystack.length < needle.length) return -1;
    let p = partialMatch(needle);
    let i = 0,
        j = 0;
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            j++;
            i++;
        } else {
            if (j !== 0) {

                j = p[j - 1];
            } else {
                i++;
            }
        }
    }
    return j === needle.length ? i - j : -1;
};
var partialMatch = function (str) {
    let p = [0],
        i = 1,
        left = 0;
    while (i < str.length) {
        if (str[left] === str[i]) {
            p[i] = left + 1;
            left++;
            i++;
        } else {
            if (left !== 0) {
                left = p[left - 1];
            } else {
                p[i] = 0;
                i++;
            }
        }
    }
    return p;
};

// test
console.log(strStr('a', 'a'));
console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('abcdacd', 'acd'));
console.log(strStr('mississippi', 'issip'));
console.log(strStr('aaa', 'aaaa'));