// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s[0] === '0') return 0;

    let i = 1,
        len = s.length;
    dyna = [1];
    while (i <= len) {
        dyna[i] = 0;
        if (s[i - 1] !== '0') {
            dyna[i] += dyna[i - 1];
        }
        if (i > 1 && Number(s[i - 2] + s[i - 1]) >= 10 && Number(s[i - 2] + s[i - 1]) <= 26) {
            dyna[i] += dyna[i - 2];
        }
        i++;
    }

    return dyna[i - 1];
};

// test
console.log(numDecodings('12'));
console.log(numDecodings('100'));
console.log(numDecodings('01'));
console.log(numDecodings('100'));
console.log(numDecodings('101'));
console.log(numDecodings('110'));