module.exports = function reverse(n) {
    const reverseN = parseFloat(n.toString().split('').reverse().join(''));
    return reverseN;
}
