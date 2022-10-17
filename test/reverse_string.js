function reverseString(str) {
    let string2 = str.split('').reverse().join('');
    return string2;
}

module.exports = reverseString;