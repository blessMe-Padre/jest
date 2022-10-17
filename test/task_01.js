function reverseString(str) {
    let string2 = str.split('').reverse().join('');
    console.log(string2);

    return string2;
}

module.exports = reverseString;