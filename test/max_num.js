function maxNum(...arr) {
    let array = arr.toString().split('');
    let max = array[0];
    for (i = 0; i <= array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

module.exports = maxNum;