const maxNum = require('./test/max_num');

describe('Функция maxNum', () => {
    const testCase = [
        {
            inString: [0, 1, 2, 3, 4],
            expected: '4',
        },
        {
            inString: '123456',
            expected: '6',
        },
        {
            inString: '2, 2, 4, 5, 6',
            expected: '6',
        },
    ];

    testCase.forEach(test => {
        it(
            `Входящие числа: ${test.inString} ожидается максимальное число ${test.expected}`,
            () => {
                const res = maxNum(test.inString);
                expect(res).toBe(test.expected);
            }
        );
    })
});