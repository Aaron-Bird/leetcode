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
var getPermutation = function(n, k) {
    let set = [];
    for (let i = 1; i <= n; i++) {
        set.push(i);
    }
    let swap = function(i, j) {
        let temp = set[i];
        set[i] = set[j];
        set[j] = temp;
    }
    let getNext = function() {
        let len = set.length;
        i = len - 2;
        while (set[i] > set[i + 1]) i--;
        if (i >= 0) {
            j = i + 1;
            while (set[i] < set[j] && j < len) j++;
            j--;
            swap(i, j);
        }
        i++;
        j = len - 1;
        while(i < j) {
            swap(i, j);
            i++;
            j--;
        }
    }
    for (let i = 0; i < k - 1; i++) {
        getNext();
    }
    return set.join('');
};


// test
console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));