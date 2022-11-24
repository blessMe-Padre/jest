
/**
 * фильтрует массив и оставляет только те элементы, индекс который четный
 * @param {array} arr в виде массива, например inString: [0, 1, 2, 3, 4] или [true, false, true, false, true, false]
 * @returns {array} возвращает отфильтрованный массив [0, 2, 4] или inString: [true, false, true, false, true, false]
 */

function filterArray(arr) {
    return arr.filter((item, index) => index % 2 === 0);
}

module.exports = filterArray;