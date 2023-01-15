/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let numb = BigInt(digits.join(''))
    numb = numb+BigInt(1);

    return numb.toString().split('')
};