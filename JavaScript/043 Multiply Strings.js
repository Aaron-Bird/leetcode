// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


//     1 2 3 i
//   *   4 5 j
// ---------
//       1 5 i2 * j1 2 + 1 = 3
//     1 0   i1 * j1 1 + 1 = 2
//     5     i0 * j1 0 + 1 = 1
//     1 2   i2 * j0 2 + 0 = 2
//     8     i1 * j0 1 + 0 = 1
//   4       i0 * j0 0 + 0 = 0
// ---------
//   5 5 3 5

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let l1 = num1.length,
        l2 = num2.length;
    let arr = Array(l1 + l2).fill(0);

    for (let i = l1 - 1; i >= 0; i--) {
        for (let j = l2 - 1; j >= 0; j--) {
            let num = Number(num1[i]) * Number(num2[j]);

            let pos1 = i + j;
            let pos2 = i + j + 1;

            num += arr[pos2];
            arr[pos1] += Math.floor(num / 10);
            arr[pos2] = num % 10;
        }
    }
    while (arr[0] === 0 && arr.length > 1) arr.shift();
    return arr.join('');
};

// test
console.log(multiply('1', '2'));
console.log(multiply('1', '9'));
console.log(multiply('1', '11'));
console.log(multiply('9', '9'));
console.log(multiply('13', '4'));
console.log(multiply('123', '5'));
console.log(multiply('123', '456'));
console.log(multiply('123', '0'));