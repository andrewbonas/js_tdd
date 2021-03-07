const caesar = require('../code/caesar');


test('2 and "abc" to return "cde', () => {
  expect(caesar(2,'abc')).toBe('cde');
});

test('2 and "Ab.c" to return "Cd.e', () => {
  expect(caesar(2,'ab.c')).toBe('cd.e');
});