// Given a string containing only digits, restore it by returning all possible valid IP address combinations.

// Example:

// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]


/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    result = [];
    let sLen = s.length;
    if (sLen < 4 || sLen > 12) return result;

    let callback = function (i, arr) {
        arrLen = arr.length;
        if (arrLen === 4 && i === sLen) result.push(arr.join('.'));

        if (arrLen < 4) {
            for (let j = i + 1; j <= i + 3; j++) {
                let str = s.slice(i, j);
                if (j === i + 1 || (j === i + 2 && str[0] !== '0') || (j === i + 3 && Number(str) <= 255 && str[0] !== '0')) {
                    arr.push(str);
                    callback(j, arr);
                    arr.pop();
                }
            }
        }
    }
    for (let j = 1; j <= 3; j++) {
        let str = s.slice(0, j);
        if (j === 1 || (j === 2 && str[0] !== '0') || (j === 3 && Number(str) <= 255 && str[0] !== '0')) {
            callback(j, [str]);
        }
    }
    return result;
};

// test
console.log(restoreIpAddresses('25525511135'));