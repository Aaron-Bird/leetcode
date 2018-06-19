// Given a string co ntaining digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// ![image](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = [undefined, undefined, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    var len = digits.length;
    if (len === 0) return [];

    let arr = map[digits[0]].split('');
    let i = 1;
    while (i < len) {
        let temp = [];
        for (let j of arr) {
            for (let k of map[digits[i]]) {
                temp.push(j + k);
            }
        }
        arr = temp;

        i++;
    }
    return arr;
};

// test
console.log(letterCombinations('23'));
console.log(letterCombinations('234'));