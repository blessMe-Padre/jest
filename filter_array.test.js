const filterArray = require('./test/filter_array');

describe('Фильтруем массив:', () => {
    const testCase = [
        {
            inString: [0, 1, 2, 3, 4],
            expected: [0, 2, 4],
        },
        {
            inString: [true, false, true, false, true, false],
            expected: [true, true, true],
        },
    ];

    testCase.forEach(test => {
        it(
            `Входящая массив: ${test.inString} ожидается ${test.expected}`,
            () => {
                const res = filterArray(test.inString);
                expect(res).toEqual(test.expected);
            }
        );
    })
});