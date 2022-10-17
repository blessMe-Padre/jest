const reverseString = require('./test/task_01');

test(
    'Проверяем реверс строки',
    () => {
        expect(reverseString('hello')).toBe('olleh');
    }
);

