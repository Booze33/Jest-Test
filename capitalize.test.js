const capitalize = require('./capitalize')

test('first word should be a capital letter', () => {
    expect(capitalize('string')).toBe('String')
})