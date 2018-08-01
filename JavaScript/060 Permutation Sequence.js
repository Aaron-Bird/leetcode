// The set [1,2,3,...,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note:

// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.
// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let factorial = [1];
    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    let succession = [];
    for (let i = 1; i <= n; i++) {
        succession.push(i);
    }
    k--;
    result = '';
    for (let i = n; i >= 1; i--) {
        let j = Math.floor(k / factorial[i - 1]);
        k %= factorial[i - 1];
        result += succession[j];
        succession.splice(j, 1);
    }
    return result;
};

// test
console.log(getPermutation(3, 2));