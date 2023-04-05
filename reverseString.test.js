const reverseString = require('./reverseString');

test ('return string in revere', () => {
    expect(reverseString('Hello!')).toBe('!olleH')
});