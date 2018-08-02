// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    result = '';
    aI = a.length - 1;
    bI = b.length - 1;
    carry = 0;
    while (aI >= 0 || bI >= 0) {
        let aNum = (aI >= 0) ? Number(a[aI]) : 0;
        let bNum = (bI >= 0) ? Number(b[bI]) : 0;
        let num = aNum ^ bNum ^ carry;
        carry = aNum ^ bNum ? carry : aNum;
        result = num.toString() + result;
        aI--;
        bI--;
    }
    if (carry > 0) result = carry.toString() + result;
    return result
};

// test
console.log(addBinary('1', '111'));