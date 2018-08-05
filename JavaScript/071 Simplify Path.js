// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

// Corner Cases:

// Did you consider the case where path = "/../"?
// In this case, you should return "/".
// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".

// 注意细节
// '/a/../../../b' => '/b'
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    path = path.split(/\//);
    let i = 0;
    for (let j = 0; j < path.length; j++) {
        if (path[j] === '' || path[j] === '.') continue;
        if (path[j] === '..') {
            if (i > 0) i--;
            continue;
        }
        path[i] = path[j];
        i++;
    };
    return '/' + path.slice(0, i).join('/');
};

// test
console.log(simplifyPath('/home/'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home/../../..'));
console.log(simplifyPath('/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///'));

