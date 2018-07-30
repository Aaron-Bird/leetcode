// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) return [];

    intervals.sort(function (i, j) {
        return i.start - j.start;
    });
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start > result[result.length - 1].end) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1].end = Math.max(intervals[i].end, result[result.length - 1].end);
        }
    }
    return result;
};

// test
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

let arr = [
    new Interval(1, 3),
    new Interval(2, 6),
    new Interval(8, 10),
    new Interval(15, 18)
];
console.log(merge(arr));
arr = [
    new Interval(1, 4),
    new Interval(4, 5),
];
console.log(merge(arr));