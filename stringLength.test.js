const stringLength = require('./stringLength');

test('returns correct character count', () => {
  expect(stringLength('Hello')).toBe(5);
  expect(() => stringLength('')).toThrow('String is empty');
  expect(() => stringLength('012345678900987654321')).toThrow('String is too long');
});

