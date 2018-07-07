// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:

// Input: 1
// Output: "1"
// Example 2:

// Input: 4
// Output: "1211"


// 题目描述
// 1 '1'    输出'1'
// 2 '11'   上一个数列中有1个'1',输出'11'
// 3 '21'   上个数列中有2个'1',输出'21'
// 4 '1211' 上个数列中有1个'2',1个'1',输出'1211'
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let output = '1';
    while (n > 1) {
        let temp = '',
            count = 1,
            num = output[0];
        for (let i = 1; i <= output.length; i++) {
            if (output[i] !== num) {
                temp += count + output[i - 1];
                num = output[i];
                count = 1;
            } else {
                count++;
            }
        }
        
        output = temp;
        n--;
    }
    return output;
};

// test
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
console.log(countAndSay(7));