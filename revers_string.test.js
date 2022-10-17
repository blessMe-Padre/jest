const reverseString = require('./test/reverse_string');

describe('Проверяем реверс строки:', () => {
    const testCase = [
        {
            inString: 'hello',
            expected: 'olleh',
        },
        {
            inString: 'jest',
            expected: 'tsej',
        },
        {
            inString: 'script',
            expected: 'tpircs',
        },
    ];

    testCase.forEach(test => {
        it(
            `Входящая строка: ${test.inString} ожидается ${test.expected}`,
            () => {
                const res = reverseString(test.inString);
                expect(res).toBe(test.expected);
            }
        );
    })
});
