const calculator = require('./calculator');

describe('My calculator', () => {
    test('Its adds', () => {
        expect(calculator.add).toBeTruthy();
    });

    test('Its subtracts', () => {
        expect(calculator.subtract).toBeFalsy();
    })

    test('Its divides', () => {
        expect(calculator.divide).toBeFalsy();
    });

    test('Its multiplies', () => {
        expect(calculator.multiply).toBeTruthy();
    })
})