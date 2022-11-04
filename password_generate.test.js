const passwordGenerate = require('./test/password_generate');

describe('Длинна пароля', () => {
    test('должна быть 6 символов', () => {
        expect(passwordGenerate(6)).toHaveLength(6)
    });
    test('должна быть 10 символов', () => {
        expect(passwordGenerate(10)).toHaveLength(10)
    });
    test('должна быть 5 символов', () => {
        expect(passwordGenerate(5)).toHaveLength(5)
    });
});