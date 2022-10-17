const sum = require('./test/sum');

describe('Функция Sum:', () => {
    test('Сложение чисел', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test('Число больше чем', () => {
        expect(sum(1, 2)).toBeGreaterThan(2)
    })
});